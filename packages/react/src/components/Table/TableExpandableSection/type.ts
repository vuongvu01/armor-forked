import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { TableRowPropsType } from '../TableRow';

/** 👉 PROPS TYPE */
type TableExpandableSectionEffectivePropsType = Partial<{
    expanded: boolean;
    enableDefaultPadding: boolean;
    offsetLeft: number;
    height: number;
    // add other custom properties here
}> &
    TableRowPropsType;

/* TableExpandableSection component prop type */
export type TableExpandableSectionPropsType = TableExpandableSectionEffectivePropsType &
    Partial<Pick<HTMLTableDataCellElement, 'colSpan'>> &
    ComponentStylePropsType;

/* TableExpandableSection Root node prop type */
export type TableExpandableSectionRootPropsType = TableExpandableSectionEffectivePropsType &
    ComponentElementStylePropsType;

export type TableExpandableSectionCellPropsType = Pick<
    TableExpandableSectionEffectivePropsType,
    'height'
> &
    ComponentElementStylePropsType;

export type TableExpandableSectionContentPropsType = Pick<
    TableExpandableSectionEffectivePropsType,
    'expanded' | 'enableDefaultPadding' | 'offsetLeft'
> &
    ComponentElementStylePropsType;
