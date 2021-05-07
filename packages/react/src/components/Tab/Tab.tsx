import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { useTabClassName } from './utils';
import { TabLabel, TabTagWrapper, TabRoot } from './style';
import { TabTagPropsType, TabPropsType } from './type';
import { tabDefaultTheme } from './theme';
import { TAB_CLASS_PREFIX } from './constants';
import { useTab } from './hooks/useTab';

export const Tab = forwardRef<HTMLDivElement, TabPropsType>(function Tab(
    { className, ...restProps },
    ref,
) {
    const theme = useComponentTheme(TAB_CLASS_PREFIX, tabDefaultTheme);

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
        <TabRoot {...rootProps} className={classOverride.Root} theme={theme}>
            <TabTagWrapper
                {...tagProps}
                className={classOverride.Tag}
                theme={theme}
            >
                {(forwardedProps: TabTagPropsType) => (
                    <Tag {...forwardedProps}>
                        <TabLabel
                            {...tabLabelProps}
                            theme={theme}
                            className={classOverride.Label}
                            large
                            label
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
