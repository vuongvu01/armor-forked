import { DatePickerEffectiveCommonPropsType } from '../type';

export const useCommonDatePickerCompatibility = ({
    enableApplyButton,
    enableActionButtons,
}: DatePickerEffectiveCommonPropsType) => {
    return {
        enableApplyButton: !!(enableActionButtons !== undefined
            ? enableActionButtons
            : enableApplyButton),
    };
};
