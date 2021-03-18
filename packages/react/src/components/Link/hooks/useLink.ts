import { LinkPropsType } from '../type';
import { ReferenceType } from '../../../type';

export const useLink = (
    {
        small,
        medium,
        large,
        focused,
        pressed,
        disabled,
        inline,
        ...restProps
    }: LinkPropsType,
    ref: ReferenceType,
) => {
    // put all your component logic here

    return {
        rootProps: {
            ...restProps,
            small,
            medium,
            large,
            focused,
            pressed,
            disabled,
            inline,
            ref,
        },
    };
};
