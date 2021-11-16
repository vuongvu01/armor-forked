// eslint-disable-next-line no-use-before-define
import React, { FunctionComponent } from 'react';

import { HeaderNavigationMenuTitleHurrierPropsType } from './type';
import { HurrierLogo } from './HurrierLogo';

export const HeaderNavigationMenuTitleHurrier: FunctionComponent<HeaderNavigationMenuTitleHurrierPropsType> = () => (
    <HurrierLogo />
);

/** prop-types are required here for run-time checks */
HeaderNavigationMenuTitleHurrier.propTypes = {};
