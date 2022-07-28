import React, { FunctionComponent } from 'react';

import { GroupHelperRoot } from './style';
import { Props } from './type';

export const GroupHelper: FunctionComponent<React.PropsWithChildren<Props>> = ({
    children,
    gap = 0.5,
    styles,
}) => {
    return (
        <GroupHelperRoot gap={gap} style={styles}>
            {children}
        </GroupHelperRoot>
    );
};
