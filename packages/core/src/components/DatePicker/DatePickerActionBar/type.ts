import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

type DatePickerActionBarEffectivePropsType = HTMLAttributes<HTMLDivElement>; // includes all HTML Div properties

export type DatePickerActionBarPropsType = DatePickerActionBarEffectivePropsType &
    Partial<{
        enableApplyButton: boolean;
        enableClearSelectionButton: boolean;
        enableTodayButton: boolean;
        enableCloseOnSelect: boolean;
        applyValue: () => void;
        clearValue: () => void;
        setClose: () => void;
        onTodayButtonClick: () => void;
    }> &
    ComponentStylePropsType;

export type DatePickerActionBarRootPropsType = DatePickerActionBarEffectivePropsType &
    ComponentElementStylePropsType;
