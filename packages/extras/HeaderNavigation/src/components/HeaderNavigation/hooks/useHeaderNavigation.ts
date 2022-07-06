import { RefType } from '@deliveryhero/armor-system';
import { HEADER_NAVIGATION_ROOT } from '../constants';
import { HeaderNavigationPropsType } from '../type';

export const useHeaderNavigation = <E extends HTMLDivElement>(
    { selector, title, profile, ...restProps }: HeaderNavigationPropsType,
    ref: RefType<E>,
) => {
    return {
        rootProps: {
            'data-testid': HEADER_NAVIGATION_ROOT,
            ref,
            ...restProps,
        },
        selector,
        title,
        profile,
    };
};
