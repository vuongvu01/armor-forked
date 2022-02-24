import React, { FunctionComponent } from 'react';
import { LogoutIcon } from '@deliveryhero/armor-icons';
import { getWindow } from '@deliveryhero/armor-system';

import { HeaderNavigationActionItem } from '.';
import { HeaderNavigationActionItemPropsType } from './type';

const setURL = () => {
    const win = getWindow();
    if (win) {
        win.location.assign('/users/sign_out');
    }
};

/**
 * @deprecated see @deliveryhero/armor-vendors
 */
export const HeaderNavigationActionLogisticsSignOutButton: FunctionComponent<
    HeaderNavigationActionItemPropsType
> = ({ ...restProps }) => (
    <HeaderNavigationActionItem {...restProps} onClick={setURL}>
        <LogoutIcon />
    </HeaderNavigationActionItem>
);

/** prop-types are required here for run-time checks */
HeaderNavigationActionLogisticsSignOutButton.propTypes = {};
