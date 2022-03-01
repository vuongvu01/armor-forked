import { useEffect } from 'react';

import {
    InternalItemGroupObjectType,
    OptionListGroupObjectType,
} from '../../OptionList/type';
import { DropdownInternalOptionType, DropdownInternalValueType } from '../type';
import { calculateActiveGroupMemberCounts } from '../utils/calculateActiveGroupMemberCounts';

export const useOnInternalItemGroupsUpdate = (
    internalValue: DropdownInternalValueType,
    internalOptions: DropdownInternalOptionType,
    setInternalGroups: (groups: InternalItemGroupObjectType) => void,
    groups?: OptionListGroupObjectType[],
    enableGroupSelection?: boolean,
) =>
    useEffect(() => {
        if (enableGroupSelection) {
            const groupMemberCounts =
                calculateActiveGroupMemberCounts(internalOptions);

            let updatedInternalGroups: InternalItemGroupObjectType = {};

            if (!internalValue) {
                setInternalGroups({});
            } else {
                internalValue.forEach((selectedOptionId) => {
                    const matchingOption = internalOptions.find(
                        (option) => option.value === selectedOptionId,
                    );

                    const itemsGroupId = matchingOption?.groupId;
                    if (matchingOption && itemsGroupId) {
                        const selectedGroups = Object.keys(
                            updatedInternalGroups,
                        );

                        if (
                            selectedGroups.includes(itemsGroupId) &&
                            internalValue.length
                        ) {
                            updatedInternalGroups = {
                                ...updatedInternalGroups,
                                [itemsGroupId]: {
                                    ...updatedInternalGroups[itemsGroupId],
                                    selectedItemsCount:
                                        updatedInternalGroups[itemsGroupId]
                                            .selectedItemsCount + 1,
                                    selectedItemIds: [
                                        ...updatedInternalGroups[itemsGroupId]
                                            .selectedItemIds,
                                        selectedOptionId,
                                    ],
                                },
                            };
                        } else {
                            // @ts-ignore todo: fix this
                            updatedInternalGroups = {
                                ...updatedInternalGroups,
                                [itemsGroupId]: {
                                    ...matchingOption,
                                    totalItemsCount:
                                        groupMemberCounts[itemsGroupId],
                                    selectedItemsCount: 1,
                                    selectedItemIds: [selectedOptionId],
                                },
                            };
                        }
                    }
                });
                setInternalGroups(updatedInternalGroups);
            }
        }
    }, [
        internalValue,
        internalOptions,
        groups,
        setInternalGroups,
        enableGroupSelection,
    ]);
