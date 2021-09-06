import React, { FC } from 'react';

import {
    OptionListItemGroupRoot,
    OptionListItemGroupTypography,
} from './style';
import { OptionListItemGroupPropType } from './type';
import { Checkbox } from '../Checkbox';
import { OPTION_LIST_ITEM_GROUP_CLASS_PREFIX } from './constants';
import { useOptionListItemGroupClassName } from './hooks/useOptionListItemGroupClassName';
import { useComponentTheme } from '../../utils/hooks';
import { useOptionListItemGroup } from './hooks/useOptionListItemGroup';

export const OptionListItemGroup: FC<OptionListItemGroupPropType> = ({
    className,
    children,
    ...props
}) => {
    const theme = useComponentTheme(OPTION_LIST_ITEM_GROUP_CLASS_PREFIX);

    const classOverride = useOptionListItemGroupClassName(
        OPTION_LIST_ITEM_GROUP_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        checkboxProps,
        typographyProps,
        multiple,
        enableGroupSelection,
    } = useOptionListItemGroup(props);

    return (
        <OptionListItemGroupRoot
            {...rootProps}
            theme={theme}
            className={classOverride.Root}
        >
            {multiple && enableGroupSelection && (
                <Checkbox
                    {...checkboxProps}
                    className={classOverride.Checkbox}
                />
            )}
            <OptionListItemGroupTypography
                {...typographyProps}
                theme={theme}
                className={classOverride.Typography}
            >
                {children}
            </OptionListItemGroupTypography>
        </OptionListItemGroupRoot>
    );
};
