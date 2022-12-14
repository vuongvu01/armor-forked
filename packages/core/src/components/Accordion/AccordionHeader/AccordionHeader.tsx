import React, { forwardRef, useCallback, useContext, memo } from 'react';
import { useRootRef, useEventListener } from '@deliveryhero/armor-system';

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
 * # AccordionContent
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/40676d-accordion/b/198afb)
 *
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

    const internalHeaderRootRef = useRootRef<HTMLDivElement>(ref);

    const enterKeyHandler = useCallback(
        (event: KeyboardEvent) => {
            const { key, target } = event;

            if (target === internalHeaderRootRef.current && key === 'Enter') {
                // @ts-ignore
                onToggle?.(event);
            }
        },
        [internalHeaderRootRef, onToggle],
    );

    useEventListener('keyup', enterKeyHandler, internalHeaderRootRef, disabled);

    return (
        <AccordionHeaderRoot
            data-testid={accordionHeaderRoot}
            {...restProps}
            className={classOverride.Root}
            disabled={disabled}
            isExpanded={isExpanded}
            onClick={onToggle}
            ref={internalHeaderRootRef}
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

export const MemoizedAccordionHeader = memo(AccordionHeader);
