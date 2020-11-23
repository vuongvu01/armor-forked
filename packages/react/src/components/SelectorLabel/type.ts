import { SwitchLabelPropsType } from '../Switch/type';
import { CheckboxPropsType } from '../Checkbox/type';
import { RadioMarkPropsType } from '../Radio/type';
import { Indexed } from '../../type';

export type SelectorLabelPropsType = Indexed<{
    error?: boolean;
}> &
    SwitchLabelPropsType &
    CheckboxPropsType &
    RadioMarkPropsType;
