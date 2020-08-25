import React, { FunctionComponent } from 'react';

import { ExpansionIndicatorPropsType } from './type';
import {
    ExpansionIndicatorRoot,
    ExpansionIndicatorContent,
    ExpansionIndicatorIcon,
} from './style';
import { useTheme } from '../../styling';
import { useThemeOverride } from '../../utils/hooks';
import useExpansionIndicatorClassName from './useExpansionIndicatorClassName';
import { expansionIndicatorDefaultTheme } from './theme';
import {
    CLASS_PREFIX,
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
    theme: propsTheme,
    ...restProps
}) => {
    const theme = useTheme(propsTheme);
    useThemeOverride(CLASS_PREFIX, theme, expansionIndicatorDefaultTheme);

    const classOverride = useExpansionIndicatorClassName(
        CLASS_PREFIX,
        className,
        classNames,
        disabled,
        isExpanded,
    );

    return (
        <ExpansionIndicatorRoot
            className={classOverride.Root}
            data-testid={expansionIndicatorContainer}
            disabled={disabled}
            onClick={onClick}
            tabIndex={tabIndex}
            theme={theme}
            {...restProps}
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
