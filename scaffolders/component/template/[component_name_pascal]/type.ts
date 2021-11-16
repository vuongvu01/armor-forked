import {
    HTMLAttributes,
} from 'react';
import {
    MarginPropsType,
} from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type <%- component_name_pascal %>EffectivePropsType = Partial<{
    // exampleProperty: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType;

export type <%- component_name_pascal %>PropsType = <%- component_name_pascal %>EffectivePropsType &
    ComponentStylePropsType;

export type <%- component_name_pascal %>RootPropsType = <%- component_name_pascal %>EffectivePropsType & ComponentElementStylePropsType;

// export type <%- component_name_pascal %>SubNodePropsType = { /* ... add props here or remove this block ...*/ } & ComponentElementStylePropsType;
