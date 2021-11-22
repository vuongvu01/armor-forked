import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@deliveryhero/armor-system';

import { BackdropRoot } from './style';
import { BackdropPropsType } from './type';
import { BACKDROP_CLASS_PREFIX } from './constants';

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
