import {RefObject} from "react";
import { <%- component_name_pascal %>PropsType } from '../type';
import { useRootRef } from '../../../system';

export const use<%- component_name_pascal %> = ({ exampleProperty, ...restProps }: <%- component_name_pascal %>PropsType, ref: RefObject<HTMLDivElement>) => {
    const innerRef = useRootRef<HTMLDivElement>(ref);

    // put all your component logic here

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
    };
};
