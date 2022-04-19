import { DatePickerEffectiveCommonPropsType } from '../type';

type UseCommonDatePickerInputPropsPropsType = {};

export const useCommonDatePickerInputProps = (
    _: UseCommonDatePickerInputPropsPropsType,
    {
        label,
        placeholder,
        disabled,
        readOnly,
        error,
        'data-testid-input': dataTestIdInput,
        inputMaskEnabled,
    }: DatePickerEffectiveCommonPropsType,
) => {
    return {
        inactive: disabled || readOnly,
        inputProperties: {
            readOnly: !inputMaskEnabled,
            error,
            disabled,
            label,
            placeholder,
            enableRootRef: true,
            enableFocusOnRootClick: true,
            'data-testid-input': dataTestIdInput,
        },
    };
};
