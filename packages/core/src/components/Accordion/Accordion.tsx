import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useAccordionClassName } from './hooks/useAccordionClassName';
import { useAccordion } from './hooks/useAccordion';
import { AccordionRoot } from './style';
import { AccordionPropsType } from './type';
import { ACCORDION_CLASS_PREFIX, accordionRoot } from './constants';
import { AccordionContext } from './AccordionContext';

/**
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
