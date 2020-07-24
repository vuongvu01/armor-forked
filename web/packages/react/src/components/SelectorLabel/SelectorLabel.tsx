import React, { FunctionComponent } from 'react';

import { Label } from './style';
import { SelectorLabelPropsType } from './type';
import { useTheme } from '../../styling';
import { useThemeOverride } from '../../utils/hooks';
import selectorLabelDefaultTheme from './theme';
import { useSelectorLabelClassName } from './utils';
import { RADIO_CLASS_PREFIX } from '../Radio';
import { Typography } from '../Typography';

const SELECTOR_LABEL_CLASS_PREFIX = 'SelectorLabel';

const SelectorLabel: FunctionComponent<SelectorLabelPropsType> = ({
    checked,
    children,
    className,
    classNames,
    error,
    disabled,
    typographyProps,
}) => {
    const theme = useTheme();
    useThemeOverride(
        SELECTOR_LABEL_CLASS_PREFIX,
        theme,
        selectorLabelDefaultTheme,
    );

    const classOverride = useSelectorLabelClassName(
        RADIO_CLASS_PREFIX,
        className,
        classNames,
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
