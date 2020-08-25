import React, {
    forwardRef,
    FunctionComponent,
    useCallback,
    useContext,
    useEffect,
    useRef,
} from 'react';

import { useThemeOverride } from '../../../utils/hooks';
import { useTheme } from '../../../styling';
import {
    AccordionHeaderIcon,
    AccordionHeaderRoot,
    AccordionHeaderTypography,
} from './style';
import { AccordionHeaderPropsType } from './type';
import { accordionDefaultTheme } from '../theme';
import {
    ACCORDION_HEADER_CLASS_PREFIX,
    accordionHeaderIcon,
    accordionHeaderRoot,
    accordionHeaderTypography,
} from '../constants';
import { dropdownActionItem } from '../../Dropdown/constants';
import { ExpansionIndicator } from '../../ExpansionIndicator';
import AccordionContext from '../AccordionContext';
import useAccordionHeaderClassName from './useAccordionHeaderClassName';

export const AccordionHeader: FunctionComponent<AccordionHeaderPropsType> = forwardRef(
    function AccordionHeader(
        { title, className, classNames, ...restProps },
        ref,
    ) {
        const { disabled, isExpanded, onToggle } = useContext(AccordionContext);

        const theme = useTheme();
        const internalInputRef = useRef(null);

        const classOverride = useAccordionHeaderClassName(
            ACCORDION_HEADER_CLASS_PREFIX,
            className,
            classNames,
            disabled,
            isExpanded,
        );

        useEffect(() => {
            if (ref && internalInputRef) {
                Object.assign(ref, internalInputRef);
            }
        }, [internalInputRef]);

        const enterKeyHandler = useCallback(
            (event: KeyboardEvent) => {
                const { key, target } = event;

                if (target === internalInputRef.current && key === 'Enter') {
                    if (onToggle) {
                        // @ts-ignore
                        onToggle(event);
                    }
                }
            },
            [internalInputRef, onToggle],
        );

        useEffect(() => {
            if (!disabled) {
                window.addEventListener('keyup', enterKeyHandler);
                return () => {
                    window.removeEventListener('keyup', enterKeyHandler);
                };
            }

            return () => {};
        }, [disabled, isExpanded]);

        useThemeOverride(
            ACCORDION_HEADER_CLASS_PREFIX,
            theme,
            accordionDefaultTheme,
        );

        return title ? (
            <AccordionHeaderRoot
                className={classOverride.Header}
                data-testid={accordionHeaderRoot}
                disabled={disabled}
                isExpanded={isExpanded}
                onClick={onToggle}
                ref={internalInputRef}
                tabIndex={0}
                theme={theme}
                {...restProps}
            >
                <AccordionHeaderTypography
                    className={classOverride.HeaderTitle}
                    data-testid={accordionHeaderTypography}
                    disabled={disabled}
                    label
                    large
                    theme={theme}
                >
                    {title}
                </AccordionHeaderTypography>
                <AccordionHeaderIcon
                    className={classOverride.IconContainer}
                    data-testid={accordionHeaderIcon}
                    disabled={disabled}
                    isExpanded={isExpanded}
                    theme={theme}
                >
                    <ExpansionIndicator
                        className={classOverride.Icon}
                        disabled={disabled}
                        isExpanded={isExpanded}
                        onClick={() => {}}
                        theme={theme}
                        data-testid={dropdownActionItem}
                    />
                </AccordionHeaderIcon>
            </AccordionHeaderRoot>
        ) : null;
    },
);
