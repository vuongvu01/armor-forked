import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useThemeOverride } from 'src/utils/hooks';
import { useTheme } from 'src/styling';

import {
    useEvents,
    useTextInputClassNames,
    useTextInputStylesOverride,
} from './utils';
import {
    TextInputRoot,
    TextInputInput,
    TextInputLabel,
    TextInputLabelBackground,
} from './style';
import { TextInputInputPropsType, TextInputPropsType } from './type';
import { TextInputDefaultTheme } from './theme';

const CLASS_PREFIX = 'TextInput';

export const TextInput: FunctionComponent<TextInputPropsType> = forwardRef(
    function TextInput(
        {
            className,
            classNames,
            styles,
            label,
            before,
            after,
            disableLabelEffect,
            multiline,
            error,
            large,
            onMouseOut,
            onMouseOver,

            // input-specific props need to be passed to Input component instead
            autoComplete,
            autoFocus,
            defaultValue,
            disabled,
            name,
            placeholder,
            readOnly,
            rows,
            value,
            onKeyDown,
            onKeyUp,
            onFocus,
            onBlur,
            onChange,
            type,
            max,
            maxLength,
            min,
            minLength,
            tabIndex,
            ...restProps
        },
        ref,
    ) {
        const theme = useTheme();
        useThemeOverride(CLASS_PREFIX, theme, TextInputDefaultTheme);

        const classNameComponents = useTextInputClassNames(
            CLASS_PREFIX,
            className,
            classNames,
            disabled,
            large,
            error,
        );
        const stylesOverride = useTextInputStylesOverride(styles);

        const {
            isMouseInside,
            isLabelInside,
            isFocused,
            onInputMouseOver,
            onInputMouseOut,
            onInputFocus,
            onInputBlur,
        } = useEvents({
            value,
            defaultValue,
            placeholder,
            disableLabelEffect,
            onFocus,
            onBlur,
            onMouseOut,
            onMouseOver,
            readOnly,
        });

        const Tag = multiline ? 'textarea' : 'input';

        return (
            <TextInputRoot
                className={classNameComponents.Root}
                styles={stylesOverride.Root}
                theme={theme}
                multiline={multiline}
                disabled={disabled}
                outlined={isMouseInside || isFocused}
                error={error}
                onMouseOver={onInputMouseOver}
                onMouseOut={onInputMouseOut}
                {...restProps}
            >
                {before}
                <TextInputInput
                    theme={theme}
                    className={classNameComponents.Input}
                    styles={stylesOverride.Input}
                    ref={ref}
                    multiline={multiline}
                    large={large}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    name={name}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    rows={rows}
                    value={value}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                    onFocus={onInputFocus}
                    onBlur={onInputBlur}
                    onChange={onChange}
                    type={multiline ? undefined : type}
                    max={max}
                    maxLength={maxLength}
                    min={min}
                    minLength={minLength}
                    tabIndex={tabIndex}
                >
                    {(forwardedProps: TextInputInputPropsType) => (
                        // @ts-ignore
                        <Tag {...forwardedProps} />
                    )}
                </TextInputInput>
                {after}
                {!!label && (
                    <TextInputLabel
                        className={classNameComponents.Label}
                        styles={stylesOverride.Label}
                        theme={theme}
                        inside={isLabelInside}
                        disabled={disabled}
                        large={large}
                        outlined={isMouseInside || isFocused}
                        error={error}
                    >
                        <TextInputLabelBackground
                            className={classNameComponents.LabelBackground}
                            styles={stylesOverride.LabelBackground}
                            theme={theme}
                            disabled={disabled}
                        >
                            {label}
                        </TextInputLabelBackground>
                    </TextInputLabel>
                )}
            </TextInputRoot>
        );
    },
);

TextInput.defaultProps = {
    label: '',
    disableLabelEffect: false,
    multiline: false,
    error: false,
    large: false,
};

/** Support of prop-types is here for project that don't use TypeScript */
TextInput.propTypes = {
    /** Label text */
    label: PropTypes.string,
    /** Controls displayed before the input field */
    before: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]),
    /** Controls displayed after the input field */
    after: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]),
    /** Don't animate label */
    disableLabelEffect: PropTypes.bool,
    /** Use textarea instead of input */
    multiline: PropTypes.bool,
    /** Set component state to "errored" */
    error: PropTypes.bool,
    /** Increase vertical size */
    large: PropTypes.bool,
};
