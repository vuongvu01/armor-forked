import { Ref } from 'react';
import { ListPropsType } from '../type';

export const useList = (
    { small, ...restProps }: ListPropsType,
    ref: Ref<unknown>,
) => {
    return {
        rootProps: {
            ...restProps,
            small,
            ref,
        },
    };
};
