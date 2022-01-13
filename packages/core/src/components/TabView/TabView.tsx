import React, { FC } from 'react';
import PropTypes from 'prop-types';
import {
    useComponentTheme,
    makeRootClassName,
} from '@deliveryhero/armor-system';

import { TabViewPropsType } from './type';
import { TabViewRoot } from './style';
import { TAB_VIEW_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const TabView: FC<TabViewPropsType> = ({
    children,
    value,
    selectedValue,
    className,
    ...restProps
}) => {
    const theme = useComponentTheme(TAB_VIEW_CLASS_PREFIX);

    if (typeof value === 'undefined' || typeof selectedValue === 'undefined') {
        return null;
    }

    return value === selectedValue ? (
        <TabViewRoot
            {...restProps}
            theme={theme}
            className={makeRootClassName(TAB_VIEW_CLASS_PREFIX, className)}
        >
            {children}
        </TabViewRoot>
    ) : null;
};

TabView.displayName = TAB_VIEW_CLASS_PREFIX;

TabView.propTypes = {
    id: PropTypes.string,
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.number,
};