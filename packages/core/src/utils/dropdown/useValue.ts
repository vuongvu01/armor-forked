import { useState } from 'react';

import {
    DropdownInternalValueType,
    DropdownValueType,
} from '../../components/Dropdown/type';

const normalizeValue = (value?: DropdownValueType) => {
    if (typeof value === 'undefined') {
        return [];
    }

    return Array.isArray(value) ? value : [value];
};

export const useValue = (
    value?: DropdownValueType,
    defaultValue?: DropdownValueType,
): [
    DropdownInternalValueType,
    (nextValue: DropdownInternalValueType) => void,
] => {
    const [ownValue, setOwnValue] = useState<DropdownInternalValueType>(
        normalizeValue(defaultValue),
    );
    const controlled = typeof value !== 'undefined';

    if (controlled) {
        return [normalizeValue(value), () => {}];
    }

    return [ownValue, setOwnValue];
};
