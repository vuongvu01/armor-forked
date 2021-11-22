import { DatePickerEffectiveCommonPropsType } from '../type';

export const useInputProps = ({
    label,
    placeholder,
    disabled,
    readOnly,
    error,
    'data-testid-input': dataTestIdInput,
}: DatePickerEffectiveCommonPropsType) => {
    return {
        inactive: disabled || readOnly,
        inputProperties: {
            readOnly: true,
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
