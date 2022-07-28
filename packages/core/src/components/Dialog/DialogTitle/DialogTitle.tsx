import React, { FC, memo } from 'react';
import PropTypes from 'prop-types';

import { useDialogTitleClassNames } from './utils/useDialogTitleClassName';
import {
    DialogTitleDescription,
    DialogTitleRoot,
    DialogTitleText,
} from './style';
import { DialogTitlePropsType } from './type';
import {
    dialogTitleText,
    DIALOG_TITLE_CLASS_PREFIX as CLASS_PREFIX,
} from './constants';

/**
 * # COMPONENT
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/451847-dialog/b/09d7b1)
 *
 * @armor-docs-component
 */
export const DialogTitle: FC<React.PropsWithChildren<DialogTitlePropsType>> = ({
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

export const MemoizedDialogTitle = memo(DialogTitle);
