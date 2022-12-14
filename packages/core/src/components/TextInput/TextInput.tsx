import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useTextInputClassNames } from './hooks/useTextInputClassNames';
import {
    TextInputInnerContainer,
    TextInputInput,
    TextInputLabel,
    TextInputLabelBackground,
    TextInputRoot,
} from './style';
import { TextInputPropsType } from './type';
import {
    TEXT_INPUT_CLASS_PREFIX,
    textInputLabel,
    textInputLabelBackground,
    textInputRoot,
} from './constants';
import { useTextInput } from './hooks/useTextInput';

/**
 * # TextInput
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/83c7b3-text-input/b/31fc4f)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { useState } from 'react';
 * import { TextInput } from '@deliveryhero/armor';
 *
 * const [ value, setValue ] = useState('');
 *
 * <TextInput label="First name" name="first_name" value={value} onChange={(event) => setValue(event.target.value)} />
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputPropsType>(
    function TextInput({ className, ...restProps }, ref) {
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
            isLabelInside,
            disabled,
            outlined,
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
            isLabelInside,
            outlined,
        );

        return (
            <TextInputRoot
                data-testid={textInputRoot}
                {...rootProps}
                className={classNameComponents.Root}
            >
                <TextInputInnerContainer
                    {...innerContainerProps}
                    className={classNameComponents.InnerContainer}
                >
                    {before}
                    <TextInputInput
                        {...inputProps}
                        className={classNameComponents.Input}
                    >
                        {(forwardedProps) => (
                            // @ts-ignore
                            <Tag {...forwardedProps} ref={internalInputRef} />
                        )}
                    </TextInputInput>
                    {after}
                </TextInputInnerContainer>
                {!!label && (
                    <TextInputLabel
                        data-testid={textInputLabel}
                        {...inputLabelProps}
                        className={classNameComponents.Label}
                    >
                        <TextInputLabelBackground
                            data-testid={textInputLabelBackground}
                            {...inputLabelBackgroundProps}
                            className={classNameComponents.LabelBackground}
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
    outlined: false,
    enableFocusOnRootClick: false,
    onChange: () => {},
    type: 'text',
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
    outlined: PropTypes.bool,
};

export const MemoizedTextInput = memo(TextInput);
