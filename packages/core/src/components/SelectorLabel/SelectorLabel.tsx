import React, { FC } from 'react';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { SelectorLabelRoot } from './style';
import { SelectorLabelEffectivePropsType } from './type';
import { useSelectorLabelClassName } from './utils';
import { Typography } from '../Typography';
import { SELECTOR_LABEL_CLASS_PREFIX } from './constants';

export const SelectorLabel: FC<SelectorLabelEffectivePropsType> = ({
    checked,
    children,
    className,
    error,
    disabled,
    typographyProps,
}) => {
    const theme = useComponentTheme(SELECTOR_LABEL_CLASS_PREFIX);

    const classOverride = useSelectorLabelClassName(
        SELECTOR_LABEL_CLASS_PREFIX,
        className,
        disabled,
        checked,
        error,
    );

    return children ? (
        <SelectorLabelRoot
            disabled={disabled}
            error={error}
            className={classOverride.Root}
            theme={theme}
        >
            {typographyProps ? (
                <Typography
                    disabled={disabled}
                    error={error}
                    margin={0}
                    tag="div"
                    {...typographyProps}
                >
                    {children}
                </Typography>
            ) : (
                children
            )}
        </SelectorLabelRoot>
    ) : null;
};

SelectorLabel.displayName = SELECTOR_LABEL_CLASS_PREFIX;
