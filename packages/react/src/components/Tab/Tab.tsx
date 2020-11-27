import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { useTabClassName } from './utils';
import { TabLabel, TabLabelContainer, TabRoot } from './style';
import { TabLabelPropsType, TabPropsType } from './type';
import { tabDefaultTheme } from './theme';
import { TAB_CLASS_PREFIX } from './constants';

export const Tab: FunctionComponent<TabPropsType> = forwardRef(function Tab(
    {
        className,
        children,
        currentlyActiveTab,
        disabled,
        wide,
        label,
        handleClick,
        tabIndex,
        value,
        tag: Tag = 'span',
        to,
        href,
        target,
        rel,
        ...restProps
    },
    ref,
) {
    const theme = useComponentTheme(TAB_CLASS_PREFIX, tabDefaultTheme);
    const matchingContentViewValue =
        typeof value !== 'undefined' ? value : tabIndex;
    const isActive = currentlyActiveTab === tabIndex;

    const classOverride = useTabClassName(
        TAB_CLASS_PREFIX,
        className,
        disabled,
        isActive,
    );

    const handleSelect = (
        event: React.MouseEvent<HTMLInputElement, MouseEvent>,
    ) => {
        if (handleClick) {
            handleClick(event, tabIndex, matchingContentViewValue);
        }
    };

    return (
        <TabRoot
            {...restProps}
            disabled={disabled}
            isActive={isActive}
            wide={wide}
            className={classOverride.Root}
            theme={theme}
        >
            <TabLabelContainer
                className={classOverride.LabelContainer}
                theme={theme}
                disabled={disabled}
            >
                {(forwardedProps: TabLabelPropsType) => (
                    <Tag
                        {...forwardedProps}
                        to={to}
                        href={href}
                        target={target}
                        rel={rel}
                        ref={ref}
                    >
                        <TabLabel
                            className={classOverride.Label}
                            disabled={disabled}
                            isActive={isActive}
                            onClick={handleSelect}
                            ref={ref}
                            theme={theme}
                        >
                            {label || children}
                        </TabLabel>
                    </Tag>
                )}
            </TabLabelContainer>
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
    handleClick: PropTypes.func,
    to: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
    href: PropTypes.string,
    // tabIndex: PropTypes.number, // TODO (nmelnikov 2020-07-21): we need to hide internal props from storybook docs
    value: PropTypes.number,
};
