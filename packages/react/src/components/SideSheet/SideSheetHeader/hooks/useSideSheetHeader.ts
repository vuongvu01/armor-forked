import { SideSheetHeaderPropsType } from '../type';
import { sideSheetHeader } from '../../constants';

export const useSideSheetHeader = ({
    description,
    title,
    children,
    ...props
}: SideSheetHeaderPropsType) => {
    return {
        rootProps: {
            'data-testid': sideSheetHeader,
            ...props,
        },

        title,
        description,
        children,

        showTitle: !!title && !children,
        showDescription: !!description && !children,
    };
};
