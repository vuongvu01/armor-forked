import React, { FunctionComponent } from 'react';

import { SelectorLabelRoot } from './style';
import { SelectorLabelPropsType } from './type';
import { useComponentTheme } from '../../utils/hooks';
import selectorLabelDefaultTheme from './theme';
import { useSelectorLabelClassName } from './utils';
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
                    theme={theme}
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

export default SelectorLabel;
