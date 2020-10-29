import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import {
    HeaderNavigationSelectorRoot,
    NavigationPackItemSelector,
    SelectorDropdown,
} from './style';
import { HeaderNavigationSelectorPropsType } from './type';
import { useComponentTheme } from '../../../utils/hooks';
import {
    HEADER_NAVIGATION_SELECTOR_CLASS_PREFIX,
    headerNavigationSelectorRoot,
} from './constants';
import useHeaderNavigationSelectorClassName from './utils/useHeaderNavigationSelectorClassName';
import { headerNavigationSelector } from './theme';

export const HeaderNavigationSelector: FunctionComponent<HeaderNavigationSelectorPropsType> = forwardRef(
    function HeaderNavigationSelector(
        {
            className,
            classNames,
            navigationSelectorParams,
            onOptionSelect,
            separator,
            ...restProps
        },
        ref,
    ) {
        const theme = useComponentTheme(
            HEADER_NAVIGATION_SELECTOR_CLASS_PREFIX,
            headerNavigationSelector,
        );

        const classOverride = useHeaderNavigationSelectorClassName(
            HEADER_NAVIGATION_SELECTOR_CLASS_PREFIX,
            className,
            classNames,
        );

        // todo: use spreads here where possible
        return navigationSelectorParams ? (
            <NavigationPackItemSelector
                theme={theme}
                className={classOverride.PackItem}
                flexGrow={1}
                separator={separator}
            >
                <HeaderNavigationSelectorRoot
                    data-testid={headerNavigationSelectorRoot}
                    {...restProps}
                    theme={theme}
                    className={classOverride.NavigationSelectorRoot}
                    ref={ref}
                >
                    {
                        <SelectorDropdown
                            options={navigationSelectorParams.options}
                            onSelect={onOptionSelect}
                            placeholder={navigationSelectorParams.label}
                            multiple={navigationSelectorParams.isMultiselect}
                            defaultValue={navigationSelectorParams.defaultValue}
                            value={navigationSelectorParams.value}
                            isListExpanded={navigationSelectorParams.isExpanded}
                            isActionSeparatorDisplayed={false}
                            theme={theme}
                            className={classOverride.SelectorDropdown}
                        />
                    }
                </HeaderNavigationSelectorRoot>
            </NavigationPackItemSelector>
        ) : null;
    },
);

HeaderNavigationSelector.defaultProps = {
    navigationSelectorParams: {
        label: 'Country',
        isMultiselect: false,
    },
    separator: true,
};

HeaderNavigationSelector.propTypes = {
    onOptionSelect: PropTypes.func,
    separator: PropTypes.bool,
    // TODO (nmelnikov 2020-09-24): tighten
    // navigationSelectorParams: PropTypes.shape({
    //     label: PropTypes.string,
    //     isMultiselect: PropTypes.bool,
    //     isExpanded: PropTypes.bool,
    //     defaultValue: PropTypes.oneOfType([
    //             PropTypes.arrayOf(PropTypes.number),
    //             PropTypes.number,
    //         ]),
    //     onSelect: PropTypes.func,
    //     onChange: PropTypes.func,
    //     options: PropTypes.array,
    // }),
};
