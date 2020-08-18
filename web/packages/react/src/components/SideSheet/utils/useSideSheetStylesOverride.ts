import { useMemo } from 'react';

import { SideSheetStylesPropsType } from '../type';
import { returnEmptyString } from '../../../utils';

const useSideSheetStylesOverride = (
    styles?: SideSheetStylesPropsType,
): Required<SideSheetStylesPropsType> =>
    useMemo(
        () => ({
            Body: returnEmptyString,
            CloseIcon: returnEmptyString,
            Root: returnEmptyString,
            Content: returnEmptyString,
            Header: returnEmptyString,
            HeaderContainer: returnEmptyString,
            Footer: returnEmptyString,
            Overlay: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export default useSideSheetStylesOverride;
