import React, {
    MouseEventHandler,
    MutableRefObject,
    ReactElement,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import {
    createPopper,
    Instance,
    OptionsGeneric,
    Placement,
    PositioningStrategy,
    StrictModifiers,
} from '@popperjs/core';
import { isFragment } from 'react-is';
import {
    TooltipAlignmentType,
    TooltipPropsType,
    TooltipStylesPropsType,
} from './type';
import { returnEmptyString, makeBEM, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useTooltipStylesOverride = (
    styles?: TooltipStylesPropsType,
): Required<TooltipStylesPropsType> =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            Arrow: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useTooltipClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    align?: TooltipAlignmentType,
) =>
    useMemo(() => {
        const rootClassNames = makeClassName(
            classPrefix,
            className,
            classNames,
        );
        const rootStateClassNames: string[] = [];
        if (align) {
            rootStateClassNames.push(
                makeBEM(
                    classPrefix,
                    'Root',
                    `align-${align === 'top' ? 'top' : 'bottom'}`,
                ),
            );
        }

        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`,
            Arrow: makeBEM(classPrefix, 'Arrow'),
        };
    }, [classPrefix, className, classNames, align]);

export const getPopperOptions = (
    arrowReference: MutableRefObject<HTMLElement | null>,
    props: TooltipPropsType,
) => {
    const { align } = props;

    const options: OptionsGeneric<StrictModifiers> = {
        placement: align as Placement,
        strategy: 'absolute' as PositioningStrategy,
        modifiers: [],
    };

    if (!arrowReference.current) {
        return options;
    }

    options.modifiers = [
        {
            name: 'arrow',
            options: {
                padding: 5, // todo: take from theme
                element: arrowReference.current,
            },
        },
        {
            name: 'flip',
            options: {
                fallbackPlacements: ['top'],
            },
        },
        {
            name: 'offset',
            options: {
                offset: [0, 12], // todo: take from theme
            },
        },
    ];

    return options;
};

export const usePopper = (
    children: ReactNode,
    align?: TooltipAlignmentType,
) => {
    let triggerReference = useRef<Element>();

    const childrenElement = children as ReactElement;
    // @ts-ignore: todo: fixme: LD-97
    if (childrenElement && childrenElement.ref) {
        // @ts-ignore: todo: fixme: LD-97
        triggerReference = childrenElement.ref;
    }

    const tooltipReference = useRef<HTMLElement>();
    const arrowReference = useRef<HTMLElement>(null);

    const [instance, setInstance] = useState<Instance>();

    useEffect(() => {
        setTimeout(() => {
            if (!triggerReference.current || !tooltipReference.current) {
                return;
            }

            const popperOptions = getPopperOptions(arrowReference, { align });

            if (!instance) {
                tooltipReference.current.style.visibility = 'visible';

                setInstance(
                    createPopper(
                        triggerReference.current,
                        tooltipReference.current,
                        popperOptions,
                    ),
                );
            } else {
                instance.setOptions(popperOptions);
            }
        }, 0);

        return () => {
            if (instance) {
                instance.destroy();
            }
        };
    }, [align]);

    return {
        triggerReference,
        tooltipReference,
        arrowReference,
    };
};

export const useEventProxy = (
    children: ReactNode,
    setHidden: (hidden: boolean) => void,
) => {
    const childrenElement = children as ReactElement;

    let onMouseOver: MouseEventHandler | null = null;
    if (
        childrenElement &&
        childrenElement.props &&
        childrenElement.props.onMouseOver
    ) {
        onMouseOver = childrenElement.props.onMouseOver;
    }
    const onMouseOverProxy = useCallback(
        event => {
            setHidden(false);
            if (onMouseOver) {
                onMouseOver(event);
            }
        },
        [onMouseOver, setHidden],
    );

    let onMouseOut: MouseEventHandler | null = null;
    if (
        childrenElement &&
        childrenElement.props &&
        childrenElement.props.onMouseOut
    ) {
        onMouseOut = childrenElement.props.onMouseOut;
    }
    const onMouseOutProxy = useCallback(
        event => {
            setHidden(true);
            if (onMouseOut) {
                onMouseOut(event);
            }
        },
        [onMouseOut, setHidden],
    );

    return {
        onMouseOverProxy,
        onMouseOutProxy,
    };
};

export const validateChildren = (children: ReactNode): ReactNode | null => {
    if (!children) {
        console.error('Tooltip should have children to attach itself to.');
        return null;
    }

    if (Array.isArray(children)) {
        console.error(
            'Tooltip component can only accept single-node child element. Wrap your nodes with a parent node.',
        );
        return null;
    }

    if (isFragment(children)) {
        console.error(
            'Tooltip component does not support React.Fragment as a child node.',
        );
        return children;
    }

    if (typeof children === 'string' || typeof children === 'number') {
        return <span>{children}</span>;
    }

    return children;
};
