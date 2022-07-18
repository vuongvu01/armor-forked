import { useRootRef } from '@deliveryhero/armor-system';

import { RefType } from '../../../type';
import { ButtonPropsType } from '../type';

const preventDefault = (event: React.SyntheticEvent) => {
    event.preventDefault();
};

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

    const isDisabled = disabled || likeDisabled;

    const Tag = tag || 'button';

    const isNotButtonTag = Tag !== 'button';

    const onClick =
        isNotButtonTag && isDisabled ? preventDefault : restProps?.onClick;

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
            tabIndex: isDisabled ? -1 : tabIndex,
            onClick,
        },
        tagProps: {
            ref: innerRef,
        },
        classNameProps: [
            isDisabled,
            small,
            wide,
            primary,
            secondary,
            tertiary,
            danger,
        ],
        Tag,
    };
};
