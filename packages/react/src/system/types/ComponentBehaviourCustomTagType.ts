import { ComponentType } from 'react';

export type ComponentBehaviourCustomTagPropertyType =
    | string
    | ComponentType<any>;

export type ComponentBehaviourCustomTagType = Partial<{
    /**
     * Sets HTML tag or React component to be used as an HTML tag for **.#COMPONENT_NAME#-Root**
     */
    tag: ComponentBehaviourCustomTagPropertyType;
}>;
