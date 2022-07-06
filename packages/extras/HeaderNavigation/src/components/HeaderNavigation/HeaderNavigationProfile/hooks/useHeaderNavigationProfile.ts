import { useControlledState } from '@deliveryhero/armor-system';
import { UseHeaderNavigationProfileProps } from '../type';

const useHeaderNavigationProfile = ({
    selectedValue: selectedValueProp,
    onSelectedValueChange,
}: UseHeaderNavigationProfileProps) => {
    const [selectedValue, setSelectedValue] = useControlledState(
        '',
        selectedValueProp,
        onSelectedValueChange,
    );

    return {
        selectedValue,
        setSelectedValue,
    };
};

export default useHeaderNavigationProfile;
