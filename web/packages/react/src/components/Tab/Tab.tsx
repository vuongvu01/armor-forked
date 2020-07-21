import React, { FunctionComponent, forwardRef } from 'react';
import uniqueId from 'lodash.uniqueid';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import { useTabClassName } from './utils';
import { TabRoot } from './style';
import { TabPropsType } from './type';
import { tabDefaultTheme } from './theme';

export const TAB_CLASS_PREFIX = 'Tab';

export const Tab: FunctionComponent<TabPropsType> = forwardRef(function Tab(
    {
        className,
        classNames,
        currentlyActiveTab,
        disabled,
        id: propsId,
        label,
        handleClick,
        tabIndex,
        ...otherProps
    },
    ref,
) {
    const theme = useTheme();
    const id = propsId || uniqueId('tab-id-');
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
            handleClick(event, tabIndex);
        }
    };

    return (
        <TabRoot
            isActive={isActive}
            className={classOverride.Root}
            disabled={disabled}
            id={id}
            onClick={handleSelect}
            ref={ref}
            theme={theme}
            {...otherProps}
        >
            {label}
        </TabRoot>
    );
});

Tab.displayName = TAB_CLASS_PREFIX;

Tab.defaultProps = {
    disabled: false,
};

Tab.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    handleClick: PropTypes.func,
    ref: PropTypes.func,
    tabIndex: PropTypes.number,
};
