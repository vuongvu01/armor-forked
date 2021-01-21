import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { ObjectLiteralType } from '../../../type';

type DatePickerActionBarEffectivePropsType = Partial<{
    // exampleProperty: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    ObjectLiteralType;

export type DatePickerActionBarPropsType = DatePickerActionBarEffectivePropsType &
    ComponentStylePropsType;

export type DatePickerActionBarRootPropsType = DatePickerActionBarEffectivePropsType &
    ComponentElementStylePropsType;

// export type DatePickerActionBarSubNodePropsType = {} & ComponentElementStylePropsType;
