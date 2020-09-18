import { TableCellPropsType } from '../TableCell/type';
import { CheckboxPropsType } from '../../Checkbox';

/* TableCheckboxCell component prop type */
export type TableCheckboxCellPropsType = TableCellPropsType &
    Pick<CheckboxPropsType, 'checked' | 'checkedIcon'>;
