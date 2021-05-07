import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useTooltipClassNames } from './hooks/useTooltipClassNames';
import { TooltipRoot, TooltipArrow } from './style';
import { TooltipPropsType } from './type';
import { tooltipDefaultTheme } from './theme';
import { TOOLTIP_CLASS_PREFIX } from './constants';
import { useTooltip } from './hooks/useTooltip';
import { PortalToBody } from '../../system/util/PortalToBody';

export const Tooltip = forwardRef<HTMLDivElement, TooltipPropsType>(
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
            portalProps,
            rootProps,
            arrowProps,
        } = useTooltip(props, ref);

        const classNameComponents = useTooltipClassNames(
            TOOLTIP_CLASS_PREFIX,
            className,
            align,
        );

        if (!validTrigger) {
            return trigger || null;
        }

        return (
            <>
                {trigger}
                {open && !!content && (
                    <PortalToBody {...portalProps}>
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
                    </PortalToBody>
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
