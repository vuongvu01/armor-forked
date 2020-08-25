import { Indexed } from '../../../type';
import { ThemeType } from '../../../styling';

export type SideSheetHeaderPropsType = Indexed<{
    description?: string;
    theme?: ThemeType;
    title?: string;
}>;
