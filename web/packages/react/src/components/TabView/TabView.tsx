import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { Box } from '../Box';
import { TabViewPropsType } from './type';
import { useTheme } from '../../styling';
import { tabViewDefaultTheme } from './theme';
import { useThemeOverride } from '../../utils/hooks';
import { TabViewRoot } from './style';

export const TAB_VIEW_CLASS_PREFIX = 'TabView';

export const TabView: FunctionComponent<TabViewPropsType> = ({
    children,
    value,
    selectedValue,
    ...restProps
}) => {
    if (typeof value === 'undefined' || typeof selectedValue === 'undefined') {
        return null;
    }

    const theme = useTheme();
    useThemeOverride(TAB_VIEW_CLASS_PREFIX, theme, tabViewDefaultTheme);

    return value === selectedValue ? (
        <TabViewRoot theme={theme} {...restProps}>
            {value === selectedValue && <Box padding={2}>{children}</Box>}
        </TabViewRoot>
    ) : null;
};

TabView.displayName = TAB_VIEW_CLASS_PREFIX;

TabView.propTypes = {
    id: PropTypes.string,
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.number,
};
