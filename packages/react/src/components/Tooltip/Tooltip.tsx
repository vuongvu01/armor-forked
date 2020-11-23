import React, { FunctionComponent, ReactElement, useState } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { validateChildren } from './utils/validateChildren';
import { useTooltipClassNames } from './utils/useTooltipClassNames';
import { usePopper } from './utils/usePopper';
import { useEventProxy } from './utils/useEventProxy';
import { TooltipRoot, TooltipArrow } from './style';
import { TooltipPropsType } from './type';
import { tooltipDefaultTheme } from './theme';
import { consoleWarn } from '../../system/util/consoleWarn';
import { TOOLTIP_CLASS_PREFIX } from './constants';

export const Tooltip: FunctionComponent<TooltipPropsType> = ({
    className,
    children,
    content,
    align,
    dark,
    error,
    ...restProps
}) => {
    const theme = useComponentTheme(TOOLTIP_CLASS_PREFIX, tooltipDefaultTheme);

    const classNameComponents = useTooltipClassNames(
        TOOLTIP_CLASS_PREFIX,
        className,
        align,
    );

    const [hidden, setHidden] = useState(true);
    const { triggerReference, tooltipReference, arrowReference } = usePopper(
        children,
        align,
    );
    const { onMouseOverProxy, onMouseOutProxy } = useEventProxy(
        children,
        setHidden,
    );

    const validChildren = validateChildren(children);
    if (!validChildren) {
        consoleWarn('Tooltip component was attached to invalid children');
        return null;
    }

    return (
        <>
            {React.cloneElement(validChildren as ReactElement, {
                ref: triggerReference,
                onMouseOver: onMouseOverProxy,
                onMouseOut: onMouseOutProxy,
            })}
            <TooltipRoot
                {...restProps}
                theme={theme}
                className={classNameComponents.Root}
                dark={dark}
                error={error}
                ref={tooltipReference}
                hidden={hidden}
            >
                {content}
                <TooltipArrow
                    theme={theme}
                    className={classNameComponents.Arrow}
                    dark={dark}
                    error={error}
                    // @ts-ignore: fixme: LD-97
                    ref={arrowReference}
                />
            </TooltipRoot>
        </>
    );
};

Tooltip.defaultProps = {
    align: 'top',
    dark: false,
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
    dark: PropTypes.bool,
    small: PropTypes.bool,
};
