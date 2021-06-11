import { RefType } from '../../../type';
import { useRootRef } from '../../../system';
import { ButtonPropsType } from '../type';

export const useButton = <E extends HTMLElement>(
    {
        disabled,
        small,
        wide,
        primary,
        secondary,
        tertiary,
        danger,
        tag,
        likeDisabled,
        tabIndex,
        ...restProps
    }: ButtonPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);
    const sortOfDisabled = disabled || likeDisabled;

    return {
        rootProps: {
            ...restProps,
            small,
            wide,
            disabled,
            likeDisabled,
            primary,
            secondary,
            tertiary,
            danger,
            tabIndex: sortOfDisabled ? -1 : tabIndex,
        },
        tagProps: {
            ref: innerRef,
        },
        classNameProps: [
            sortOfDisabled,
            small,
            wide,
            primary,
            secondary,
            tertiary,
            danger,
        ],
        Tag: tag || 'button',
    };
};
