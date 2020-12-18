import React, { FunctionComponent } from 'react';
// import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useCardClassName } from './utils/useCardClassName';
import { CardRoot } from './style';
import { CardPropsType } from './type';
import { CARD_CLASS_PREFIX } from './constants';

export const Card: FunctionComponent<CardPropsType> = ({
    className,
    ...restProps
}) => {
    const theme = useComponentTheme(CARD_CLASS_PREFIX);

    const classNameRoot = useCardClassName(CARD_CLASS_PREFIX, className);

    return <CardRoot {...restProps} theme={theme} className={classNameRoot} />;
};

Card.defaultProps = {};

/** Support of prop-types is here for project that don't use TypeScript */
Card.propTypes = {};
