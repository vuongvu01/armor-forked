import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { MarginAttributesType } from '../../../system/attributes';
import { Indexed } from '../../../type';

type TableExpandableSectionEffectivePropsType = Indexed<{
    expanded?: boolean;
    enableDefaultPadding?: boolean;
    offsetLeft?: number;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLElement> & // includes all HTML attributes
    MarginAttributesType;

/* TableExpandableSection component prop type */
export type TableExpandableSectionPropsType = TableExpandableSectionEffectivePropsType &
    Partial<Pick<HTMLTableDataCellElement, 'colSpan'>> &
    ComponentStylePropsType;

/* TableExpandableSection Root node prop type */
export type TableExpandableSectionRootPropsType = TableExpandableSectionEffectivePropsType &
    ComponentElementStylePropsType;

export type TableExpandableSectionCellPropsType = {} & Pick<
    TableExpandableSectionEffectivePropsType,
    'height'
> &
    ComponentElementStylePropsType;

export type TableExpandableSectionContentPropsType = {} & Pick<
    TableExpandableSectionEffectivePropsType,
    'expanded' | 'enableDefaultPadding' | 'offsetLeft'
> &
    ComponentElementStylePropsType;
