import { OptionListFooterPropsType } from '../type';

export const useOptionListFooter = ({
    footerContent,
    onCancelClick,
    onConfirmClick,
    ...restProps
}: OptionListFooterPropsType) => ({
    rootProps: restProps,
    footerContent,
    footerCancelButtonProps: {
        onClick: onCancelClick,
    },
    footerConfirmButtonProps: {
        onClick: onConfirmClick,
    },
});
