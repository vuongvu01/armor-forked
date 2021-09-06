import { useCallback } from 'react';
import {
    DropdownInternalOptionType,
    DropdownInternalValueType,
    DropdownOnChangeEventType,
    DropdownOnToggleGroupType,
} from '../type';
import { ItemGroupsPropsType, OptionObjectType } from '../../OptionList/type';
import { handleOnChange } from '../utils/handleOnChange';
import { ScalarType } from '../../../type';

const getAllGroupMembers = (
    groupId: ScalarType,
    options: DropdownInternalOptionType,
) => {
    const allGroupMemberOptions: ScalarType[] = [];

    options.forEach(option => {
        if (option.groupId === groupId && !option.disabled) {
            allGroupMemberOptions.push(option.value);
        }
    });

    return allGroupMemberOptions;
};

const isUnique = (value: ScalarType, index: number, options: ScalarType[]) => {
    return options.indexOf(value) === index;
};

export const useOnToggleGroup = (
    setInternalValue:
        | ((nextValue: DropdownInternalValueType) => void)
        | undefined,
    internalOptions: DropdownInternalOptionType,
    internalValue: DropdownInternalValueType,
    internalGroups?: ItemGroupsPropsType,
    onChange?: (event: DropdownOnChangeEventType) => void,
) =>
    useCallback<DropdownOnToggleGroupType>(
        (groupId: ScalarType) => {
            const preselectedDisabledOptionItems: Array<ScalarType> = [];

            internalOptions.forEach((option: OptionObjectType) => {
                if (option.disabled && internalValue.includes(option.value)) {
                    preselectedDisabledOptionItems.push(option.value);
                }
            });

            let updatedOptionValues = [
                ...preselectedDisabledOptionItems,
                ...internalValue,
            ];

            if (internalGroups && groupId in internalGroups) {
                if (
                    internalGroups[groupId].totalItemsCount ===
                    internalGroups[groupId].selectedItemsCount
                ) {
                    updatedOptionValues = updatedOptionValues.filter(
                        value =>
                            !internalGroups[groupId].selectedItemIds.includes(
                                value,
                            ),
                    );
                } else {
                    const allGroupMemberOptions: ScalarType[] = getAllGroupMembers(
                        groupId,
                        internalOptions,
                    );

                    updatedOptionValues = [
                        ...updatedOptionValues,
                        ...allGroupMemberOptions,
                    ];
                }
            } else {
                const allGroupMemberOptions: ScalarType[] = getAllGroupMembers(
                    groupId,
                    internalOptions,
                );

                updatedOptionValues = [
                    ...updatedOptionValues,
                    ...allGroupMemberOptions,
                ];
            }

            updatedOptionValues = updatedOptionValues.filter(isUnique);

            handleOnChange(updatedOptionValues, onChange);

            setInternalValue?.(updatedOptionValues);
        },
        [setInternalValue, internalOptions, internalValue, internalGroups],
    );
