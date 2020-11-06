// eslint-disable-next-line no-use-before-define
import React, { FunctionComponent } from 'react';
import { LogoutIcon } from '@deliveryhero/armor-icons';
import { HeaderNavigationActionItem } from '@deliveryhero/armor';

import { HeaderNavigationActionItemPropsType } from './type';

const setURL = () => window.location.assign('/users/sign_out');

export const HeaderNavigationActionLogisticsSignOutButton: FunctionComponent<HeaderNavigationActionItemPropsType> = ({
    ...restProps
}) => (
    <HeaderNavigationActionItem {...restProps} onClick={setURL}>
        <LogoutIcon />
    </HeaderNavigationActionItem>
);

/** prop-types are required here for run-time checks */
HeaderNavigationActionLogisticsSignOutButton.propTypes = {};
