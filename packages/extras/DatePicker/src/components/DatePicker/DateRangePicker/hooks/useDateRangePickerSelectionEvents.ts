import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { eventBus } from '@deliveryhero/armor-system';

import { DateVectorRange } from '../../utils/DateVectorRange';
import { extractDataFromDOMEvent } from '../../utils/extractDataFromDOMEvent';
import { DateVector } from '../../utils/DateVector';
import { DateRangePickerPropsType } from '../type';
import { DATE_RANGE_PICKER_CLOSE_PANEL } from '../constants';
import { getLatestAvailableDate, isRangeLegit } from '../utils/range';

type SelectionPropType = {
    onChange: (value: DateVectorRange) => void;
    isDateSelectable: (date: DateVector) => boolean;
    panelId: string;
    closeDropdown: () => void;
    enableCloseOnSelect: boolean;
};

type ClosePanelEventDetailType = {
    id: string;
};

export const useDateRangePickerSelectionEvents = (
    {
        onChange,
        isDateSelectable,
        panelId,
        closeDropdown,
        enableCloseOnSelect,
    }: SelectionPropType,
    { enableOnChangeOnSingleClick }: DateRangePickerPropsType,
) => {
    const [selectionStartCandidate, setSelectionStartCandidate] =
        useState<DateVector | null>(null);

    const [selectionEndCandidate, setSelectionEndCandidate] =
        useState<DateVector | null>(null);

    const onReallyChange = useCallback(
        (start: DateVector, end: DateVector) => {
            let newSelection = [start, end];
            if (end.isSmallerThanOrEqual(start)) {
                newSelection = [end, start];
            }

            onChange(new DateVectorRange(newSelection[0], newSelection[1]));
            if (enableCloseOnSelect) {
                closeDropdown();
            }
        },
        [closeDropdown, enableCloseOnSelect, onChange],
    );

    const onClosePanel = useCallback(
        ({ detail }: CustomEvent) => {
            const { id } = detail as ClosePanelEventDetailType;
            if (id === panelId) {
                setSelectionStartCandidate(null);
                setSelectionEndCandidate(null);
            }
        },
        [panelId],
    );

    useEffect(() => {
        eventBus.on(DATE_RANGE_PICKER_CLOSE_PANEL, onClosePanel);
        return () => eventBus.off(DATE_RANGE_PICKER_CLOSE_PANEL, onClosePanel);
    }, [onClosePanel]);

    const onClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const data = extractDataFromDOMEvent(event);
            if (!data) {
                return;
            }

            const { vector, displayedMonth } = data;
            const allowed = isDateSelectable(vector);
            if (!displayedMonth || !allowed) {
                return;
            }

            if (enableOnChangeOnSingleClick) {
                onReallyChange(vector.clone(), vector.clone());
                setSelectionStartCandidate(null);
                setSelectionEndCandidate(null);
            } else {
                if (selectionStartCandidate) {
                    // the beginning was already chosen
                    const endDate = vector.clone();
                    if (
                        isRangeLegit(
                            selectionStartCandidate,
                            endDate,
                            isDateSelectable,
                        )
                    ) {
                        onReallyChange(selectionStartCandidate, endDate);
                        setSelectionStartCandidate(null);
                        setSelectionEndCandidate(null);
                    }
                } else {
                    // set the beginning
                    setSelectionStartCandidate(vector.clone());
                }
            }
        },
        [
            isDateSelectable,
            selectionStartCandidate,
            onReallyChange,
            enableOnChangeOnSingleClick,
        ],
    );

    // when the mouse is moving over a calendar item, we set it as a selection end candidate
    const onMouseEnter = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const data = extractDataFromDOMEvent(event);
            if (!data) {
                return;
            }

            const { vector, displayedMonth } = data;
            if (!displayedMonth) {
                return;
            }

            if (selectionStartCandidate) {
                setSelectionEndCandidate(
                    getLatestAvailableDate(
                        selectionStartCandidate,
                        vector.clone(),
                        isDateSelectable,
                    ),
                );
            }
        },
        [isDateSelectable, selectionStartCandidate],
    );

    return {
        dayButtonProps: {
            onClick,
            onMouseEnter,
        },
        selectionStartCandidate,
        selectionEndCandidate,
    };
};
