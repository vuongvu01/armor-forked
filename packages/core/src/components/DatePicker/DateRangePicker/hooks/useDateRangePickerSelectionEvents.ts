import { MouseEvent, useCallback, useEffect, useState } from 'react';

import { DateVectorRange } from '../../utils/DateVectorRange';
import { extractDataFromDOMEvent } from '../../utils/extractDataFromDOMEvent';
import { DateVector } from '../../utils/DateVector';

type SelectionPropType = {
    value: DateVectorRange;
    onChange: (value: DateVectorRange) => void;
};

export const useDateRangePickerSelectionEvents = ({
    value,
    onChange,
}: SelectionPropType) => {
    const [
        selectionStartCandidate,
        setSelectionStartCandidate,
    ] = useState<DateVector | null>(null);

    const [
        selectionEndCandidate,
        setSelectionEndCandidate,
    ] = useState<DateVector | null>(null);

    const onClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const data = extractDataFromDOMEvent(event);
            if (!data || !data.displayedMonth) {
                return;
            }

            const { vector, withShift } = data;
            const { dateStart, dateEnd } = value;

            if (withShift) {
                // *** [ *** ] **X** <-- click (X) was to the right or in the middle
                if (vector.isGreaterThanOrEqual(dateStart)) {
                    onChange(value.clone({ dateStart, dateEnd: vector }));
                } else {
                    onChange(value.clone({ dateStart: vector, dateEnd }));
                }
            } else {
                // on click we just collapse the selection to one specific day
                onChange(value.clone({ dateStart: vector, dateEnd: vector }));
            }
        },
        [value, onChange],
    );

    // we define selection start candidate when the mouse is downed on a calendar item
    const onMouseDown = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const data = extractDataFromDOMEvent(event);
            if (!data || !data.displayedMonth) {
                return;
            }

            const { vector, withShift } = data;
            const { dateStart, dateEnd } = value;

            if (withShift) {
                // *** [ *** ] **X** <-- click (X) was to the right or in the middle
                if (vector.isGreaterThanOrEqual(dateStart)) {
                    setSelectionStartCandidate(dateStart);
                } else {
                    setSelectionStartCandidate(dateEnd);
                }
            } else {
                setSelectionStartCandidate(vector.clone());
            }
        },
        [value, setSelectionStartCandidate],
    );

    // when the mouse is moving over a calendar item, we set it as selection end candidate in case if
    // selection start candidate is defined
    const onMouseEnter = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const data = extractDataFromDOMEvent(event);
            if (!data || !data.displayedMonth) {
                return;
            }

            if (selectionStartCandidate) {
                setSelectionEndCandidate(data.vector);
            }
        },
        [selectionStartCandidate, setSelectionEndCandidate],
    );

    // on any sort of mouse release we run onChange from selection candidates, if they are defined
    useEffect(() => {
        const discardSelection = () => {
            if (selectionStartCandidate && selectionEndCandidate) {
                let newSelection = [
                    selectionStartCandidate,
                    selectionEndCandidate,
                ];
                if (
                    selectionEndCandidate.isSmallerThanOrEqual(
                        selectionStartCandidate,
                    )
                ) {
                    newSelection = [
                        selectionEndCandidate,
                        selectionStartCandidate,
                    ];
                }
                onChange(new DateVectorRange(newSelection[0], newSelection[1]));
            }

            setSelectionStartCandidate(null);
            setSelectionEndCandidate(null);
        };

        document.addEventListener('mouseup', discardSelection);

        return () => {
            document.removeEventListener('mouseup', discardSelection);
        };
    }, [selectionStartCandidate, selectionEndCandidate, onChange]);

    return {
        dayButtonProps: {
            onClick,
            onMouseDown,
            onMouseEnter,
        },
        selectionStartCandidate,
        selectionEndCandidate,
    };
};
