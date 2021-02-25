import React, { FunctionComponent } from 'react';

import {
    OptionListItem as OptionListItemRoot,
    OptionListItemTypography,
} from './style';
import { OptionListItemPropsType } from './type';
import { Checkbox } from '../Checkbox';
import { useOptionListItem } from './utils/useOptionListItem';
import { OPTION_LIST_ITEM_CLASS_PREFIX } from './constants';
import { useOptionListItemClassName } from './utils/useOptionListItemClassName';
import { useComponentTheme } from '../../utils/hooks';

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
                    theme={theme}
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
        </OptionListItemRoot>
    );
};
