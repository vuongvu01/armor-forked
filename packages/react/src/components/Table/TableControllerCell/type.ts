import { HTMLAttributes, ReactChild } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { PaddingAttributesType } from '../../../system';
import { ObjectLiteralType, ScalarType } from '../../../type';
import { IconButtonPropsType } from '../../IconButton/type';

type TableControllerCellEffectivePropsType = Partial<{
    expanded: boolean;
    onTriggerClick: IconButtonPropsType['onClick'];
    trigger: ReactChild | null;
    rowId: ScalarType;
    enableTriggerVisibility: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    PaddingAttributesType &
    ObjectLiteralType;

/* TableControllerCell component prop type */
export type TableControllerCellPropsType = TableControllerCellEffectivePropsType &
    ComponentStylePropsType;

/* TableControllerCell Root node prop type */
export type TableControllerCellRootPropsType = TableControllerCellEffectivePropsType &
    ComponentElementStylePropsType;

export type TableControllerCellContainerPropsType = {} & ComponentElementStylePropsType;

export type TableControllerCellIconPropsType = Pick<
    TableControllerCellEffectivePropsType,
    'expanded'
> &
    ComponentElementStylePropsType;
