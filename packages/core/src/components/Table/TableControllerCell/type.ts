import { ReactChild } from 'react';
import { ScalarType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { IconButtonPropsType } from '../../IconButton/type';
import { TableCellPropsType } from '../TableCell';

/** 👉 PROPS TYPE */
type TableControllerCellEffectivePropsType = Partial<{
    expanded: boolean;
    onTriggerClick: IconButtonPropsType['onClick'];
    trigger: ReactChild | null;
    rowId: ScalarType;
    enableTriggerVisibility: boolean;
    // add other custom properties here
}> &
    TableCellPropsType;

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
