import { useCallback } from 'react';
import { DatePickerActionBarPropsType } from '../type';
import { ReferenceType } from '../../../../type';

export const useDatePickerActionBar = (
    { applyValue, setClose, ...restProps }: DatePickerActionBarPropsType,
    ref: ReferenceType,
) => {
    const onApplyButtonClick = useCallback(() => {
        applyValue();
        setClose();
    }, [applyValue, setClose]);
    const onCancelButtonClick = useCallback(() => {
        setClose();
    }, [setClose]);

    return {
        rootProps: {
            ...restProps,
            ref,
        },
        applyButtonProps: {
            onClick: onApplyButtonClick,
        },
        cancelButtonProps: {
            onClick: onCancelButtonClick,
        },
    };
};
