import { useMemo } from 'react';
import { StyleOverrideBoxType, StyleOverrideSafeBoxType } from './type';
import { returnEmptyString } from '../../utils';

export const useStyleOverrideBox = (
    styles?: StyleOverrideBoxType,
): StyleOverrideSafeBoxType => {
    return useMemo(() => {
        const { root } = styles || {};
        return {
            root: root || returnEmptyString,
        };
    }, [styles]);
};
