import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useTabsClassName } from './utils';
import { TabsRoot } from './style';
import { TabsPropsType } from './type';
import { TABS_CLASS_PREFIX } from './constants';
import TabsContext from './TabsContext';
import { useTabs } from './hooks/useTabs';

/**
 * # Tabs
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/32f757-tab/b/527bb6)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Tabs, Tab, TabView } from '@deliveryhero/armor';
 *
 * const [selectedTabIndex, setSelectedTabIndex] = useState(0);
 * const handleChange = (tabIndex: number) => setSelectedTabIndex(tabIndex);
 *
 * <Tabs onSwitch={handleChange}>
 *     <Tab>Pizza</Tab>
 *     <Tab>Pasta</Tab>
 *     <Tab>Risotto</Tab>
 *     <Tab>Beverages</Tab>
 *     <Tab>Alcoholic beverages</Tab>
 * </Tabs>
 * <TabView value={0} selectedValue={selectedTabIndex}>
 *     <p>Pizza</p>
 * </TabView>
 * <TabView value={1} selectedValue={selectedTabIndex}>
 *     <p>Pasta</p>
 * </TabView>
 * <TabView value={2} selectedValue={selectedTabIndex}>
 *     <p>Risotto</p>
 * </TabView>
 * <TabView value={3} selectedValue={selectedTabIndex}>
 *     <p>Beverages</p>
 * </TabView>
 * <TabView value={4} selectedValue={selectedTabIndex}>
 *     <p>Alcoholic beverages</p>
 * </TabView>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Tabs = forwardRef<HTMLDivElement, TabsPropsType>(function Tabs(
    { className, ...restProps },
    ref,
) {
    const { rootProps, contextValue, disabled } = useTabs(restProps, ref);
    const classOverride = useTabsClassName(
        TABS_CLASS_PREFIX,
        className,
        disabled,
    );

    return (
        <TabsContext.Provider value={contextValue}>
            <TabsRoot {...rootProps} className={classOverride.Root} />
        </TabsContext.Provider>
    );
});

Tabs.displayName = TABS_CLASS_PREFIX;

Tabs.propTypes = {
    defaultActiveTab: PropTypes.number,
    // disabled: PropTypes.bool,
    wide: PropTypes.bool,
    onSwitch: PropTypes.func,
};

export const MemoizedTabs = memo(Tabs);
