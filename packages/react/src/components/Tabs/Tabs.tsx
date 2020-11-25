import React, {
    FunctionComponent,
    forwardRef,
    useState,
    useEffect,
    useCallback,
} from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { preProcessTabChildren, useTabsClassName } from './utils';
import { TabsRoot } from './style';
import { TabsPropsType } from './type';
import { tabsDefaultTheme } from './theme';
import { TABS_CLASS_PREFIX } from './constants';

export const Tabs: FunctionComponent<TabsPropsType> = forwardRef(function Tabs(
    { children, className, defaultActiveTab, disabled, onSwitch, wide },
    ref,
) {
    const theme = useComponentTheme(TABS_CLASS_PREFIX, tabsDefaultTheme);
    const [currentlyActiveTab, setCurrentlyActiveTab] = useState(
        defaultActiveTab,
    );

    // set tab view content to match the defaultActiveTab
    useEffect(() => {
        if (onSwitch && defaultActiveTab) {
            onSwitch(defaultActiveTab);
        }
    }, [defaultActiveTab]);

    const classOverride = useTabsClassName(
        TABS_CLASS_PREFIX,
        className,
        disabled,
    );

    const handleClick = useCallback(
        (
            event: React.MouseEvent<HTMLInputElement, MouseEvent>,
            tabIndex: number,
            contentValue: number,
        ) => {
            setCurrentlyActiveTab(tabIndex);

            if (onSwitch) {
                onSwitch(contentValue);
            }
        },
        [onSwitch],
    );

    const extendedChildren = preProcessTabChildren(children, {
        currentlyActiveTab,
        wide,
        handleClick,
    });

    if (!children) {
        return null;
    }

    return (
        <TabsRoot
            className={classOverride.Root}
            disabled={disabled}
            wide={wide}
            ref={ref}
            theme={theme}
        >
            {extendedChildren}
        </TabsRoot>
    );
});

Tabs.displayName = TABS_CLASS_PREFIX;

Tabs.defaultProps = {
    defaultActiveTab: 0,
    disabled: false,
    wide: false,
};

Tabs.propTypes = {
    defaultActiveTab: PropTypes.number,
    disabled: PropTypes.bool,
    wide: PropTypes.bool,
    onSwitch: PropTypes.func.isRequired,
};
