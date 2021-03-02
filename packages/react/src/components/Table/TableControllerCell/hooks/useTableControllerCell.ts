import { TableControllerCellPropsType } from '../type';

export const useTableControllerCell = ({
    onTriggerClick,
    expanded,
    rowId,
    enableTriggerVisibility,
    ...restProps
}: TableControllerCellPropsType) => {
    return {
        rootProps: restProps,
        triggerProps: {
            light: true,
            marginRight: 2.5,
            onClick: onTriggerClick,
            visible: enableTriggerVisibility !== false,
            'data-rowid': rowId,
        },
        triggerIconProps: {
            small: true,
            expanded,
        },
    };
};
