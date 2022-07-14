import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import { PortalToBody, LEFT, RIGHT } from '@deliveryhero/armor-system';

import { Pack, PackItem } from '@deliveryhero/armor';
import {
    ContextMenuArrow,
    HeaderNavigationSelectorRoot,
    HeaderNavigationSelectorWrapper,
    SelectedOptions,
    SelectorDropdownOptionList,
    SelectorDropdownOptionListContainer,
    SelectorDropdownOptionListWrapper,
    SelectorLabel,
} from './style';
import { HeaderNavigationSelectorPropsType } from './type';
import {
    HEADER_NAVIGATION_SELECTOR_CLASS_PREFIX,
    HEADER_NAVIGATION_SELECTOR_ROOT,
} from './constants';
import { useHeaderNavigationSelectorClassName } from './hooks';
import { useHeaderNavigationSelector } from './hooks/useHeaderNavigationSelector';

/**
 * # HeaderNavigationSelector
 *
 * @armor-docs-component
 */
export const HeaderNavigationSelector = forwardRef<
    HTMLDivElement,
    HeaderNavigationSelectorPropsType
>(function HeaderNavigationSelector({ className, ...restProps }, ref) {
    const classOverride = useHeaderNavigationSelectorClassName(
        HEADER_NAVIGATION_SELECTOR_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        selectorProps,
        optionListProps,
        listContainerProps,
        portalProps,
        containerRef,
        label,
        selectedValueToDisplay,
        isOpen,
        selectedOptionsProps,
        dropdownContainerProps,
        selectorIcon,
    } = useHeaderNavigationSelector(restProps, ref);

    const { iconAlign, Icon } = selectorIcon;
    const { showDropDownContent } = rootProps;

    return (
        <HeaderNavigationSelectorRoot
            {...selectorProps}
            className={classOverride.Root}
        >
            <HeaderNavigationSelectorWrapper
                data-testid={HEADER_NAVIGATION_SELECTOR_ROOT}
                {...rootProps}
                className={classOverride.Wrapper}
                ref={containerRef}
            >
                <SelectedOptions
                    className={classOverride.SelectedOptionsContainer}
                    {...selectedOptionsProps}
                >
                    <Pack className={classOverride.SelectedOptions}>
                        {iconAlign === LEFT && (
                            <PackItem
                                className={
                                    classOverride.SelectedOptionsExpansionIndicatorContainer
                                }
                            >
                                {Icon}
                            </PackItem>
                        )}
                        <SelectorLabel
                            className={classOverride.SelectedOptionsValues}
                        >
                            {selectedValueToDisplay || label}
                        </SelectorLabel>
                        {iconAlign === RIGHT && (
                            <PackItem
                                className={
                                    classOverride.SelectedOptionsExpansionIndicatorContainer
                                }
                            >
                                {Icon}
                            </PackItem>
                        )}
                    </Pack>
                </SelectedOptions>
                <PortalToBody {...portalProps}>
                    <SelectorDropdownOptionListContainer
                        className={classOverride.OptionListContainer}
                        {...listContainerProps}
                    >
                        {isOpen && showDropDownContent && (
                            <>
                                <ContextMenuArrow
                                    className={classOverride.Arrow}
                                    {...listContainerProps.arrowProps}
                                />
                                <SelectorDropdownOptionListWrapper
                                    className={classOverride.OptionListWrapper}
                                    {...dropdownContainerProps}
                                >
                                    <SelectorDropdownOptionList
                                        {...optionListProps}
                                        className={classOverride.OptionList}
                                    />
                                </SelectorDropdownOptionListWrapper>
                            </>
                        )}
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
    selectorIcon: PropTypes.node,
    showDropDownContent: PropTypes.bool,
};

HeaderNavigationSelector.displayName = HEADER_NAVIGATION_SELECTOR_CLASS_PREFIX;

export const MemoizedHeaderNavigationSelector = memo(HeaderNavigationSelector);
