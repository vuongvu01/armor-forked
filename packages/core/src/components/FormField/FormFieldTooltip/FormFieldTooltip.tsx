import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useFormFieldTooltipClassNames } from './hooks/useFormFieldTooltipClassNames';
import { FormFieldTooltipRoot, FormFieldTooltipIndicator } from './style';
import { FormFieldTooltipPropsType } from './type';
import { formFieldTooltipDefaultTheme } from './theme';
import { FORM_FIELD_TOOLTIP_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const FormFieldTooltip = forwardRef<
    HTMLDivElement,
    FormFieldTooltipPropsType
>(function FormFieldTooltip(
    { className, children, visible, ...restProps },
    ref,
) {
    const theme = useComponentTheme(
        FORM_FIELD_TOOLTIP_CLASS_PREFIX,
        formFieldTooltipDefaultTheme,
    );

    const classNameComponents = useFormFieldTooltipClassNames(
        FORM_FIELD_TOOLTIP_CLASS_PREFIX,
        className,
        visible,
    );

    return (
        <FormFieldTooltipRoot
            {...restProps}
            theme={theme}
            align="top-end"
            className={classNameComponents.Root}
            ref={ref}
            content={children}
            error
        >
            <FormFieldTooltipIndicator
                theme={theme}
                visible={visible}
                className={classNameComponents.Indicator}
            />
        </FormFieldTooltipRoot>
    );
});

FormFieldTooltip.defaultProps = {
    visible: false,
};

/** Support of prop-types is here for project that don't use TypeScript */
FormFieldTooltip.propTypes = {
    /** Example description */
    visible: PropTypes.bool,
};
