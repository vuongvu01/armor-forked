import { DatePickerEffectiveCommonPropsType } from '../type';

type UseCommonDatePickerActionButtonsPropsType = {
    applyValue: () => void;
    clearValue: () => void;
    closeDropdown: () => void;
    enableApplyButton: boolean;
};

export const useCommonDatePickerActionButtons = (
    {
        applyValue,
        clearValue,
        closeDropdown,
        enableApplyButton,
    }: UseCommonDatePickerActionButtonsPropsType,
    {
        enableClearSelectionButton,
        enableCloseOnSelect,
        enableTodayButton,
    }: DatePickerEffectiveCommonPropsType,
) => {
    const showActions = !!(
        enableApplyButton ||
        enableTodayButton ||
        enableClearSelectionButton
    );
    const reallyEnableCloseOnSelect =
        !enableApplyButton && enableCloseOnSelect === true;

    return {
        enableCloseOnSelect: reallyEnableCloseOnSelect,
        showActions,
        actionBarProps: {
            enableApplyButton,
            enableClearSelectionButton,
            enableTodayButton,
            applyValue, // to copy dirty value to actual
            clearValue, // to copy dirty value to actual
            setClose: closeDropdown, // to close the dropdown
            enableCloseOnSelect: reallyEnableCloseOnSelect,
            onTodayButtonClick: () => {},
        },
    };
};
