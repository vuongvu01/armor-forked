import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { useTabsClassName } from './utils';
import { TabsRoot } from './style';
import { TabsPropsType } from './type';
import { TABS_CLASS_PREFIX } from './constants';
import TabsContext from './TabsContext';
import { useTabs } from './hooks/useTabs';

/**
 * @armor-docs-component
 */
export const Tabs = forwardRef<HTMLDivElement, TabsPropsType>(function Tabs(
    { className, ...restProps },
    ref,
) {
    const theme = useComponentTheme(TABS_CLASS_PREFIX);
    const { rootProps, contextValue, disabled } = useTabs(restProps, ref);
    const classOverride = useTabsClassName(
        TABS_CLASS_PREFIX,
        className,
        disabled,
    );

    return (
        <TabsContext.Provider value={contextValue}>
            <TabsRoot
                {...rootProps}
                className={classOverride.Root}
                theme={theme}
            />
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
