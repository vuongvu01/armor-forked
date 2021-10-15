import { ReactElement } from 'react';

export type ConfirmationDialogPropsType = {
    classNames: {
        ClearFiltersConfirmation: string;
        ClearFiltersConfirmationTitle: string;
        ClearFiltersConfirmationDescription: string;
        ClearFiltersConfirmationCancelButton: string;
        ClearFiltersConfirmationConfirmButton: string;
    };
    clearFilterContextMenuProps: Record<string, unknown>;
    clearFilterCancelButtonProps: Record<string, unknown>;
    clearFilterConfirmButtonProps: Record<string, unknown>;
    trigger: ReactElement;
};
