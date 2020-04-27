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
            <DialogTitleText theme={theme} className={classNameComponents.Text}>
                {children}
            </DialogTitleText>
            {!!description && (
                <DialogTitleDescription
                    theme={theme}
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
