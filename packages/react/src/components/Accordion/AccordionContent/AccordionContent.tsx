import React, { forwardRef, FunctionComponent, useContext } from 'react';

import { useComponentTheme } from '../../../utils/hooks';
import { AccordionContentRoot } from './style';
import { AccordionContentPropsType } from './type';
import { accordionContentDefaultTheme } from './theme';
import { ACCORDION_CONTENT_CLASS_PREFIX, accordionContent } from '../constants';
import AccordionContext from '../AccordionContext';
import useAccordionContentClassName from './useAccordionContentClassName';

export const AccordionContent: FunctionComponent<AccordionContentPropsType> = forwardRef(
    function AccordionContent(
        { children, className, classNames, ...restProps },
        ref,
    ) {
        const theme = useComponentTheme(
            ACCORDION_CONTENT_CLASS_PREFIX,
            accordionContentDefaultTheme,
        );
        const { disabled, isExpanded } = useContext(AccordionContext);

        const classOverride = useAccordionContentClassName(
            ACCORDION_CONTENT_CLASS_PREFIX,
            className,
            classNames,
            disabled,
            isExpanded,
        );

        return (
            <AccordionContentRoot
                data-testid={accordionContent}
                {...restProps}
                className={classOverride.Content}
                disabled={disabled}
                isExpanded={isExpanded}
                ref={ref}
                theme={theme}
            >
                {children}
            </AccordionContentRoot>
        );
    },
);
