import { SwitchLabelPropsType } from '../Switch/type';
import { CheckboxPropsType } from '../Checkbox/type';
import { RadioMarkPropsType } from '../Radio/type';
import { Indexed } from '../../type';
import { ClassNamesType } from '../type';

export type SelectorLabelPropsType = Indexed<{
    classNames?: ClassNamesType;
    error?: boolean;
}> &
    SwitchLabelPropsType &
    CheckboxPropsType &
    RadioMarkPropsType;
