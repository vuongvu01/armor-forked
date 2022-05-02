import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import { PortalToBody } from '@deliveryhero/armor-system';

import { useTooltipClassNames } from './hooks/useTooltipClassNames';
import { TooltipRoot, TooltipArrow } from './style';
import { TooltipPropsType } from './type';
import { TOOLTIP_CLASS_PREFIX } from './constants';
import { useTooltip } from './hooks/useTooltip';

/**
 * # Tooltip
 *
 * These are used to provide addition information about a particular item. They are triggered either by click or hover on an info-icon
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/634a2f-tooltip/b/527bb6)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Tooltip, Button } from '@deliveryhero/armor';
 *
 * <Tooltip content="You got free cookies">
 *     <Button>Click me!</Button>
 * </Tooltip>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipPropsType>(
    function Tooltip({ className, ...props }, ref) {
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
                            className={classNameComponents.Root}
                        >
                            {content}
                            <TooltipArrow
                                {...arrowProps}
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

export const MemoizedTooltip = memo(Tooltip);
