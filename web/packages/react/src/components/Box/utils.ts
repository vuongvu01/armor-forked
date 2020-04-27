import { useMemo } from 'react';
import { BoxStyleOverrideType, BoxStyleOverrideSafeType } from './type';
import { returnEmptyString } from '../../utils';

export const useStyleOverrideBox = (
    styles?: BoxStyleOverrideType,
): BoxStyleOverrideSafeType => {
    return useMemo(() => {
        const { Root } = styles || {};
        return {
            Root: Root || returnEmptyString,
        };
    }, [styles]);
};
