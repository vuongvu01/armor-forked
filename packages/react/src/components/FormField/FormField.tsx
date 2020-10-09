import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { useFormFieldClassNames, useFormFieldStylesOverride } from './utils';
import { FormFieldRoot } from './style';
import { FormFieldPropsType } from './type';
import { formFieldDefaultTheme } from './theme';
import { FORM_FIELD_CLASS_PREFIX } from './constants';

export const FormField: FunctionComponent<FormFieldPropsType> = forwardRef(
    function FormField(
        { className, classNames, styles, autoMargin, ...restProps },
        ref,
    ) {
        const theme = useComponentTheme(
            FORM_FIELD_CLASS_PREFIX,
            formFieldDefaultTheme,
        );

        const classNameComponents = useFormFieldClassNames(
            FORM_FIELD_CLASS_PREFIX,
            className,
            classNames,
        );
        const stylesOverride = useFormFieldStylesOverride(styles);

        return (
            <FormFieldRoot
                {...restProps}
                autoMargin={autoMargin}
                theme={theme}
                className={classNameComponents.Root}
                styles={stylesOverride.Root}
                ref={ref}
            />
        );
    },
);

FormField.defaultProps = {
    autoMargin: false,
};

/** Support of prop-types is here for project that don't use TypeScript */
FormField.propTypes = {
    /** Example description */
    autoMargin: PropTypes.bool,
};
