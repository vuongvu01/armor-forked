import { LinkPropsType } from '../type';
import { ReferenceType } from '../../../type';

export const useLink = (
    {
        tag: Tag = 'a',
        to,
        href,
        target,
        rel,
        children,
        ...restProps
    }: LinkPropsType,
    ref: ReferenceType,
) => {
    // put all your component logic here

    return {
        rootProps: { ...restProps, ref },
        Tag,
        tagProps: { to, href, target, rel, ref },
        children,
    };
};
