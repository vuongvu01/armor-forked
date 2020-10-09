import React, { FunctionComponent } from 'react';

import { ExpansionIndicatorPropsType } from './type';
import {
    ExpansionIndicatorRoot,
    ExpansionIndicatorContent,
    ExpansionIndicatorIcon,
} from './style';
import { useComponentTheme } from '../../utils/hooks';
import useExpansionIndicatorClassName from './useExpansionIndicatorClassName';
import { expansionIndicatorDefaultTheme } from './theme';
import {
    EXPANSION_INDICATOR_CLASS_PREFIX,
    expansionIndicatorContainer,
    expansionIndicatorContent,
    expansionIndicatorIcon,
} from './constants';

export const ExpansionIndicator: FunctionComponent<ExpansionIndicatorPropsType> = ({
    className,
    classNames,
    disabled,
    error,
    displaySeparator,
    isExpanded,
    onClick,
    tabIndex,
    ...restProps
}) => {
    const theme = useComponentTheme(
        EXPANSION_INDICATOR_CLASS_PREFIX,
        expansionIndicatorDefaultTheme,
    );

    const classOverride = useExpansionIndicatorClassName(
        EXPANSION_INDICATOR_CLASS_PREFIX,
        className,
        classNames,
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
                    isExpanded={isExpanded}
                    theme={theme}
                />
            </ExpansionIndicatorContent>
        </ExpansionIndicatorRoot>
    );
};

ExpansionIndicator.defaultProps = {
    displaySeparator: false,
};
