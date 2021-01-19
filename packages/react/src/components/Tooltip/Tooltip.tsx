import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useTooltipClassNames } from './utils/useTooltipClassNames';
import { TooltipRoot, TooltipArrow } from './style';
import { TooltipPropsType } from './type';
import { tooltipDefaultTheme } from './theme';
import { TOOLTIP_CLASS_PREFIX } from './constants';
import { useTooltip } from './utils/useTooltip';

export const Tooltip: FunctionComponent<TooltipPropsType> = forwardRef(
    function Tooltip({ className, ...props }, ref) {
        const theme = useComponentTheme(
            TOOLTIP_CLASS_PREFIX,
            tooltipDefaultTheme,
        );

        const {
            align,
            open,
            trigger,
            validTrigger,
            content,
            rootProps,
            arrowProps,
        } = useTooltip(props, ref);

        const classNameComponents = useTooltipClassNames(
            TOOLTIP_CLASS_PREFIX,
            className,
            align,
        );

        if (!validTrigger) {
            return null;
        }

        return (
            <>
                {trigger}
                {open && (
                    <TooltipRoot
                        {...rootProps}
                        theme={theme}
                        className={classNameComponents.Root}
                    >
                        {content}
                        <TooltipArrow
                            {...arrowProps}
                            theme={theme}
                            className={classNameComponents.Arrow}
                        />
                    </TooltipRoot>
                )}
            </>
        );
    },
);

Tooltip.defaultProps = {
    align: 'top',
    error: false,
    small: false,
};

/** Support of prop-types is here for project that don't use TypeScript */
Tooltip.propTypes = {
    /** Tooltip alignment */
    align: PropTypes.oneOf([
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
    ]),
    small: PropTypes.bool,
};
