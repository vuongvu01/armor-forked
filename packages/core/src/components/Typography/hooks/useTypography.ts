import { Ref } from 'react';

import { TypographyPropsType } from '../type';
import { getTagName } from '../utils/getTagName';

export const useTypography = (
    { disabled, error, ...restProps }: TypographyPropsType,
    ref: Ref<unknown>,
) => {
    const Tag = getTagName(restProps);

    return {
        rootProps: {
            ...restProps,
            disabled,
            error,
            ref,
        },
        Tag,
    };
};
