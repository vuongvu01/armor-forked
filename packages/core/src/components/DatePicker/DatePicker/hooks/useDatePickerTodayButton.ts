import { useCallback } from 'react';
import { DateVectorRange } from '../../utils/DateVectorRange';
import { DateVector } from '../../utils/DateVector';
import { DatePickerEffectiveCommonPropsType } from '../../type';

type UseDatePickerTodayButtonProps = {
    currentDateVector: DateVector;
    onDateTimeChange: (newValue: DateVectorRange) => void;
    setDisplayedDateVector: (nextValue: DateVector) => void;
    enableCloseOnSelect?: boolean;
};

export const useDatePickerTodayButton = (
    {
        currentDateVector,
        onDateTimeChange,
        setDisplayedDateVector,
    }: UseDatePickerTodayButtonProps,
    _: DatePickerEffectiveCommonPropsType,
) => {
    const onTodayButtonClick = useCallback(() => {
        const newVector = new DateVectorRange(
            currentDateVector.clone(),
            currentDateVector.clone(),
        );
        onDateTimeChange(newVector); // change value
        if (newVector.dateStart) {
            setDisplayedDateVector(newVector.dateStart); // update the display
        }
    }, [currentDateVector, onDateTimeChange, setDisplayedDateVector]);

    return {
        onTodayButtonClick,
    };
};
