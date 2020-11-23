import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../../utils/hooks';

import { useFormFieldMessageClassNames } from './utils/useFormFieldMessageClassNames';
import { FormFieldMessageRoot, FormFieldMessageFakeChildren } from './style';
import { FormFieldMessagePropsType } from './type';
import { formFieldMessageDefaultTheme } from './theme';
import { FORM_FIELD_MESSAGE_CLASS_PREFIX } from './constants';

export const FormFieldMessage: FunctionComponent<FormFieldMessagePropsType> = forwardRef(
    function FormFieldMessage(
        { className, error, oneLine, children, ...restProps },
        ref,
    ) {
        const theme = useComponentTheme(
            FORM_FIELD_MESSAGE_CLASS_PREFIX,
            formFieldMessageDefaultTheme,
        );

        const classNameComponents = useFormFieldMessageClassNames(
            FORM_FIELD_MESSAGE_CLASS_PREFIX,
            className,
            error,
        );

        return (
            <FormFieldMessageRoot
                {...restProps}
                theme={theme}
                error={error}
                oneLine={oneLine}
                className={classNameComponents.Root}
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
