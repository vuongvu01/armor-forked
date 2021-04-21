import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { BackdropRoot } from './style';
import { BackdropPropsType } from './type';
import { BACKDROP_CLASS_PREFIX } from './constants';
import { useTheme } from '../../styling';

export const Backdrop: FC<BackdropPropsType> = ({
    className,
    ...restProps
}) => {
    const theme = useTheme();

    return (
        <BackdropRoot
            {...restProps}
            className={`Backdrop ${className}`}
            theme={theme}
        />
    );
};

Backdrop.displayName = BACKDROP_CLASS_PREFIX;

Backdrop.defaultProps = {
    tabIndex: 0,
};

Backdrop.propTypes = {
    id: PropTypes.string,
};
