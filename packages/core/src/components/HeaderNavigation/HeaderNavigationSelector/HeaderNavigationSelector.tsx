import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useTheme, PortalToBody } from '@deliveryhero/armor-system';

import {
    HeaderNavigationSelectorRoot,
    HeaderNavigationSelectorWrapper,
    SelectedOptions,
    SelectorDropdownOptionList,
    SelectorDropdownOptionListContainer,
    SelectorDropdownOptionListWrapper,
    SelectorExpansionIndicator,
    SelectorLabel,
} from './style';
import { HeaderNavigationSelectorPropsType } from './type';
import {
    HEADER_NAVIGATION_SELECTOR_CLASS_PREFIX,
    headerNavigationSelectorRoot,
} from './constants';
import { useHeaderNavigationSelectorClassName } from './hooks';
import { Pack, PackItem } from '../../Pack';
import { useHeaderNavigationSelector } from './hooks/useHeaderNavigationSelector';

export const HeaderNavigationSelector = forwardRef<
    HTMLDivElement,
    HeaderNavigationSelectorPropsType
>(function HeaderNavigationSelector({ className, ...restProps }, ref) {
    const theme = useTheme().armor;

    const classOverride = useHeaderNavigationSelectorClassName(
        HEADER_NAVIGATION_SELECTOR_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        selectorProps,
        optionListProps,
        expansionIndicatorProps,
        listContainerProps,
        portalProps,
        containerRef,
        label,
        selectedValueToDisplay,
    } = useHeaderNavigationSelector(restProps, ref);

    return (
        <HeaderNavigationSelectorRoot
            {...selectorProps}
            theme={theme}
            className={classOverride.Root}
        >
            <HeaderNavigationSelectorWrapper
                data-testid={headerNavigationSelectorRoot}
                {...rootProps}
                theme={theme}
                className={classOverride.Wrapper}
                ref={containerRef}
            >
                <SelectedOptions
                    className={classOverride.SelectedOptionsContainer}
                >
                    <Pack className={classOverride.SelectedOptions}>
                        <SelectorLabel
                            className={classOverride.SelectedOptionsValues}
                        >
                            {selectedValueToDisplay || label}
                        </SelectorLabel>
                        <PackItem
                            className={
                                classOverride.SelectedOptionsExpansionIndicatorContainer
                            }
                        >
                            <SelectorExpansionIndicator
                                {...expansionIndicatorProps}
                                marginLeft={4}
                                theme={theme}
                                className={
                                    classOverride.SelectedOptionsExpansionIndicator
                                }
                            />
                        </PackItem>
                    </Pack>
                </SelectedOptions>
                <PortalToBody {...portalProps}>
                    <SelectorDropdownOptionListContainer
                        className={classOverride.OptionListContainer}
                        theme={theme}
                        {...listContainerProps}
                    >
                        <SelectorDropdownOptionListWrapper
                            className={classOverride.OptionListWrapper}
                            theme={theme}
                        >
                            <SelectorDropdownOptionList
                                {...optionListProps}
                                className={classOverride.OptionList}
                            />
                        </SelectorDropdownOptionListWrapper>
                    </SelectorDropdownOptionListContainer>
                </PortalToBody>
            </HeaderNavigationSelectorWrapper>
        </HeaderNavigationSelectorRoot>
    );
});

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