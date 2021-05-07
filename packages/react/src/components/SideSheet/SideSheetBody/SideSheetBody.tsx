import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { SideSheetBodyRoot } from './style';
import { sideSheetBody } from '../constants';
import { useComponentTheme } from '../../../utils/hooks';
import { SideSheetBodyPropsType } from './type';
import { makeRootClassName } from '../../../utils';

export const SIDE_SHEET_BODY_CLASS_PREFIX = 'SideSheetBody';

export const SideSheetBody: FunctionComponent<SideSheetBodyPropsType> = ({
    children,
    isFixed,
    className,
    ...restProps
}) => {
    const theme = useComponentTheme(SIDE_SHEET_BODY_CLASS_PREFIX);

    return (
        <SideSheetBodyRoot
            paragraph
            medium
            data-testid={sideSheetBody}
            {...restProps}
            isFixed={isFixed}
            theme={theme}
            className={makeRootClassName(
                SIDE_SHEET_BODY_CLASS_PREFIX,
                className,
            )}
        >
            {children}
        </SideSheetBodyRoot>
    );
};

SideSheetBody.displayName = SIDE_SHEET_BODY_CLASS_PREFIX;

SideSheetBody.propTypes = {
    isFixed: PropTypes.bool,
};
