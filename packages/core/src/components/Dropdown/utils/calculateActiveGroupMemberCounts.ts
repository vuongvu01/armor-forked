import { DropdownInternalOptionType } from '../type';

export const calculateActiveGroupMemberCounts = (
    internalOptions: DropdownInternalOptionType,
) => {
    let groupMemberCounts: Record<string, number> = {};

    internalOptions.forEach((member) => {
        if (member?.disabled) {
            return;
        }

        const memberGroupId = member?.groupId;

        if (memberGroupId) {
            if (memberGroupId in groupMemberCounts) {
                groupMemberCounts = {
                    ...groupMemberCounts,
                    [memberGroupId]: groupMemberCounts[memberGroupId] + 1,
                };
            } else {
                groupMemberCounts = {
                    ...groupMemberCounts,
                    [memberGroupId]: 1,
                };
            }
        }
    });

    return groupMemberCounts;
};
