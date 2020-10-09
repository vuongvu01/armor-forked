import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useDisplay } from '../Modal/utils/useDisplay';
import { Overlay as OverlayRoot } from './style';
import { OverlayPropsType } from './type';
import { defaultLabel } from '../Dropdown/constants';
import { overlayDefaultTheme } from './theme';
import { useComponentTheme } from '../../utils/hooks';
import { OVERLAY_CLASS_PREFIX } from './constants';

export const Overlay: FunctionComponent<OverlayPropsType> = ({
    className,
    disableEffects,
    disableOverlay,
    onClick,
    open,
    styles,
    ...restProps
}) => {
    const theme = useComponentTheme(OVERLAY_CLASS_PREFIX, overlayDefaultTheme);
    const [display, effectToggle] = useDisplay(open);

    return !disableOverlay ? (
        <OverlayRoot
            {...restProps}
            className={className}
            disableEffects={disableEffects}
            display={display}
            effectToggle={effectToggle}
            onClick={onClick}
            styles={styles}
            theme={theme}
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
