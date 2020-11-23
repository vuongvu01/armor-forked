import React, { FunctionComponent } from 'react';

import { Label } from './style';
import { SelectorLabelPropsType } from './type';
import { useComponentTheme } from '../../utils/hooks';
import selectorLabelDefaultTheme from './theme';
import { useSelectorLabelClassName } from './utils';
import { RADIO_CLASS_PREFIX } from '../Radio/constants';
import { Typography } from '../Typography';
import { SELECTOR_LABEL_CLASS_PREFIX } from './constants';

const SelectorLabel: FunctionComponent<SelectorLabelPropsType> = ({
    checked,
    children,
    className,
    error,
    disabled,
    typographyProps,
}) => {
    const theme = useComponentTheme(
        SELECTOR_LABEL_CLASS_PREFIX,
        selectorLabelDefaultTheme,
    );

    const classOverride = useSelectorLabelClassName(
        RADIO_CLASS_PREFIX,
        className,
        disabled,
        checked,
        error,
    );

    return children ? (
        <Label
            disabled={disabled}
            error={error}
            className={classOverride.Label}
            theme={theme}
        >
            {typographyProps ? (
                <Typography
                    disabled={disabled}
                    error={error}
                    margin={0}
                    theme={theme}
                    {...typographyProps}
                >
                    {children}
                </Typography>
            ) : (
                children
            )}
        </Label>
    ) : null;
};

SelectorLabel.displayName = SELECTOR_LABEL_CLASS_PREFIX;

export default SelectorLabel;
