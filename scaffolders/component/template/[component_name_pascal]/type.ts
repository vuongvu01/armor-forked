import {
    ComponentPropsWithoutRef,
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
    // TODO: Add types here
}> &
ComponentPropsWithoutRef<'div'> &
    MarginPropsType;

export type <%- component_name_pascal %>PropsType = <%- component_name_pascal %>EffectivePropsType &
    ComponentStylePropsType;

export type <%- component_name_pascal %>RootPropsType = <%- component_name_pascal %>EffectivePropsType & ComponentElementStylePropsType;

