import { Ref } from 'react';

import { TypographyPropsType } from '../type';
import { getTagName } from '../utils/getTagName';

export const useTypography = (
    props: TypographyPropsType,
    ref: Ref<unknown>,
) => {
    const Tag = getTagName(props);

    return {
        rootProps: props,
        tagProps: {
            ref,
        },
        Tag,
    };
};
