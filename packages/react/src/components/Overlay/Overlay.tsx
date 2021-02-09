import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useDisplay } from '../Modal/utils/useDisplay';
import { Overlay as OverlayRoot } from './style';
import { OverlayPropsType } from './type';
import { DEFAULT_LABEL } from '../Dropdown/constants';
import { OVERLAY_CLASS_PREFIX } from './constants';
import { useTheme } from '../../styling';

export const Overlay: FunctionComponent<OverlayPropsType> = ({
    className,
    disableEffects,
    disableOverlay,
    onClick,
    open,
    ...restProps
}) => {
    const theme = useTheme();
    const [display, effectToggle] = useDisplay(open);

    return !disableOverlay ? (
        <OverlayRoot
            {...restProps}
            className={className}
            disableEffects={disableEffects}
            display={display}
            effectToggle={effectToggle}
            onClick={onClick}
            theme={theme}
        />
    ) : null;
};

Overlay.displayName = OVERLAY_CLASS_PREFIX;

Overlay.defaultProps = {
    disabled: false,
    label: DEFAULT_LABEL,
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
