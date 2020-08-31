export type ModalPropsType = {
    open?: boolean;
    onClose?: () => void;
    disableBackdrop?: boolean;
    disableCloseByEscape?: boolean;
    zIndex?: number;
};

export type StackItemParametersType = {
    zIndex?: number;
    disableCloseByEscape?: boolean;
};
