import { useMemo } from 'react';
import { useRootRef } from '@deliveryhero/armor-system';

import { ClearButtonPropsType } from '../type';
import { RefType } from '../../../type';

import { ClearButtonCircleFilledIcon, ClearButtonThinIcon } from '../style';
import {
    CLEAR_BUTTON_DEFAULT_STATE,
    CLEAR_BUTTON_DEFAULT_TYPE,
    CLEAR_BUTTON_DEFAULT_SIZE,
} from '../constants';

export const useClearButton = <E extends HTMLButtonElement>(
    {
        type = CLEAR_BUTTON_DEFAULT_TYPE,
        state = CLEAR_BUTTON_DEFAULT_STATE,
        size = CLEAR_BUTTON_DEFAULT_SIZE,
        iconSize,
        ...restProps
    }: ClearButtonPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    const isDisabled = state === 'disabled';
    const isCircleFilled = type === 'circle-filled';
    const isThin = type === 'thin';

    const Icon = useMemo(
        () =>
            isCircleFilled ? ClearButtonCircleFilledIcon : ClearButtonThinIcon,
        [isCircleFilled],
    );

    return {
        type,
        state,
        iconSize,
        size,
        rootProps: {
            ...restProps,
            disabled: isDisabled,
            _type: type,
            ref: innerRef,
            state,
            size,
        },

        iconProps: iconSize
            ? { [iconSize]: true }
            : {
                  ...(isCircleFilled && { large: true }),
                  ...(isThin && { small: true }),
              },
        Icon,
    };
};
