import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';

import { useTextInputClassNames } from './utils/useTextInputClassNames';
import {
    TextInputRoot,
    TextInputInput,
    TextInputLabel,
    TextInputLabelBackground,
    TextInputInnerContainer,
} from './style';
import { TextInputInputPropsType, TextInputPropsType } from './type';
import { textInputDefaultTheme } from './theme';
import {
    textInputInput,
    textInputLabel,
    textInputLabelBackground,
    textInputRoot,
    TEXT_INPUT_CLASS_PREFIX,
} from './constants';
import { useTextInput } from './utils/useTextInput';

export const TextInput: FunctionComponent<TextInputPropsType> = forwardRef(
    function TextInput({ className, ...restProps }, ref) {
        const theme = useComponentTheme(
            TEXT_INPUT_CLASS_PREFIX,
            textInputDefaultTheme,
        );

        const {
            rootProps,
            innerContainerProps,
            inputProps,
            inputLabelProps,
            inputLabelBackgroundProps,

            Tag,
            before,
            after,
            label,

            disabled,
            large,
            error,

            internalInputRef,
        } = useTextInput(restProps, ref);

        const classNameComponents = useTextInputClassNames(
            TEXT_INPUT_CLASS_PREFIX,
            className,
            disabled,
            large,
            error,
        );

        return (
            <TextInputRoot
                data-testid={textInputRoot}
                {...rootProps}
                className={classNameComponents.Root}
                theme={theme}
            >
                <TextInputInnerContainer
                    {...innerContainerProps}
                    className={classNameComponents.InnerContainer}
                    theme={theme}
                >
                    {before}
                    <TextInputInput
                        data-testid={textInputInput}
                        {...inputProps}
                        theme={theme}
                        className={classNameComponents.Input}
                    >
                        {(forwardedProps: TextInputInputPropsType) => (
                            <Tag
                                {...forwardedProps}
                                // @ts-ignore
                                ref={internalInputRef}
                            />
                        )}
                    </TextInputInput>
                    {after}
                </TextInputInnerContainer>
                {!!label && (
                    <TextInputLabel
                        data-testid={textInputLabel}
                        {...inputLabelProps}
                        className={classNameComponents.Label}
                        theme={theme}
                    >
                        <TextInputLabelBackground
                            data-testid={textInputLabelBackground}
                            {...inputLabelBackgroundProps}
                            className={classNameComponents.LabelBackground}
                            theme={theme}
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
    enableFocusOnRootClick: false,
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
