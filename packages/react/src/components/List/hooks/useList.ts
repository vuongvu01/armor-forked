import { Ref } from 'react';
import { ListPropsType } from '../type';

export const useList = (
    { small, ...restProps }: ListPropsType,
    ref: Ref<unknown>,
) => {
    // put all your component logic here

    return {
        rootProps: {
            ...restProps,
            small,
            ref,
        },
    };
};
