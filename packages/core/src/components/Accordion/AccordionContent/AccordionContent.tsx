import React, { forwardRef, useContext } from 'react';

import { AccordionContentRoot } from './style';
import { AccordionContentPropsType } from './type';
import { ACCORDION_CONTENT_CLASS_PREFIX, accordionContent } from '../constants';
import { AccordionContext } from '../AccordionContext';
import { useAccordionContentClassName } from './hooks/useAccordionContentClassName';

/**
 * # AccordionContent
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/40676d-accordion/b/198afb)
 *
 * @armor-docs-component
 */
export const AccordionContent = forwardRef<
    HTMLDivElement,
    AccordionContentPropsType
>(function AccordionContent({ children, className, ...restProps }, ref) {
    const { disabled, isExpanded } = useContext(AccordionContext);

    const classOverride = useAccordionContentClassName(
        ACCORDION_CONTENT_CLASS_PREFIX,
        className,
        disabled,
        isExpanded,
    );

    return (
        <AccordionContentRoot
            data-testid={accordionContent}
            {...restProps}
            className={classOverride.Root}
            disabled={disabled}
            isExpanded={isExpanded}
            ref={ref}
        >
            {children}
        </AccordionContentRoot>
    );
});
