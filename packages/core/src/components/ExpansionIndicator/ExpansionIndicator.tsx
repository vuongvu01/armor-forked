import React, { FC, memo } from 'react';

import { ExpansionIndicatorPropsType } from './type';
import {
    ExpansionIndicatorContent,
    ExpansionIndicatorIcon,
    ExpansionIndicatorRoot,
} from './style';
import useExpansionIndicatorClassName from './utils/useExpansionIndicatorClassName';
import {
    EXPANSION_INDICATOR_CLASS_PREFIX,
    expansionIndicatorContainer,
    expansionIndicatorContent,
    expansionIndicatorIcon,
} from './constants';

/**
 * # ExpansionIndicator
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/206761-expansion-indicator/b/722ea7)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import React, { useState } from 'react';
 * import { ExpansionIndicator } from '@deliveryhero/armor';
 *
 * const [expanded, setExpanded] = useState(false);
 *
 * <ExpansionIndicator
 *     isExpanded={expanded}
 *     onClick={() => setExpanded(!expanded)}
 * />
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const ExpansionIndicator: FC<
    React.PropsWithChildren<ExpansionIndicatorPropsType>
> = ({
    className,
    disabled,
    isExpanded,
    expanded,
    onClick,
    tabIndex,
    ...restProps
}) => {
    const reallyExpanded = isExpanded ?? expanded;

    const classOverride = useExpansionIndicatorClassName(
        EXPANSION_INDICATOR_CLASS_PREFIX,
        className,
        disabled,
        reallyExpanded,
    );

    return (
        <ExpansionIndicatorRoot
            data-testid={expansionIndicatorContainer}
            {...restProps}
            className={classOverride.Root}
            disabled={disabled}
            onClick={onClick}
            tabIndex={tabIndex}
        >
            <ExpansionIndicatorContent
                className={classOverride.Content}
                data-testid={expansionIndicatorContent}
            >
                <ExpansionIndicatorIcon
                    className={classOverride.Icon}
                    data-testid={expansionIndicatorIcon}
                    disabled={disabled}
                    expanded={reallyExpanded}
                />
            </ExpansionIndicatorContent>
        </ExpansionIndicatorRoot>
    );
};

ExpansionIndicator.defaultProps = {
    displaySeparator: false,
};

export const MemoizedExpansionIndicator = memo(ExpansionIndicator);
