import React, { forwardRef, FunctionComponent } from 'react';
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
import useHeaderNavigationSelectorClassName from './utils/useHeaderNavigationSelectorClassName';
import { useTheme } from '../../../styling';
import { Pack, PackItem } from '../../Pack';
import { useHeaderNavigationSelector } from './utils/useHeaderNavigationSelector';

export const HeaderNavigationSelector: FunctionComponent<HeaderNavigationSelectorPropsType> = forwardRef(
    function HeaderNavigationSelector({ className, ...restProps }, ref) {
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
            containerRef,
            label,
            selectedValueToDisplay,
        } = useHeaderNavigationSelector(restProps, ref);

        return (
            <HeaderNavigationSelectorRoot
                {...selectorProps}
                theme={theme}
                className={classOverride.Root}
                flexGrow={1}
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
                    <SelectorDropdownOptionListContainer
                        className={classOverride.OptionListContainer}
                        theme={theme}
                    >
                        <SelectorDropdownOptionListWrapper
                            className={classOverride.OptionListWrapper}
                            theme={theme}
                        >
                            <SelectorDropdownOptionList
                                {...optionListProps}
                                className={classOverride.OptionList}
                                theme={theme}
                            />
                        </SelectorDropdownOptionListWrapper>
                    </SelectorDropdownOptionListContainer>
                </HeaderNavigationSelectorWrapper>
            </HeaderNavigationSelectorRoot>
        );
    },
);
