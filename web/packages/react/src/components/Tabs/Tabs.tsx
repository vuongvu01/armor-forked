import React, { FunctionComponent, forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import { preProcessTabChildren, useTabsClassName } from './utils';
import { TabsRoot } from './style';
import { TabsPropsType } from './type';
import { tabsDefaultTheme } from './theme';
import { generateId } from '../../utils';
import { TABS_CLASS_PREFIX, tabsIdPrefix } from './constants';

export const Tabs: FunctionComponent<TabsPropsType> = forwardRef(function Tabs(
    {
        children,
        className,
        classNames,
        disabled,
        fullWidth,
        id: propsId,
        onSwitch,
    },
    ref,
) {
    if (!children) {
        return null;
    }

    const theme = useTheme();
    const id = generateId(propsId, tabsIdPrefix);
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
        contentValue: number,
    ) => {
        setCurrentlyActiveTab(tabIndex);

        if (onSwitch) {
            onSwitch(contentValue);
        }
    };

    const extendedChildren = preProcessTabChildren(children, {
        currentlyActiveTab,
        fullWidth,
        handleClick,
    });

    return (
        <TabsRoot
            className={classOverride.Root}
            disabled={disabled}
            id={id}
            fullWidth={fullWidth}
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
    fullWidth: false,
};

Tabs.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    fullWidth: PropTypes.bool,
    onSwitch: PropTypes.func.isRequired,
    ref: PropTypes.func,
};
