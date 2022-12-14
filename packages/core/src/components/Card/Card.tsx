import React, { forwardRef, memo } from 'react';

import { useCardClassName } from './hooks/useCardClassName';
import { CardRoot } from './style';
import { CardPropsType } from './type';
import { CARD_CLASS_PREFIX } from './constants';

/**
 * # Card
 *
 * Card is used to group contents in a container which is clickable as a whole.
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/694135-card/b/883331)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Card } from '@deliveryhero/armor';
 *
 * <Card padding={3}>Hello world!</Card>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Card = forwardRef<HTMLDivElement, CardPropsType>(function Card(
    { className, ...restProps },
    ref,
) {
    const classNameRoot = useCardClassName(CARD_CLASS_PREFIX, className);

    return <CardRoot {...restProps} className={classNameRoot} ref={ref} />;
});

export const MemoizedCard = memo(Card);
