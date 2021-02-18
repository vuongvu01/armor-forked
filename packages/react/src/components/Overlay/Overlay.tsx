import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { Overlay as OverlayRoot } from './style';
import { OverlayPropsType } from './type';
import { OVERLAY_CLASS_PREFIX } from './constants';
import { useTheme } from '../../styling';

export const Overlay: FC<OverlayPropsType> = ({
    disableEffects,
    display,
    effectToggle,
    onClick,
    ...restProps
}) => {
    const theme = useTheme();

    return (
        <OverlayRoot
            {...restProps}
            className="Overlay"
            disableEffects={disableEffects}
            display={display}
            effectToggle={effectToggle}
            onClick={onClick}
            theme={theme}
        />
    );
};

Overlay.displayName = OVERLAY_CLASS_PREFIX;

Overlay.defaultProps = {
    tabIndex: 0,
};

Overlay.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
};
