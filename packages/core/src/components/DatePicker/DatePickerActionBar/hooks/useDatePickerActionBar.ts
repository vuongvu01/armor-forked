import { useCallback } from 'react';
import { DatePickerActionBarPropsType } from '../type';
import { RefType } from '../../../../type';

export const useDatePickerActionBar = <E extends HTMLDivElement>(
    { applyValue, setClose, ...restProps }: DatePickerActionBarPropsType,
    ref: RefType<E>,
) => {
    const onApplyButtonClick = useCallback(() => {
        if (applyValue) {
            applyValue();
        }
        if (setClose) {
            setClose();
        }
    }, [applyValue, setClose]);

    return {
        rootProps: {
            ...restProps,
            ref,
        },
        applyButtonProps: {
            onClick: onApplyButtonClick,
        },
        cancelButtonProps: {
            onClick: setClose,
        },
    };
};
