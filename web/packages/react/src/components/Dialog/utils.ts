import { useMemo } from 'react';
import {
    AttributeOverrideDialogType,
    StyleOverrideDialogType,
    StyleOverrideSafeDialogType,
} from './type';
import { makeClassName, returnEmptyString } from '../../utils';
import { ClassNamesType } from '../type';

export const useStylesOverrideDialog = (
    styles?: StyleOverrideDialogType,
): StyleOverrideSafeDialogType => {
    return useMemo(() => {
        const { root, closeButton, buttonPanel, buttonYes, buttonNo } =
            styles || {};
        return {
            root: root || returnEmptyString,
            closeButton: closeButton || returnEmptyString,
            buttonPanel: buttonPanel || returnEmptyString,
            buttonYes: buttonYes || {},
            buttonNo: buttonNo || {},
        };
    }, [styles]);
};

export const useAttributesOverrideDialog = (
    attributes?: AttributeOverrideDialogType,
): AttributeOverrideDialogType => {
    return useMemo(() => {
        return {
            ...attributes,
        };
    }, [attributes]);
};

export const useClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(
        () => ({
            classNameRoot: makeClassName(classPrefix, className, classNames),
            classNameCloseButton: makeClassName(
                classPrefix,
                undefined,
                classNames,
                'closeButton',
            ),
            classNameButtonPanel: makeClassName(
                classPrefix,
                undefined,
                classNames,
                'buttonPanel',
            ),
            classNameButtonYes: makeClassName(
                classPrefix,
                undefined,
                classNames,
                'buttonYes',
            ),
            classNameButtonNo: makeClassName(
                classPrefix,
                undefined,
                classNames,
                'buttonNo',
            ),
        }),
        [classPrefix, className, classNames],
    );
