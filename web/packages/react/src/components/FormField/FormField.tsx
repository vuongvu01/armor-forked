import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useThemeOverride } from 'src/utils/hooks';
import { useTheme } from 'src/styling';
import { useFormFieldClassNames, useFormFieldStylesOverride } from './utils';
import { FormFieldRoot } from './style';
import { FormFieldPropsType } from './type';
import { formFieldDefaultTheme } from './theme';

const CLASS_PREFIX = 'FormField';

export const FormField: FunctionComponent<FormFieldPropsType> = forwardRef(
    function FormField(
        { className, classNames, styles, autoMargin, ...restProps },
        ref,
    ) {
        const theme = useTheme();
        useThemeOverride(CLASS_PREFIX, theme, formFieldDefaultTheme);

        const classNameComponents = useFormFieldClassNames(
            CLASS_PREFIX,
            className,
            classNames,
        );
        const stylesOverride = useFormFieldStylesOverride(styles);

        return (
            <FormFieldRoot
                autoMargin={autoMargin}
                theme={theme}
                {...restProps}
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
