import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useDisplay } from '../Modal/utils';
import { Overlay as OverlayRoot } from './style';
import { OverlayPropsType } from './type';
import { defaultLabel } from '../Dropdown/constants';
import { overlayDefaultTheme } from './theme';
import { useTheme } from '../../styling';
import { useThemeOverride } from '../../utils/hooks';
import { OVERLAY_CLASS_PREFIX } from './constants';

export const Overlay: FunctionComponent<OverlayPropsType> = ({
    className,
    disableEffects,
    disableOverlay,
    onClick,
    open,
    styles,
    theme: themeProps,
    ...restProps
}) => {
    const theme = useTheme(themeProps);
    const [display, effectToggle] = useDisplay(open);

    useThemeOverride(OVERLAY_CLASS_PREFIX, theme, overlayDefaultTheme);

    return !disableOverlay ? (
        <OverlayRoot
            className={className}
            disableEffects={disableEffects}
            display={display}
            effectToggle={effectToggle}
            onClick={onClick}
            styles={styles}
            theme={theme}
            {...restProps}
        />
    ) : null;
};

Overlay.displayName = OVERLAY_CLASS_PREFIX;

Overlay.defaultProps = {
    disabled: false,
    label: defaultLabel,
    tabIndex: 0,
};

Overlay.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    options: PropTypes.array,
    selectedIndex: PropTypes.number,
};
