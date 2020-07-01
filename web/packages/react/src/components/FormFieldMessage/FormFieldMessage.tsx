import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useThemeOverride } from 'src/utils/hooks';
import { useTheme } from 'src/styling';

import {
    useFormFieldMessageClassNames,
    useFormFieldMessageStylesOverride,
} from './utils';
import { FormFieldMessageRoot, FormFieldMessageFakeChildren } from './style';
import { FormFieldMessagePropsType } from './type';
import { formFieldMessageDefaultTheme } from './theme';

const CLASS_PREFIX = 'FormFieldMessage';

export const FormFieldMessage: FunctionComponent<FormFieldMessagePropsType> = forwardRef(
    function FormFieldMessage(
        {
            className,
            classNames,
            styles,
            error,
            oneLine,
            children,
            ...restProps
        },
        ref,
    ) {
        const theme = useTheme();
        useThemeOverride(CLASS_PREFIX, theme, formFieldMessageDefaultTheme);

        const classNameComponents = useFormFieldMessageClassNames(
            CLASS_PREFIX,
            className,
            classNames,
            error,
        );
        const stylesOverride = useFormFieldMessageStylesOverride(styles);

        return (
            <FormFieldMessageRoot
                theme={theme}
                {...restProps}
                error={error}
                oneLine={oneLine}
                className={classNameComponents.Root}
                styles={stylesOverride.Root}
                ref={ref}
            >
                {children || (!!oneLine && <FormFieldMessageFakeChildren />)}
            </FormFieldMessageRoot>
        );
    },
);

FormFieldMessage.defaultProps = {
    error: false,
    oneLine: false,
};

/** Support of prop-types is here for project that don't use TypeScript */
FormFieldMessage.propTypes = {
    /** Show message as an error */
    error: PropTypes.bool,
    /** Reserve just one line for the message, cut the rest */
    oneLine: PropTypes.bool,
};
