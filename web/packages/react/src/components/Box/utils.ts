import { useMemo } from 'react';
import { BoxStyleOverrideType, BoxStyleOverrideSafeType } from './type';
import { returnEmptyString } from '../../utils';

export const useStyleOverrideBox = (
    styles?: BoxStyleOverrideType,
): BoxStyleOverrideSafeType =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            ...styles,
        }),
        [styles],
    );
