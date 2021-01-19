import React, { FunctionComponent } from 'react';

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

export const ExpansionIndicator: FunctionComponent<ExpansionIndicatorPropsType> = ({
    className,
    disabled,
    error,
    displaySeparator,
    isExpanded,
    onClick,
    tabIndex,
    ...restProps
}) => {
    const theme = useTheme().armor;

    const classOverride = useExpansionIndicatorClassName(
        EXPANSION_INDICATOR_CLASS_PREFIX,
        className,
        disabled,
        isExpanded,
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
                error={error}
                displaySeparator={displaySeparator}
                theme={theme}
            >
                <ExpansionIndicatorIcon
                    className={classOverride.Icon}
                    data-testid={expansionIndicatorIcon}
                    disabled={disabled}
                    error={error}
                    expanded={isExpanded}
                    theme={theme}
                />
            </ExpansionIndicatorContent>
        </ExpansionIndicatorRoot>
    );
};

ExpansionIndicator.defaultProps = {
    displaySeparator: false,
};
