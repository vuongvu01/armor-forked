import { <%- component_name_pascal %>PropsType } from '../type';

export const use<%- component_name_pascal %> = ({ exampleProperty, ...restProps }: <%- component_name_pascal %>PropsType) => {
    // put all your component logic here

    return {
        rootProps: restProps,
        subNodeProps: {},
    };
};
