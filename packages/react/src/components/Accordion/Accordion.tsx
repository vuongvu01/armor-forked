import React, {
    forwardRef,
    FunctionComponent,
    MouseEvent,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import { useAccordionClassName } from './utils';
import { AccordionRoot } from './style';
import { AccordionPropsType } from './type';
import { accordionDefaultTheme } from './theme';
import { ACCORDION_CLASS_PREFIX, accordionRoot } from './constants';
import AccordionContext from './AccordionContext';

export const Accordion: FunctionComponent<AccordionPropsType> = forwardRef(
    function Accordion(
        {
            children,
            className,
            classNames,
            disabled,
            expanded,
            defaultExpanded = false,
            onToggle,
            ...restProps
        },
        ref,
    ) {
        const [isExpanded, setIsExpanded] = useState(defaultExpanded);
        const theme = useTheme();

        const classOverride = useAccordionClassName(
            ACCORDION_CLASS_PREFIX,
            className,
            classNames,
            disabled,
            isExpanded,
        );

        useThemeOverride(ACCORDION_CLASS_PREFIX, theme, accordionDefaultTheme);

        const handleHeaderToggle = useCallback(
            (event?: MouseEvent<HTMLInputElement>) => {
                setIsExpanded(!isExpanded);

                if (onToggle) {
                    onToggle(event, !isExpanded);
                }
            },
            [isExpanded, onToggle],
        );

        useEffect(() => {
            if (typeof expanded === 'boolean' && expanded !== isExpanded) {
                setIsExpanded(expanded);

                if (onToggle) {
                    onToggle(null, expanded);
                }
            }
        }, [expanded]);

        const contextValue = useMemo(
            () => ({
                disabled,
                isExpanded,
                onToggle: handleHeaderToggle,
            }),
            [disabled, isExpanded, handleHeaderToggle],
        );

        return (
            <AccordionContext.Provider value={contextValue}>
                <AccordionRoot
                    className={classOverride.Root}
                    data-testid={accordionRoot}
                    isExpanded={isExpanded}
                    ref={ref}
                    theme={theme}
                    {...restProps}
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
