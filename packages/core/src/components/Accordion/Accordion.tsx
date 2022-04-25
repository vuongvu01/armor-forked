import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useAccordionClassName } from './hooks/useAccordionClassName';
import { useAccordion } from './hooks/useAccordion';
import { AccordionRoot } from './style';
import { AccordionPropsType } from './type';
import { ACCORDION_CLASS_PREFIX, accordionRoot } from './constants';
import { AccordionContext } from './AccordionContext';

/**
 * # Accordion
 *
 * Accordion is used to allow the user to focus on one section of a content while keep the others hidden.
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/40676d-accordion/b/198afb)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Accordion, AccordionHeader, AccordionContent } from '@deliveryhero/armor';
 *
 * const handleOnToggle = () => console.log('Toggle');
 *
 * <Accordion onToggle={handleOnToggle}>
 *     <AccordionHeader title="Support" />
 *     <AccordionContent>Support content</AccordionContent>
 * </Accordion>
 * <Accordion onToggle={handleOnToggle}>
 *     <AccordionHeader
 *         title="Settings"
 *     />
 *     <AccordionContent>Settings content</AccordionContent>
 * </Accordion>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Accordion = forwardRef<HTMLDivElement, AccordionPropsType>(
    function Accordion({ children, className, ...props }, ref) {
        const { rootProps, contextProps, disabled, isExpanded } =
            useAccordion<HTMLDivElement>(props, ref);

        const classOverride = useAccordionClassName(
            ACCORDION_CLASS_PREFIX,
            className,
            disabled,
            isExpanded,
        );

        return (
            <AccordionContext.Provider {...contextProps}>
                <AccordionRoot
                    {...rootProps}
                    data-testid={accordionRoot}
                    className={classOverride.Root}
                >
                    {children}
                </AccordionRoot>
            </AccordionContext.Provider>
        );
    },
);

Accordion.displayName = ACCORDION_CLASS_PREFIX;

Accordion.defaultProps = {
    defaultExpanded: false,
    disabled: false,
};

Accordion.propTypes = {
    disabled: PropTypes.bool,
    expanded: PropTypes.bool,
    onToggle: PropTypes.func,
};

export const MemoizedAccordion = memo(Accordion);
