import React, { forwardRef, FunctionComponent, useContext } from 'react';

import { useThemeOverride } from '../../../utils/hooks';
import { useTheme } from '../../../styling';
import { AccordionContentRoot } from './style';
import { AccordionContentPropsType } from './type';
import { accordionDefaultTheme } from '../theme';
import { ACCORDION_CONTENT_CLASS_PREFIX, accordionContent } from '../constants';
import AccordionContext from '../AccordionContext';
import useAccordionContentClassName from './useAccordionContentClassName';

export const AccordionContent: FunctionComponent<AccordionContentPropsType> = forwardRef(
    function AccordionContent(
        { children, className, classNames, ...restProps },
        ref,
    ) {
        const { disabled, isExpanded } = useContext(AccordionContext);

        const theme = useTheme();

        useThemeOverride(
            ACCORDION_CONTENT_CLASS_PREFIX,
            theme,
            accordionDefaultTheme,
        );

        const classOverride = useAccordionContentClassName(
            ACCORDION_CONTENT_CLASS_PREFIX,
            className,
            classNames,
            disabled,
            isExpanded,
        );

        return (
            <AccordionContentRoot
                className={classOverride.Content}
                data-testid={accordionContent}
                disabled={disabled}
                isExpanded={isExpanded}
                ref={ref}
                theme={theme}
                {...restProps}
            >
                {children}
            </AccordionContentRoot>
        );
    },
);
