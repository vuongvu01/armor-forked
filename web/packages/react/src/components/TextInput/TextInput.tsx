import React, { FunctionComponent, forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';

import {
    useEvents,
    useTextInputClassNames,
    useTextInputStylesOverride,
} from './utils';
import {
    TextInputRoot,
    TextInputContainer,
    TextInputLabel,
    TextInputLabelBackground,
} from './style';
import { TextInputContainerPropsType, TextInputPropsType } from './type';
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
            onClick,
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

        // NOTE (nmelnikov 2020-07-24): being used by Select. Please no clean up here :)
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

        const internalInputRef = useRef(null);
        const Tag = multiline ? 'textarea' : 'input';
        const isOutlined = isMouseInside || isFocused;

        // Effects to control external value assignment, enabled and disabled state
        useEffect(() => {
            const node = internalInputRef.current as any;

            if (value && node && node.focus && !disabled) {
                node.focus();
            }
        }, [value, disabled]);
        useEffect(() => {
            if (ref && internalInputRef) {
                Object.assign(ref, internalInputRef);
            }
        }, [internalInputRef]);

        return (
            <TextInputRoot
                className={classNameComponents.Root}
                styles={stylesOverride.Root}
                theme={theme}
                multiline={multiline}
                disabled={disabled}
                outlined={isOutlined}
                error={error}
                onMouseOver={onInputMouseOver}
                onMouseOut={onInputMouseOut}
                {...restProps}
            >
                {before}
                <TextInputContainer
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    className={classNameComponents.Input}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    large={large}
                    max={max}
                    maxLength={maxLength}
                    min={min}
                    minLength={minLength}
                    multiline={multiline}
                    name={name}
                    onBlur={onInputBlur}
                    onClick={onClick}
                    onChange={onChange}
                    onFocus={onInputFocus}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    rows={rows}
                    styles={stylesOverride.Input}
                    tabIndex={tabIndex}
                    theme={theme}
                    type={multiline ? undefined : type}
                    value={value}
                >
                    {(forwardedProps: TextInputContainerPropsType) => (
                        // @ts-ignore
                        <Tag {...forwardedProps} ref={internalInputRef} />
                    )}
                </TextInputContainer>
                {after}
                {!!label && (
                    <TextInputLabel
                        className={classNameComponents.Label}
                        disabled={disabled}
                        error={error}
                        inside={isLabelInside}
                        large={large}
                        outlined={isOutlined}
                        styles={stylesOverride.Label}
                        theme={theme}
                        value={value}
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
