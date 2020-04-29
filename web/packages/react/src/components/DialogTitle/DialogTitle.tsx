import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../styling';

import {
    useDialogTitleClassNames,
    useDialogTitleStylesOverride,
} from './utils';
import {
    DialogTitleRoot,
    DialogTitleText,
    DialogTitleDescription,
} from './style';
import { DialogTitlePropsType } from './type';
import { useThemeOverride } from '../../utils/hooks';
import { dialogTitleDefaultTheme } from './theme';

const CLASS_PREFIX = 'DialogTitle';

export const DialogTitle: FunctionComponent<DialogTitlePropsType> = ({
    className,
    classNames,
    styles,
    children,
    description,
    ...restProps
}) => {
    const theme = useTheme();
    useThemeOverride(CLASS_PREFIX, theme, dialogTitleDefaultTheme);

    const classNameComponents = useDialogTitleClassNames(
        CLASS_PREFIX,
        className,
        classNames,
    );
    const stylesOverride = useDialogTitleStylesOverride(styles);

    return (
        <DialogTitleRoot
            theme={theme}
            {...restProps}
            className={classNameComponents.Root}
            styles={stylesOverride.Root}
        >
            <DialogTitleText
                theme={theme}
                className={classNameComponents.Text}
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
