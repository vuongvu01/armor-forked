import { <%- component_name_pascal %>PropsType } from '../type';
import {ReferenceType} from "../../../../type";

export const use<%- component_name_pascal %> = ({ exampleProperty, ...restProps }: <%- component_name_pascal %>PropsType, ref: ReferenceType) => {
    // put all your component logic here

    return {
        rootProps: {
            ...restProps,
            ref,
        },
    };
};
