import React, { FunctionComponent } from 'react';

import { OptionListItem as OptionListItemRoot } from './style';
import { OptionListItemPropsType } from './type';
import { Checkbox } from '../Checkbox';
import { Typography } from '../Typography';
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
            <Typography
                {...typographyProps}
                theme={theme}
                className={classOverride.Typography}
            >
                {label}
            </Typography>
        </OptionListItemRoot>
    );
};
