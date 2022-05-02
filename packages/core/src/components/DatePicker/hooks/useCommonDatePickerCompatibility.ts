import { useMemo } from 'react';
import { DatePickerEffectiveCommonPropsType } from '../type';

export const useCommonDatePickerCompatibility = ({
    enableApplyButton,
    enableActionButtons,
}: DatePickerEffectiveCommonPropsType) => {
    return useMemo(
        () => ({
            enableApplyButton: !!(enableActionButtons !== undefined
                ? enableActionButtons
                : enableApplyButton),
        }),
        [enableActionButtons, enableApplyButton],
    );
};
