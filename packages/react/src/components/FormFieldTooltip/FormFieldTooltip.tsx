import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import {
    useFormFieldTooltipClassNames,
    useFormFieldTooltipStylesOverride,
} from './utils';
import { FormFieldTooltipRoot, FormFieldTooltipIndicator } from './style';
import { FormFieldTooltipPropsType } from './type';
import { formFieldTooltipDefaultTheme } from './theme';
import { FORM_FIELD_TOOLTIP_CLASS_PREFIX } from './constants';

export const FormFieldTooltip: FunctionComponent<FormFieldTooltipPropsType> = forwardRef(
    function FormFieldTooltip(
        { className, classNames, styles, children, visible, ...restProps },
        ref,
    ) {
        const theme = useComponentTheme(
            FORM_FIELD_TOOLTIP_CLASS_PREFIX,
            formFieldTooltipDefaultTheme,
        );

        const classNameComponents = useFormFieldTooltipClassNames(
            FORM_FIELD_TOOLTIP_CLASS_PREFIX,
            className,
            classNames,
            visible,
        );
        const stylesOverride = useFormFieldTooltipStylesOverride(styles);

        return (
            <FormFieldTooltipRoot
                {...restProps}
                theme={theme}
                align="top-end"
                className={classNameComponents.Root}
                tooltipStyles={stylesOverride.Root}
                ref={ref}
                content={children}
                error
            >
                <FormFieldTooltipIndicator
                    theme={theme}
                    visible={visible}
                    className={classNameComponents.Indicator}
                    indicatorStyles={stylesOverride.Indicator}
                />
            </FormFieldTooltipRoot>
        );
    },
);

FormFieldTooltip.defaultProps = {
    visible: false,
};

/** Support of prop-types is here for project that don't use TypeScript */
FormFieldTooltip.propTypes = {
    /** Example description */
    visible: PropTypes.bool,
};
