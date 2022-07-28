import React, { FC } from 'react';

import {
    OptionListItemGroupRoot,
    OptionListItemGroupTypography,
} from './style';
import { OptionListItemGroupPropType } from './type';
import { Checkbox } from '../Checkbox';
import { OPTION_LIST_ITEM_GROUP_CLASS_PREFIX } from './constants';
import { useOptionListItemGroupClassName } from './hooks/useOptionListItemGroupClassName';
import { useOptionListItemGroup } from './hooks/useOptionListItemGroup';

/**
 * @internal
 */
export const OptionListItemGroup: FC<
    React.PropsWithChildren<OptionListItemGroupPropType>
> = ({ className, children, ...props }) => {
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
        <OptionListItemGroupRoot {...rootProps} className={classOverride.Root}>
            {multiple && enableGroupSelection && (
                <Checkbox
                    {...checkboxProps}
                    className={classOverride.Checkbox}
                />
            )}
            <OptionListItemGroupTypography
                {...typographyProps}
                className={classOverride.Typography}
            >
                {children}
            </OptionListItemGroupTypography>
        </OptionListItemGroupRoot>
    );
};
