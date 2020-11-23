import React, { FunctionComponent, forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';

import { useTextInputClassNames } from './utils/useTextInputClassNames';
import { useEvents } from './utils/useEvents';
import {
    TextInputRoot,
    TextInputInput,
    TextInputLabel,
    TextInputLabelBackground,
} from './style';
import { TextInputContainerPropsType, TextInputPropsType } from './type';
import { textInputDefaultTheme } from './theme';
import {
    textInputInput,
    textInputLabel,
    textInputLabelBackground,
    textInputRoot,
    TEXT_INPUT_CLASS_PREFIX,
} from './constants';
import { useInternalRef } from '../../utils';

export const TextInput: FunctionComponent<TextInputPropsType> = forwardRef(
    function TextInput(
        {
            className,
            label,
            before,
            after,
            disableLabelEffect,
            multiline,
            error,
            large,
            onMouseOut,
            onMouseOver,
            outline,

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
        const theme = useComponentTheme(
            TEXT_INPUT_CLASS_PREFIX,
            textInputDefaultTheme,
        );

        const classNameComponents = useTextInputClassNames(
            TEXT_INPUT_CLASS_PREFIX,
            className,
            disabled,
            large,
            error,
        );

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
        const isOutlined = isMouseInside || isFocused || outline;

        // Effects to control external value assignment, enabled and disabled state
        useEffect(() => {
            const node = internalInputRef.current as any;

            if (value && node && node.focus && !disabled) {
                node.focus();
            }
        }, [value, disabled]);

        useInternalRef(ref, internalInputRef);

        return (
            <TextInputRoot
                data-testid={textInputRoot}
                {...restProps}
                className={classNameComponents.Root}
                theme={theme}
                multiline={multiline}
                disabled={disabled}
                outlined={isOutlined}
                error={error}
                onMouseOver={onInputMouseOver}
                onMouseOut={onInputMouseOut}
            >
                {before}
                <TextInputInput
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
                    tabIndex={tabIndex}
                    theme={theme}
                    type={multiline ? undefined : type}
                    value={value}
                >
                    {(forwardedProps: TextInputContainerPropsType) => (
                        // @ts-ignore
                        <Tag
                            {...forwardedProps}
                            ref={internalInputRef}
                            data-testid={textInputInput}
                        />
                    )}
                </TextInputInput>
                {after}
                {!!label && (
                    <TextInputLabel
                        className={classNameComponents.Label}
                        disabled={disabled}
                        error={error}
                        inside={isLabelInside}
                        large={large}
                        outlined={isOutlined}
                        theme={theme}
                        value={value}
                        data-testid={textInputLabel}
                    >
                        <TextInputLabelBackground
                            className={classNameComponents.LabelBackground}
                            theme={theme}
                            disabled={disabled}
                            data-testid={textInputLabelBackground}
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
    large: false, // default is medium (small in design)
    outline: false,
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
    outline: PropTypes.bool,
};
