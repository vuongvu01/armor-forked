import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useActionSheetClassNames } from './hooks/useActionSheetClassNames';
import { useActionSheet } from './hooks/useActionSheet';
import { ActionSheetRoot, ActionSheetLabelContainer } from './style';
import { ActionSheetPropsType } from './type';

import { ACTIONSHEET_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const ActionSheet = forwardRef<HTMLDivElement, ActionSheetPropsType>(
    function ActionSheet({ className, children, ...props }, ref) {
        const classNames = useActionSheetClassNames(
            ACTIONSHEET_CLASS_PREFIX,
            className,
        );

        const { rootProps, labelContainerProps, label } =
            useActionSheet<HTMLDivElement>(props, ref);

        return (
            <ActionSheetRoot {...rootProps} className={classNames.Root}>
                <ActionSheetLabelContainer
                    {...labelContainerProps}
                    className={classNames.LabelContainer}
                >
                    {label}
                </ActionSheetLabelContainer>
                {children}
            </ActionSheetRoot>
        );
    },
);

ActionSheet.defaultProps = {
    label: 'No items selected',
};

/** prop-types are required here for run-time checks */
ActionSheet.propTypes = {
    /** Example description */
    label: PropTypes.string,
};
