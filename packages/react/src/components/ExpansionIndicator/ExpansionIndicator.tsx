import React, { FC } from 'react';

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
import { useTheme } from '../../styling';

/**
 * @armor-docs-component
 */
export const ExpansionIndicator: FC<ExpansionIndicatorPropsType> = ({
    className,
    disabled,
    isExpanded,
    expanded,
    onClick,
    tabIndex,
    ...restProps
}) => {
    const theme = useTheme().armor;

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
            theme={theme}
        >
            <ExpansionIndicatorContent
                className={classOverride.Content}
                data-testid={expansionIndicatorContent}
                theme={theme}
            >
                <ExpansionIndicatorIcon
                    className={classOverride.Icon}
                    data-testid={expansionIndicatorIcon}
                    disabled={disabled}
                    expanded={reallyExpanded}
                    theme={theme}
                />
            </ExpansionIndicatorContent>
        </ExpansionIndicatorRoot>
    );
};

ExpansionIndicator.defaultProps = {
    displaySeparator: false,
};
