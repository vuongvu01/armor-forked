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

const Tab: FunctionComponent<TabPropsType> = forwardRef(function Tab(
    {
        className,
        classNames,
        disabled,
        id: propsId,
        label,
        onClick,
        selectedValue,
        value,
    },
    ref,
) {
    const theme = useTheme();
    const id = propsId || uniqueId('tab-id-');
    const isActive = !!value && !!selectedValue && value === selectedValue;

    useThemeOverride(TAB_CLASS_PREFIX, theme, tabDefaultTheme);

    const classOverride = useTabClassName(
        TAB_CLASS_PREFIX,
        className,
        classNames,
        disabled,
        isActive,
    );

    return (
        <TabRoot
            isActive={isActive}
            className={classOverride.Root}
            disabled={disabled}
            id={id}
            onClick={onClick}
            ref={ref}
            theme={theme}
        >
            {label}
        </TabRoot>
    );
});

Tab.displayName = TAB_CLASS_PREFIX;

Tab.defaultProps = {
    isActive: false,
    disabled: false,
};

Tab.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    isActive: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func,
    ref: PropTypes.func,
    selectedValue: PropTypes.string,
    value: PropTypes.string,
};

export default Tab;
