import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useFormFieldMessageClassNames } from './hooks/useFormFieldMessageClassNames';
import { FormFieldMessageRoot, FormFieldMessageFakeChildren } from './style';
import { FormFieldMessagePropsType } from './type';
import { FORM_FIELD_MESSAGE_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const FormFieldMessage = forwardRef<
    HTMLDivElement,
    FormFieldMessagePropsType
>(function FormFieldMessage(
    { className, error, oneLine, children, ...restProps },
    ref,
) {
    const theme = useComponentTheme(FORM_FIELD_MESSAGE_CLASS_PREFIX);

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
});

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
