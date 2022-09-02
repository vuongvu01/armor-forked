import React, { FC, memo } from 'react';
import {
    Typography,
    Button,
    MemoizedContextMenu as ContextMenu,
} from '@deliveryhero/armor';
import { ConfirmationDialogPropsType } from './type';

export const ConfirmationDialog: FC<
    React.PropsWithChildren<ConfirmationDialogPropsType>
> = memo(
    ({
        classNames,
        clearFilterContextMenuProps,
        clearFilterCancelButtonProps,
        clearFilterConfirmButtonProps,
        trigger,
    }) => {
        return (
            <ContextMenu
                trigger={trigger}
                paddingY={6}
                paddingX={4.5}
                width={62.5}
                className={classNames.ClearFiltersConfirmation}
                {...clearFilterContextMenuProps}
            >
                <Typography
                    label
                    medium
                    className={classNames.ClearFiltersConfirmationTitle}
                >
                    Clear your filters
                </Typography>
                <Typography
                    paragraph
                    medium
                    tag="div"
                    marginTop={1.5}
                    marginBottom={6}
                    className={classNames.ClearFiltersConfirmationDescription}
                >
                    This will remove all your applied filters. Are you sure?
                </Typography>
                <Button
                    tertiary
                    marginRight={1}
                    className={classNames.ClearFiltersConfirmationCancelButton}
                    {...clearFilterCancelButtonProps}
                >
                    Cancel
                </Button>
                <Button
                    primary
                    danger
                    className={classNames.ClearFiltersConfirmationConfirmButton}
                    {...clearFilterConfirmButtonProps}
                >
                    Yes, Clear it
                </Button>
            </ContextMenu>
        );
    },
);

ConfirmationDialog.displayName = 'ConfirmationDialog';
