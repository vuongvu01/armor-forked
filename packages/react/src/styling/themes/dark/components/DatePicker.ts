import { css } from 'styled-components';
import { color } from '../../../../system';

export const getDatePickerOverride = () => {
    const result = css`
        .DatePicker-Dropdown,
        .DateRangePicker-Dropdown {
            background-color: ${color('neutral.02')};
        }

        .DatePickerDaySelector-Day--displayedMonth {
            &.DatePickerDaySelector-Day--selectedLeftEnd {
                .DatePickerDaySelector-DayButton {
                    color: ${color('neutral.00')};
                    background-color: ${color('primary.main')};
                }

                &:not(.DatePickerDaySelector-Day--selectedRightEnd) {
                    .DatePickerDaySelector-DayPaddingRight {
                        background-color: ${color('primary.light')};
                    }
                }
            }

            &.DatePickerDaySelector-Day--selectedMiddle {
                .DatePickerDaySelector-DayButton {
                    color: ${color('neutral.00')};
                    background-color: ${color('primary.light')};
                    &:hover {
                        background-color: ${color('primary.main')};
                    }
                }

                .DatePickerDaySelector-DayPaddingLeft,
                .DatePickerDaySelector-DayPaddingRight {
                    background-color: ${color('primary.light')};
                }
            }

            &.DatePickerDaySelector-Day--selectedRightEnd {
                .DatePickerDaySelector-DayButton {
                    color: ${color('neutral.00')};
                    background-color: ${color('primary.main')};
                }

                &:not(.DatePickerDaySelector-Day--selectedLeftEnd) {
                    .DatePickerDaySelector-DayPaddingLeft {
                        background-color: ${color('primary.light')};
                    }
                }
            }
        }

        .DatePickerTimeSelector-Input {
            .TextInput-Input {
                color: ${color('neutral.04')};
            }
        }

        .DatePickerMonthYearSelector-Year:not(:first-child) {
            border-top: 1px solid ${color('neutral.01')};
        }

        .DatePickerMonthYearSelector-YearTitle {
            color: ${color('neutral.06')};
            background-color: ${color('neutral.03')};
            &:hover {
                background-color: ${color('neutral.04')};
            }
        }
    `;

    return result;
};
