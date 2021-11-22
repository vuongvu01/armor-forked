import { DropdownOnChangeEventType } from '../type';

export const handleOnChange = (
    value: Array<number | string>,
    onChange?: (event: DropdownOnChangeEventType) => void,
) => {
    if (onChange) {
        onChange({
            target: {
                value,
            },
        });
    }
};
