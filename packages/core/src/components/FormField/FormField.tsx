import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import { getCompatiblePropValue } from '@deliveryhero/armor-system';

import { useFormFieldClassNames } from './hooks/useFormFieldClassNames';
import { FormFieldRoot } from './style';
import { FormFieldPropsType } from './type';
import { FORM_FIELD_CLASS_PREFIX } from './constants';

/**
 * # FormField
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
export const FormField = forwardRef<HTMLDivElement, FormFieldPropsType>(
    function FormField(
        { className, autoMargin, enableVerticalOuterSpacing, ...restProps },
        ref,
    ) {
        const classNameComponents = useFormFieldClassNames(
            FORM_FIELD_CLASS_PREFIX,
            className,
        );

        return (
            <FormFieldRoot
                {...restProps}
                enableVerticalOuterSpacing={getCompatiblePropValue(
                    enableVerticalOuterSpacing,
                    autoMargin,
                )}
                className={classNameComponents.Root}
                ref={ref}
            />
        );
    },
);

FormField.defaultProps = {
    enableVerticalOuterSpacing: false,
};

/** Support of prop-types is here for project that don't use TypeScript */
FormField.propTypes = {
    autoMargin: PropTypes.bool,
};

export const MemoizedFormField = memo(FormField);
