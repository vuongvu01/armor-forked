import React, {
    forwardRef,
    FunctionComponent,
    useCallback,
    useContext,
    useEffect,
    useRef,
} from 'react';

import { useComponentTheme } from '../../../utils/hooks';
import {
    AccordionHeaderExpansionIndicator,
    AccordionHeaderIcon,
    AccordionHeaderRoot,
    AccordionHeaderTypography,
    AccordionHeaderBody,
} from './style';
import { AccordionHeaderPropsType } from './type';
import { accordionHeaderDefaultTheme } from './theme';
import {
    ACCORDION_HEADER_CLASS_PREFIX,
    accordionHeaderIcon,
    accordionHeaderRoot,
    accordionHeaderTypography,
} from '../constants';
import { dropdownActionItem } from '../../Dropdown/constants';
import AccordionContext from '../AccordionContext';
import useAccordionHeaderClassName from './useAccordionHeaderClassName';
import { useInternalRef } from '../../../utils';

export const AccordionHeader: FunctionComponent<AccordionHeaderPropsType> = forwardRef(
    function AccordionHeader(
        { title, children, className, classNames, ...restProps },
        ref,
    ) {
        const theme = useComponentTheme(
            ACCORDION_HEADER_CLASS_PREFIX,
            accordionHeaderDefaultTheme,
        );
        const { disabled, isExpanded, onToggle } = useContext(AccordionContext);

        const internalInputRef = useRef(null);

        const classOverride = useAccordionHeaderClassName(
            ACCORDION_HEADER_CLASS_PREFIX,
            className,
            classNames,
            disabled,
            isExpanded,
        );

        useInternalRef(ref, internalInputRef);

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

        return (
            <AccordionHeaderRoot
                data-testid={accordionHeaderRoot}
                {...restProps}
                className={classOverride.Header}
                disabled={disabled}
                isExpanded={isExpanded}
                onClick={onToggle}
                ref={internalInputRef}
                tabIndex={0}
                theme={theme}
            >
                <AccordionHeaderBody>
                    {title && (
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
                    )}
                    {children}
                </AccordionHeaderBody>
                <AccordionHeaderIcon
                    className={classOverride.IconContainer}
                    data-testid={accordionHeaderIcon}
                    disabled={disabled}
                    isExpanded={isExpanded}
                    theme={theme}
                >
                    <AccordionHeaderExpansionIndicator
                        className={classOverride.ExpansionIndicator}
                        disabled={disabled}
                        isExpanded={isExpanded}
                        onClick={() => {}}
                        theme={theme}
                        data-testid={dropdownActionItem}
                    />
                </AccordionHeaderIcon>
            </AccordionHeaderRoot>
        );
    },
);
