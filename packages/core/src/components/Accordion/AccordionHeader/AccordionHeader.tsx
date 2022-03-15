import React, { forwardRef, useCallback, useContext, useEffect } from 'react';
import { getWindow, useRootRef } from '@deliveryhero/armor-system';

import {
    AccordionHeaderExpansionIndicator,
    AccordionHeaderIcon,
    AccordionHeaderRoot,
    AccordionHeaderTitle,
    AccordionHeaderBody,
} from './style';
import { AccordionHeaderPropsType } from './type';
import {
    ACCORDION_HEADER_CLASS_PREFIX,
    accordionHeaderIcon,
    accordionHeaderRoot,
    accordionHeaderTypography,
} from '../constants';
import { DROPDOWN_ACTION_ITEM } from '../../Dropdown/constants';
import { AccordionContext } from '../AccordionContext';
import { useAccordionHeaderClassName } from './hooks/useAccordionHeaderClassName';

/**
 * @armor-docs-component
 */
export const AccordionHeader = forwardRef<
    HTMLDivElement,
    AccordionHeaderPropsType
>(function AccordionHeader({ title, children, className, ...restProps }, ref) {
    const { disabled, isExpanded, onToggle } = useContext(AccordionContext);

    const classOverride = useAccordionHeaderClassName(
        ACCORDION_HEADER_CLASS_PREFIX,
        className,
        disabled,
        isExpanded,
    );

    const internalInputRef = useRootRef<HTMLDivElement>(ref);

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
        const win = getWindow();
        if (win && !disabled) {
            win.addEventListener('keyup', enterKeyHandler);
            return () => {
                win.removeEventListener('keyup', enterKeyHandler);
            };
        }

        return () => {};
    }, [disabled, enterKeyHandler, isExpanded]);

    return (
        <AccordionHeaderRoot
            data-testid={accordionHeaderRoot}
            {...restProps}
            className={classOverride.Root}
            disabled={disabled}
            isExpanded={isExpanded}
            onClick={onToggle}
            ref={internalInputRef}
            tabIndex={disabled ? -1 : 0}
        >
            <AccordionHeaderBody className={classOverride.Body}>
                {title && (
                    <AccordionHeaderTitle
                        className={classOverride.Title}
                        data-testid={accordionHeaderTypography}
                        disabled={disabled}
                    >
                        {title}
                    </AccordionHeaderTitle>
                )}
                {children}
            </AccordionHeaderBody>
            <AccordionHeaderIcon
                className={classOverride.IconContainer}
                data-testid={accordionHeaderIcon}
                disabled={disabled}
                isExpanded={isExpanded}
            >
                <AccordionHeaderExpansionIndicator
                    className={classOverride.ExpansionIndicator}
                    disabled={disabled}
                    isExpanded={isExpanded}
                    onClick={() => {}}
                    data-testid={DROPDOWN_ACTION_ITEM}
                />
            </AccordionHeaderIcon>
        </AccordionHeaderRoot>
    );
});
