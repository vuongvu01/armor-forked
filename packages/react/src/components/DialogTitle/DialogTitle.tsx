import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import {
    useDialogTitleClassNames,
    useDialogTitleStylesOverride,
} from './utils';
import {
    DialogTitleDescription,
    DialogTitleRoot,
    DialogTitleText,
} from './style';
import { DialogTitlePropsType } from './type';
import { dialogTitleDefaultTheme } from './theme';
import { DIALOG_TITLE_CLASS_PREFIX, dialogTitleText } from './constants';

const CLASS_PREFIX = 'DialogTitle';

export const DialogTitle: FunctionComponent<DialogTitlePropsType> = ({
    className,
    classNames,
    styles,
    children,
    description,
    ...restProps
}) => {
    const theme = useComponentTheme(
        DIALOG_TITLE_CLASS_PREFIX,
        dialogTitleDefaultTheme,
    );

    const classNameComponents = useDialogTitleClassNames(
        CLASS_PREFIX,
        className,
        classNames,
    );
    const stylesOverride = useDialogTitleStylesOverride(styles);

    return (
        <DialogTitleRoot
            {...restProps}
            theme={theme}
            className={classNameComponents.Root}
            styles={stylesOverride.Root}
        >
            <DialogTitleText
                className={classNameComponents.Text}
                data-testid={dialogTitleText}
                subSectionTitle
                styles={stylesOverride.Text}
            >
                {children}
            </DialogTitleText>
            {!!description && (
                <DialogTitleDescription
                    theme={theme}
                    className={classNameComponents.Description}
                    styles={stylesOverride.Description}
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
