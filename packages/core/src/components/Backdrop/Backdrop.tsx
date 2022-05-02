import React, { FC, memo } from 'react';
import PropTypes from 'prop-types';

import { BackdropRoot } from './style';
import { BackdropPropsType } from './type';
import { BACKDROP_CLASS_PREFIX } from './constants';

export const Backdrop: FC<BackdropPropsType> = memo(
    ({ className, ...restProps }) => {
        return (
            <BackdropRoot {...restProps} className={`Backdrop ${className}`} />
        );
    },
);

Backdrop.displayName = BACKDROP_CLASS_PREFIX;

Backdrop.defaultProps = {
    tabIndex: 0,
};

Backdrop.propTypes = {
    id: PropTypes.string,
};
