import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { getCompatiblePropValue } from '@deliveryhero/armor-system';

import { useFormFieldClassNames } from './hooks/useFormFieldClassNames';
import { FormFieldRoot } from './style';
import { FormFieldPropsType } from './type';
import { FORM_FIELD_CLASS_PREFIX } from './constants';

/**
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
