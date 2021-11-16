import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useCardClassName } from './hooks/useCardClassName';
import { CardRoot } from './style';
import { CardPropsType } from './type';
import { CARD_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const Card = forwardRef<HTMLDivElement, CardPropsType>(function Card(
    { className, ...restProps },
    ref,
) {
    const theme = useComponentTheme(CARD_CLASS_PREFIX);
    const classNameRoot = useCardClassName(CARD_CLASS_PREFIX, className);

    return (
        <CardRoot
            {...restProps}
            theme={theme}
            className={classNameRoot}
            ref={ref}
        />
    );
});

Card.defaultProps = {};

/** Support of prop-types is here for project that don't use TypeScript */
Card.propTypes = {};
