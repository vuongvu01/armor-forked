import { css } from 'styled-components';
import {
    color,
    colorBlue10,
    colorBlue20,
    colorBlue30,
    colorGrey00,
    colorGrey50,
    colorGrey60,
    colorGrey80,
} from '@deliveryhero/armor-system';

export const makeDatePickerOverride = () => {
    const getDropdownOverride = () => css`
        background-color: ${color('neutral.02')};

        .DatePickerDaySelector-Day--displayedMonth {
            &.DatePickerDaySelector-Day--selectedLeftEnd {
                .DatePickerDaySelector-DayButton {
                    color: ${colorGrey80};
                    background-color: ${colorBlue10};
                }

                &:not(.DatePickerDaySelector-Day--selectedRightEnd) {
                    .DatePickerDaySelector-DayPaddingRight {
                        background-color: ${colorGrey60};
                    }
                }
            }

            &.DatePickerDaySelector-Day--selectedMiddle {
                .DatePickerDaySelector-DayButton {
                    color: ${colorGrey00};
                    background-color: ${colorGrey60};

                    &:hover {
                        background-color: ${colorGrey50};
                    }
                }

                .DatePickerDaySelector-DayPaddingLeft,
                .DatePickerDaySelector-DayPaddingRight {
                    background-color: ${colorGrey60};
                }
            }

            &.DatePickerDaySelector-Day--selectedRightEnd {
                .DatePickerDaySelector-DayButton {
                    color: ${colorGrey80};
                    background-color: ${colorBlue10};
                }

                &:not(.DatePickerDaySelector-Day--selectedLeftEnd) {
                    .DatePickerDaySelector-DayPaddingLeft {
                        background-color: ${colorGrey60};
                    }
                }
            }

            &.DatePickerDaySelector-Day--current {
                .DatePickerDaySelector-DayButton:after {
                    background-color: ${colorBlue20};
                }

                &.DatePickerDaySelector-Day--selectedLeftEnd,
                &.DatePickerDaySelector-Day--selectedRightEnd {
                    .DatePickerDaySelector-DayButton:after {
                        background-color: ${colorBlue30};
                    }
                }

                &:not(.DatePickerDaySelector-Day--selectedMiddle):hover
                    .DatePickerDaySelector-DayButton:after {
                    background-color: ${colorBlue30};
                }
            }
        }

        .DatePickerActionBar-Root {
            background-color: ${color('neutral.03')};
        }

        .DatePickerMonthYearSelector-Year:not(:first-child) {
            border-top: 1px solid ${color('neutral.01')};
        }

        .DatePickerMonthYearSelector-YearTitle {
            color: ${color('neutral.06')};
            background-color: ${color('neutral.03')};

            &:hover {
                background-color: ${color('neutral.05')};
            }
        }

        .DatePickerTopBar-MonthYearSelectorToggle {
            color: ${color('neutral.06')};
        }

        .DatePickerTopBar-MonthNavigationButtonBackward,
        .DatePickerTopBar-MonthNavigationButtonForward {
            color: ${color('neutral.06')};
        }
    `;

    return {
        DatePickerDropdown: getDropdownOverride,
    };
};
