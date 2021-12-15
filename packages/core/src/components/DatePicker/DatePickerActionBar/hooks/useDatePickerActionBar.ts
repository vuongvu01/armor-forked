import { useCallback } from 'react';
import { DatePickerActionBarPropsType } from '../type';
import { RefType } from '../../../../type';

export const useDatePickerActionBar = <E extends HTMLDivElement>(
    {
        applyValue,
        clearValue,
        setClose,
        enableApplyButton,
        enableClearSelectionButton,
        enableTodayButton,
        onTodayButtonClick,
        enableCloseOnSelect,
        ...restProps
    }: DatePickerActionBarPropsType,
    ref: RefType<E>,
) => {
    const onApplyButtonClick = useCallback(() => {
        applyValue?.();
        setClose?.();
    }, [applyValue, setClose]);

    const showTodayButton = !!enableTodayButton;
    const showApplyButton = !!enableApplyButton;
    const showClearSelectionButton = !!enableClearSelectionButton;

    const showTodayButtonRegular =
        showTodayButton && (showApplyButton || showClearSelectionButton);
    const showTodayButtonWide =
        showTodayButton && !showApplyButton && !showClearSelectionButton;

    const showBar =
        showTodayButtonRegular || showApplyButton || showClearSelectionButton;

    return {
        rootProps: {
            ...restProps,
            ref,
        },
        getApplyButtonProps: () => ({
            onClick: onApplyButtonClick,
        }),
        getTodayButtonProps: () => ({
            onClick: () => {
                onTodayButtonClick?.();
                if (enableCloseOnSelect) {
                    setClose?.();
                }
            },
        }),
        getClearSelectionButtonProps: () => ({
            onClick: () => {
                clearValue?.();
                setClose?.();
            },
        }),
        showBar,
        showApplyButton,
        showTodayButtonRegular,
        showClearSelectionButton,
        showTodayButtonWide,
    };
};
