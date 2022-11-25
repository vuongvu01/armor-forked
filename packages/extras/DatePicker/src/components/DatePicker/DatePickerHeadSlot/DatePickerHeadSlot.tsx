import React, { forwardRef, memo } from 'react';

import { DatePickerHeadSlotRoot } from './style';
import { DatePickerHeadSlotPropsType } from './type';
import { DATE_PICKER_HEAD_SLOT_CLASS_PREFIX } from './constants';

/**
 * @internal
 */
export const DatePickerHeadSlot = memo(
    forwardRef<HTMLDivElement, DatePickerHeadSlotPropsType>(
        function DatePickerHeadSlot({ ...props }) {
            return (
                <DatePickerHeadSlotRoot {...props}>
                    {props.content}
                </DatePickerHeadSlotRoot>
            );
        },
    ),
);

DatePickerHeadSlot.displayName = DATE_PICKER_HEAD_SLOT_CLASS_PREFIX;
