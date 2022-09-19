import { getChildrenWithIconProps } from '@deliveryhero/armor-system';
import { LinkPropsType } from '../type';
import { RefType } from '../../../type';
import { LINK_ICON_DEFAULT_SIZE } from '../constants';
import { getIconMargin } from '../utils';

export const useLink = <E extends HTMLAnchorElement>(
    props: LinkPropsType,
    ref: RefType<E>,
) => {
    const {
        tag: Tag = 'a',
        disabled,
        children: baseChildren,
        ...restProps
    } = props;

    const children = getChildrenWithIconProps(
        baseChildren,
        (childrenCount, iconIndex) => ({
            ...LINK_ICON_DEFAULT_SIZE,
            ...getIconMargin(childrenCount, iconIndex),
        }),
    );

    const rootPropsDisabled = disabled && {
        tabIndex: -1,
        onClick: (event: React.SyntheticEvent) => event.preventDefault(),
    };

    return {
        rootProps: {
            disabled,
            ...restProps,
            ...rootPropsDisabled,
        },
        Tag,
        tagProps: {
            ref,
        },
        children,
    };
};
