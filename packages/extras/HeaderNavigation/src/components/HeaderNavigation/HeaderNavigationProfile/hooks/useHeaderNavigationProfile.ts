import { useControlledState } from '@deliveryhero/armor-system';
import { UseHeaderNavigationProfileProps } from '../type';

const useHeaderNavigationProfile = ({
    selectedValue: selectedValueProp,
    onSelectedValueChange,
    open,
    onOpenChange,
    zIndex,
}: UseHeaderNavigationProfileProps) => {
    const [selectedValue, setSelectedValue] = useControlledState(
        '',
        selectedValueProp,
        onSelectedValueChange,
    );

    const [openState, setOpenState] = useControlledState(
        false,
        open,
        onOpenChange,
    );

    return {
        selectedValue,
        setSelectedValue,
        setOpenState,
        openState,
        listContainerProps: {
            zIndex
        },
    };
};

export default useHeaderNavigationProfile;
