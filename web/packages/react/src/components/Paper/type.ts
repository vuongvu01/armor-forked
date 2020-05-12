import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import { MarginAttributesType } from '../../system/attributes';
import { ThemeType } from '../../styling';
import { Indexed } from '../../type';

export type PaperPropsType = PaperOverridableAttributesType &
    ComponentAttributesType<PaperAttributesType, PaperStyleOverrideType> &
    MarginAttributesType;

type PaperAttributesType = ButtonHTMLAttributes<HTMLButtonElement> &
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'>;

export type PaperOverridableAttributesType = Indexed<{}>;
export type PaperStyleOverrideType = {
    Root?: PaperStylesFunctionType;
};

export type PaperStylesFunctionType = StylesFunctionOrStubType<
    PaperAttributesType
>;
export type PaperStyleOverrideSafeType = Required<PaperStyleOverrideType>;

export type PaperRootStylePropsType = PaperPropsType & {
    theme: ThemeType;
    styles: PaperStylesFunctionType;
};
