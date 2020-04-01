import React, { FunctionComponent } from 'react';

import { GroupHelperRoot } from './style';
import { Props } from './type';

export const GroupHelper: FunctionComponent<Props> = ({
    children,
    gap = 0.5,
}) => {
    return <GroupHelperRoot gap={gap}>{children}</GroupHelperRoot>;
};
