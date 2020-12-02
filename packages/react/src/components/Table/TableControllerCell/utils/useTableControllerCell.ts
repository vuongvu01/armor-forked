import { TableControllerCellPropsType } from '../type';

export const useTableControllerCell = ({
    onExpansionButtonClick,
    expanded,
    rowId,
    ...restProps
}: TableControllerCellPropsType) => {
    return {
        rootProps: restProps,
        iconButtonProps: {
            light: true,
            marginRight: 2.5,
            onClick: onExpansionButtonClick,
            'data-rowid': rowId,
        },
        iconButtonIconProps: {
            small: true,
            expanded,
        },
    };
};
