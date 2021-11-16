import { TableCellPropsType } from '../TableCell';
import { CheckboxPropsType } from '../../Checkbox';

/** 👉 PROPS TYPE */
export type TableCheckboxCellPropsType = TableCellPropsType &
    Pick<CheckboxPropsType, 'checked' | 'checkedIcon'>;
