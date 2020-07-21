import React, { FunctionComponent, forwardRef, useState } from 'react';
import uniqueId from 'lodash.uniqueid';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import { preProcessTabChildren, useTabsClassName } from './utils';
import { TabsRoot } from './style';
import { TabsPropsType } from './type';
import { tabsDefaultTheme } from './theme';

export const TABS_CLASS_PREFIX = 'Tabs';

export const Tabs: FunctionComponent<TabsPropsType> = forwardRef(function Tabs(
    { children, className, classNames, disabled, id: propsId, onSwitch },
    ref,
) {
    if (!children) {
        return null;
    }

    const theme = useTheme();
    const id = propsId || uniqueId('tab-id-');
    const [currentlyActiveTab, setCurrentlyActiveTab] = useState(0);

    useThemeOverride(TABS_CLASS_PREFIX, theme, tabsDefaultTheme);

    const classOverride = useTabsClassName(
        TABS_CLASS_PREFIX,
        className,
        classNames,
        disabled,
    );

    const handleClick = (
        event: React.MouseEvent<HTMLInputElement, MouseEvent>,
        tabIndex: number,
    ) => {
        setCurrentlyActiveTab(tabIndex);
        if (onSwitch) {
            onSwitch(tabIndex);
        }
    };

    const extendedChildren = preProcessTabChildren(children, {
        handleClick,
        currentlyActiveTab,
    });

    return (
        <TabsRoot
            className={classOverride.Root}
            disabled={disabled}
            id={id}
            ref={ref}
            theme={theme}
        >
            {extendedChildren}
        </TabsRoot>
    );
});

Tabs.displayName = TABS_CLASS_PREFIX;

Tabs.defaultProps = {
    disabled: false,
};

Tabs.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    onSwitch: PropTypes.func.isRequired,
    ref: PropTypes.func,
};
