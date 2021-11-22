import React, { FunctionComponent } from 'react';
import { useComponentTheme } from '@deliveryhero/armor-system';

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
    const theme = useComponentTheme(OPTION_LIST_ITEM_CLASS_PREFIX);

    const classOverride = useOptionListItemClassName(
        OPTION_LIST_ITEM_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        checkboxProps,
        typographyProps,
        multiple,
        label,
        showAdditionalInfo,
        getAdditionalInfo,
    } = useOptionListItem(props);

    return (
        <OptionListItemRoot
            {...rootProps}
            theme={theme}
            className={classOverride.Root}
        >
            {multiple && (
                <Checkbox
                    {...checkboxProps}
                    className={classOverride.Checkbox}
                />
            )}
            <OptionListItemTypography
                {...typographyProps}
                theme={theme}
                className={classOverride.Typography}
            >
                {label}
            </OptionListItemTypography>
            {showAdditionalInfo && (
                <OptionListItemAdditionalInfo
                    theme={theme}
                    className={classOverride.AdditionalInfo}
                >
                    {getAdditionalInfo()}
                </OptionListItemAdditionalInfo>
            )}
        </OptionListItemRoot>
    );
};
