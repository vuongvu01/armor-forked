import React, { FunctionComponent } from 'react';

import {
    OptionListItem as OptionListItemRoot,
    OptionListItemTypography,
    OptionListItemAdditionalInfo,
} from './style';
import { OptionListItemPropsType } from './type';
import { Checkbox } from '../Checkbox';
import { useOptionListItem } from './hooks/useOptionListItem';
import { OPTION_LIST_ITEM_CLASS_PREFIX } from './constants';
import { useOptionListItemClassName } from './hooks/useOptionListItemClassName';

/**
 * @internal
 */
export const OptionListItem: FunctionComponent<OptionListItemPropsType> = ({
    className,
    ...props
}) => {
    const {
        rootProps,
        checkboxProps,
        typographyProps,
        multiple,
        label,
        showAdditionalInfo,
        getAdditionalInfo,
    } = useOptionListItem(props);

    const classOverride = useOptionListItemClassName(
        OPTION_LIST_ITEM_CLASS_PREFIX,
        className,
        rootProps.isFocused,
    );

    return (
        <OptionListItemRoot {...rootProps} className={classOverride.Root}>
            {multiple && (
                <Checkbox
                    {...checkboxProps}
                    className={classOverride.Checkbox}
                />
            )}
            <OptionListItemTypography
                {...typographyProps}
                className={classOverride.Typography}
            >
                {label}
            </OptionListItemTypography>
            {showAdditionalInfo && (
                <OptionListItemAdditionalInfo
                    className={classOverride.AdditionalInfo}
                >
                    {getAdditionalInfo()}
                </OptionListItemAdditionalInfo>
            )}
        </OptionListItemRoot>
    );
};
