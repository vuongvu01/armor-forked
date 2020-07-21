import React, { FunctionComponent, forwardRef } from 'react';
import uniqueId from 'lodash.uniqueid';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import { useTabClassName } from './utils';
import { TabContainer, TabLabel } from './style';
import { TabPropsType } from './type';
import { tabDefaultTheme } from './theme';

export const TAB_CLASS_PREFIX = 'Tab';

export const Tab: FunctionComponent<TabPropsType> = forwardRef(function Tab(
    {
        className,
        classNames,
        currentlyActiveTab,
        disabled,
        fullWidth,
        id: propsId,
        label,
        handleClick,
        tabIndex,
        value,
        ...otherProps
    },
    ref,
) {
    const theme = useTheme();
    const id = propsId || uniqueId('tab-id-');
    const matchingContentViewValue =
        typeof value !== 'undefined' ? value : tabIndex;
    const isActive = currentlyActiveTab === tabIndex;

    useThemeOverride(TAB_CLASS_PREFIX, theme, tabDefaultTheme);

    const classOverride = useTabClassName(
        TAB_CLASS_PREFIX,
        className,
        classNames,
        disabled,
        isActive,
    );

    const handleSelect = (
        event: React.MouseEvent<HTMLInputElement, MouseEvent>,
    ) => {
        if (handleClick) {
            handleClick(event, tabIndex, matchingContentViewValue);
        }
    };

    return (
        <TabContainer
            disabled={disabled}
            isActive={isActive}
            fullWidth={fullWidth}
            theme={theme}
            {...otherProps}
        >
            <TabLabel
                className={classOverride.Label}
                disabled={disabled}
                id={id}
                isActive={isActive}
                onClick={handleSelect}
                ref={ref}
                theme={theme}
            >
                {label}
            </TabLabel>
        </TabContainer>
    );
});

Tab.displayName = TAB_CLASS_PREFIX;

Tab.defaultProps = {
    disabled: false,
};

Tab.propTypes = {
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    handleClick: PropTypes.func,
    ref: PropTypes.func,
    // tabIndex: PropTypes.number, // TODO (nmelnikov 2020-07-21): we need to hide internal props from storybook docs
    value: PropTypes.number,
};
