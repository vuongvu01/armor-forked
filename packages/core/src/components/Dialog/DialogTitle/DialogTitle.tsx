import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useDialogTitleClassNames } from './utils/useDialogTitleClassName';
import {
    DialogTitleDescription,
    DialogTitleRoot,
    DialogTitleText,
} from './style';
import { DialogTitlePropsType } from './type';
import { DIALOG_TITLE_CLASS_PREFIX, dialogTitleText } from './constants';

const CLASS_PREFIX = 'DialogTitle';

/**
 * @armor-docs-component
 */
export const DialogTitle: FunctionComponent<DialogTitlePropsType> = ({
    className,
    children,
    description,
    ...restProps
}) => {
    const classNameComponents = useDialogTitleClassNames(
        CLASS_PREFIX,
        className,
    );

    return (
        <DialogTitleRoot {...restProps} className={classNameComponents.Root}>
            <DialogTitleText
                className={classNameComponents.Text}
                data-testid={dialogTitleText}
                subSectionTitle
            >
                {children}
            </DialogTitleText>
            {!!description && (
                <DialogTitleDescription
                    paragraph
                    large
                    className={classNameComponents.Description}
                >
                    {description}
                </DialogTitleDescription>
            )}
        </DialogTitleRoot>
    );
};

DialogTitle.defaultProps = {};

/** Support of prop-types is here for project that don't use TypeScript */
DialogTitle.propTypes = {
    /** A value of brief description displayed above the title. Can be any valid ReactNode. */
    description: PropTypes.node,
};
