import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { SideSheetHeaderPropsType } from '../SideSheetHeader/type';
import { SideSheetBody as SideSheetBodyRoot } from './style';
import { sideSheetBody } from '../constants';

export const SIDE_SHEET_BODY_CLASS_PREFIX = 'SideSheetBody';

export const SideSheetBody: FunctionComponent<SideSheetHeaderPropsType> = ({
    children,
    isFixed,
    theme,
    ...restProps
}) => {
    return (
        <SideSheetBodyRoot
            isFixed={isFixed}
            data-testid={sideSheetBody}
            theme={theme}
            {...restProps}
        >
            {children}
        </SideSheetBodyRoot>
    );
};

SideSheetBody.displayName = SIDE_SHEET_BODY_CLASS_PREFIX;

SideSheetBody.propTypes = {
    isFixed: PropTypes.bool,
};