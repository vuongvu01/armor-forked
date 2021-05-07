import React, { forwardRef, useCallback, useContext, useEffect } from 'react';

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
import { DROPDOWN_ACTION_ITEM } from '../../Dropdown/constants';
import AccordionContext from '../AccordionContext';
import useAccordionHeaderClassName from './hooks/useAccordionHeaderClassName';
import { getWindow } from '../../../system/util/globals';
import { useRootRef } from '../../../system';

export const AccordionHeader = forwardRef<
    HTMLDivElement,
    AccordionHeaderPropsType
>(function AccordionHeader({ title, children, className, ...restProps }, ref) {
    const theme = useComponentTheme(
        ACCORDION_HEADER_CLASS_PREFIX,
        accordionHeaderDefaultTheme,
    );
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
    }, [disabled, isExpanded]);

    return (
        <AccordionHeaderRoot
            data-testid={accordionHeaderRoot}
            {...restProps}
            className={classOverride.Root}
            disabled={disabled}
            isExpanded={isExpanded}
            onClick={onToggle}
            ref={internalInputRef}
            tabIndex={0}
            theme={theme}
        >
            <AccordionHeaderBody theme={theme} className={classOverride.Body}>
                {title && (
                    <AccordionHeaderTypography
                        className={classOverride.Title}
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
                    data-testid={DROPDOWN_ACTION_ITEM}
                />
            </AccordionHeaderIcon>
        </AccordionHeaderRoot>
    );
});
