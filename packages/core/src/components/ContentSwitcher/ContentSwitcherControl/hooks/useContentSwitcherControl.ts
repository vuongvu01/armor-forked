import { useContext } from 'react';
import { useRootRef } from '@deliveryhero/armor-system';

import { ContentSwitcherControlPropsType } from '../type';
import { RefType } from '../../../../type';
import { ContentSwitcherContext } from '../../ContentSwitcherContext';

export const useContentSwitcherControl = <E extends HTMLElement>(
    { switchName, ...restProps }: ContentSwitcherControlPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    const {
        onSwitchNameChange,
        switchName: selectedSwitchName,
        childrenIndexMap,
    } = useContext(ContentSwitcherContext);

    const selected =
        !!switchName &&
        !!selectedSwitchName &&
        childrenIndexMap?.[switchName] ===
            childrenIndexMap?.[selectedSwitchName];

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
            switchName,
            afterSelected:
                !!switchName &&
                !!selectedSwitchName &&
                (childrenIndexMap?.[switchName] as number) - 1 ===
                    childrenIndexMap?.[selectedSwitchName],
            onClick: () => !!switchName && onSwitchNameChange?.(switchName),
            ...(selected && { selected, 'data-selected': selected }),
        },
    };
};
