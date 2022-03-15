import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { makeRootClassName } from '@deliveryhero/armor-system';

import { SideSheetBodyRoot } from './style';
import { sideSheetBody } from '../constants';
import { SideSheetBodyPropsType } from './type';

export const SIDE_SHEET_BODY_CLASS_PREFIX = 'SideSheetBody';

/**
 * @armor-docs-component
 */
export const SideSheetBody: FunctionComponent<SideSheetBodyPropsType> = ({
    children,
    isFixed,
    className,
    ...restProps
}) => {
    return (
        <SideSheetBodyRoot
            data-testid={sideSheetBody}
            {...restProps}
            isFixed={isFixed}
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
