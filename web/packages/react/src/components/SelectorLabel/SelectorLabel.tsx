import React, { FunctionComponent } from 'react';

import { Label } from './style';
import { SelectorLabelPropsType } from './type';
import { useTheme } from '../../styling';
import { useThemeOverride } from '../../utils/hooks';
import selectorLabelDefaultTheme from './theme';
import { useSelectorLabelClassName } from './utils';
import { RADIO_CLASS_PREFIX } from '../Radio';

const SELECTOR_LABEL_CLASS_PREFIX = 'SelectorLabel';

const SelectorLabel: FunctionComponent<SelectorLabelPropsType> = ({
    checked,
    children,
    className,
    classNames,
    error,
    disabled,
    theme: propsTheme,
}) => {
    const theme = useTheme(propsTheme);
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
            {children}
        </Label>
    ) : null;
};

SelectorLabel.displayName = SELECTOR_LABEL_CLASS_PREFIX;

export default SelectorLabel;
