import { useMemo } from 'react';
import { StyleOverrideButtonType, StyleOverrideSafeButtonType } from './type';
import { returnEmptyString } from '../../utils';

export const useStylesOverrideButton = (
    styles?: StyleOverrideButtonType,
): StyleOverrideSafeButtonType => {
    return useMemo(() => {
        const { root } = styles || {};
        return {
            root: root || returnEmptyString,
        };
    }, [styles]);
};
