import { useMemo } from 'react';

import { returnEmptyString } from '../../utils';
import { BoxStylesPropsType } from './type';

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
