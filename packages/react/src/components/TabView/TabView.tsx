import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { Box } from '../Box';
import { TabViewPropsType } from './type';
import { tabViewDefaultTheme } from './theme';
import { useComponentTheme } from '../../utils/hooks';
import { TabViewRoot } from './style';
import { TAB_VIEW_CLASS_PREFIX } from './constants';

export const TabView: FunctionComponent<TabViewPropsType> = ({
    children,
    value,
    selectedValue,
    ...restProps
}) => {
    if (typeof value === 'undefined' || typeof selectedValue === 'undefined') {
        return null;
    }

    const theme = useComponentTheme(TAB_VIEW_CLASS_PREFIX, tabViewDefaultTheme);

    return value === selectedValue ? (
        <TabViewRoot {...restProps} theme={theme}>
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
