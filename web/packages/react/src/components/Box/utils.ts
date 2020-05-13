import { useMemo } from 'react';
import { BoxStylesPropsType } from './type';
import { returnEmptyString } from '../../utils';

export const useStyleOverrideBox = (
    styles?: BoxStylesPropsType,
): Required<BoxStylesPropsType> =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            ...styles,
        }),
        [styles],
    );
