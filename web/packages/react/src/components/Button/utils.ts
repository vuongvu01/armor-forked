import { useMemo } from 'react';
import {
    AttributesOverrideButton,
    AttributesOverrideSafeButton,
    StylesOverrideButton,
    StylesOverrideSafeButton,
} from './type';
import { returnEmptyString } from '../../utils';

export const useStylesOverrideButton = (
    styles?: StylesOverrideButton,
): StylesOverrideSafeButton => {
    return useMemo(() => {
        const { root } = styles || {};
        return {
            root: root || returnEmptyString,
        };
    }, [styles]);
};

export const useAttributesOverrideButton = (
    attributes?: AttributesOverrideButton,
): AttributesOverrideSafeButton => {
    return useMemo(() => {
        const { root } = attributes || {};
        return {
            root: root || {},
        };
    }, [attributes]);
};
