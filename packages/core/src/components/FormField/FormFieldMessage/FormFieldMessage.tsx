import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useFormFieldMessageClassNames } from './hooks/useFormFieldMessageClassNames';
import { FormFieldMessageRoot, FormFieldMessageFakeChildren } from './style';
import { FormFieldMessagePropsType } from './type';
import { FORM_FIELD_MESSAGE_CLASS_PREFIX } from './constants';

/**
 * # FormFieldMessage
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/2454d4-form-field/b/8436ef)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { FormField, FormFieldMessage, TextInput } from '@deliveryhero/armor';
 *
 * <FormField>
 *     <TextInput label="First name" name="first_name" width={100} />
 *     <FormFieldMessage>
 *         Please specify your first name as it is written in your ID
 *     </FormFieldMessage>
 * </FormField>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const FormFieldMessage = forwardRef<
    HTMLDivElement,
    FormFieldMessagePropsType
>(function FormFieldMessage(
    { className, error, oneLine, children, ...restProps },
    ref,
) {
    const classNameComponents = useFormFieldMessageClassNames(
        FORM_FIELD_MESSAGE_CLASS_PREFIX,
        className,
        error,
    );

    return (
        <FormFieldMessageRoot
            {...restProps}
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

export const MemoizedFormFieldMessage = memo(FormFieldMessage);
