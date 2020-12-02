import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { PaddingAttributesType } from '../../../system/attributes';
import { Indexed, ScalarType } from '../../../type';
import { IconButtonPropsType } from '../../IconButton/type';

type TableControllerCellEffectivePropsType = Indexed<{
    expanded?: boolean;
    onExpansionButtonClick?: IconButtonPropsType['onClick'];
    rowId?: ScalarType;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    PaddingAttributesType;

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
