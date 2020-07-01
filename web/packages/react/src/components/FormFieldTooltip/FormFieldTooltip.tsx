import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useThemeOverride } from 'src/utils/hooks';
import { useTheme } from 'src/styling';

import {
    useFormFieldTooltipClassNames,
    useFormFieldTooltipStylesOverride,
} from './utils';
import { FormFieldTooltipRoot, FormFieldTooltipIndicator } from './style';
import { FormFieldTooltipPropsType } from './type';
import { formFieldTooltipDefaultTheme } from './theme';

const CLASS_PREFIX = 'FormFieldTooltip';

export const FormFieldTooltip: FunctionComponent<FormFieldTooltipPropsType> = forwardRef(
    function FormFieldTooltip(
        { className, classNames, styles, children, visible, ...restProps },
        ref,
    ) {
        const theme = useTheme();
        useThemeOverride(CLASS_PREFIX, theme, formFieldTooltipDefaultTheme);

        const classNameComponents = useFormFieldTooltipClassNames(
            CLASS_PREFIX,
            className,
            classNames,
            visible,
        );
        const stylesOverride = useFormFieldTooltipStylesOverride(styles);

        return (
            <FormFieldTooltipRoot
                theme={theme}
                {...restProps}
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
