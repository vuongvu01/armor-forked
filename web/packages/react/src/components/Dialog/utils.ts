import { useMemo } from 'react';
import {
    AttributesOverrideDialog,
    AttributesOverrideSafeDialog,
    StylesOverrideDialog,
    StylesOverrideSafeDialog,
} from './type';
import { returnEmptyString } from '../../utils';
import { ClassNames } from '../type';
import { useClassName } from '../../utils/hooks';

export const useStylesOverrideDialog = (
    styles?: StylesOverrideDialog,
): StylesOverrideSafeDialog => {
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
    attributes?: AttributesOverrideDialog,
): AttributesOverrideSafeDialog => {
    return useMemo(() => {
        const { buttonYes, buttonNo } = attributes || {};
        return {
            buttonYes: buttonYes || {},
            buttonNo: buttonNo || {},
        };
    }, [attributes]);
};

export const useClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNames,
) => {
    return {
        classNameRoot: useClassName(classPrefix, className, classNames),
        classNameCloseButton: useClassName(
            classPrefix,
            undefined,
            classNames,
            'closeButton',
        ),
        classNameButtonPanel: useClassName(
            classPrefix,
            undefined,
            classNames,
            'buttonPanel',
        ),
        classNameButtonYes: useClassName(
            classPrefix,
            undefined,
            classNames,
            'buttonYes',
        ),
        classNameButtonNo: useClassName(
            classPrefix,
            undefined,
            classNames,
            'buttonNo',
        ),
    };
};
