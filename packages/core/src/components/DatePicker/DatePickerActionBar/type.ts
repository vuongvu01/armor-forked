import { HTMLAttributes, ReactNode } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

type DatePickerActionBarEffectivePropsType = Partial<{
    applyValue: () => void;
    setClose: () => void;
}> &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div properties

export type DatePickerActionBarPropsType = DatePickerActionBarEffectivePropsType &
    Partial<{
        customActions: ReactNode;
        enableApplyButtons: boolean;
    }> &
    ComponentStylePropsType;

export type DatePickerActionBarRootPropsType = DatePickerActionBarEffectivePropsType &
    ComponentElementStylePropsType;

// export type DatePickerActionBarSubNodePropsType = {} & ComponentElementStylePropsType;
