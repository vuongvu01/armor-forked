import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useTabClassName } from './utils';
import { TabLabel, TabTagWrapper, TabRoot } from './style';
import { TabTagPropsType, TabPropsType } from './type';
import { TAB_CLASS_PREFIX } from './constants';
import { useTab } from './hooks/useTab';

/**
 * # Tab
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
export const Tab = forwardRef<HTMLDivElement, TabPropsType>(function Tab(
    { className, ...restProps },
    ref,
) {
    const {
        rootProps,
        tagProps,
        tabLabelProps,
        disabled,
        isActive,
        Tag,
        label,
        children,
    } = useTab(restProps, ref);

    const classOverride = useTabClassName(
        TAB_CLASS_PREFIX,
        className,
        disabled,
        isActive,
    );

    return (
        <TabRoot {...rootProps} className={classOverride.Root}>
            <TabTagWrapper {...tagProps} className={classOverride.Tag}>
                {(forwardedProps: TabTagPropsType) => (
                    <Tag {...forwardedProps}>
                        <TabLabel
                            {...tabLabelProps}
                            className={classOverride.Label}
                        >
                            {label || children}
                        </TabLabel>
                    </Tag>
                )}
            </TabTagWrapper>
        </TabRoot>
    );
});

Tab.displayName = TAB_CLASS_PREFIX;

Tab.defaultProps = {
    disabled: false,
};

Tab.propTypes = {
    disabled: PropTypes.bool,
    wide: PropTypes.bool,
    // handleClick: PropTypes.func,
    to: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
    href: PropTypes.string,
    // tabIndex: PropTypes.number, // TODO (nmelnikov 2020-07-21): we need to hide internal props from storybook docs
    value: PropTypes.number,
};

export const MemoizedTab = memo(Tab);
