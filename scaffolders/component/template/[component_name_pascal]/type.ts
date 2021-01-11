import {
    HTMLAttributes,
} from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import {
    MarginAttributesType,
} from '../../system/attributes';
import { ObjectLiteralType } from '../../type';

type <%- component_name_pascal %>EffectivePropsType = Partial<{
    // exampleProperty: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType &
    ObjectLiteralType;

/* <%- component_name_pascal %> component prop type */
export type <%- component_name_pascal %>PropsType = <%- component_name_pascal %>EffectivePropsType &
    ComponentStylePropsType;

/* <%- component_name_pascal %> Root node prop type */
export type <%- component_name_pascal %>RootPropsType = <%- component_name_pascal %>EffectivePropsType & ComponentElementStylePropsType;

/* <%- component_name_pascal %> SubNode node prop type */
export type <%- component_name_pascal %>SubNodePropsType = {} & ComponentElementStylePropsType;
