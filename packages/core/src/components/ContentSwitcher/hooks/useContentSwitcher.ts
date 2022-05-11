import { useMemo, Children, ReactElement } from 'react';
import { useRootRef, useControlledState } from '@deliveryhero/armor-system';

import { ContentSwitcherPropsType } from '../type';
import { RefType } from '../../../type';
import { ContentSwitcherControlPropsType } from '../ContentSwitcherControl/type';

export const useContentSwitcher = <E extends HTMLElement>(
    {
        onSwitchNameChange: onSwitchNameChangeCb,
        switchName: selectedSwitchNameProp,
        defaultSwitchName,
        children,
        ...restProps
    }: ContentSwitcherPropsType,
    ref: RefType<E>,
) => {
    const [selectedSwitchName, setSelectedSwitchName] = useControlledState(
        defaultSwitchName,
        selectedSwitchNameProp,
        onSwitchNameChangeCb,
    );

    const contextValue = useMemo(() => {
        const childrenIndexMap: Record<string, number> = {};

        Children.map(
            children as ReactElement<ContentSwitcherControlPropsType>[],
            (
                child: ReactElement<ContentSwitcherControlPropsType>,
                index: number,
            ) => {
                childrenIndexMap[child?.props?.switchName as string] = index;
            },
        );
        return {
            switchName: selectedSwitchName,
            onSwitchNameChange: setSelectedSwitchName,
            childrenIndexMap,
        };
    }, [selectedSwitchName, setSelectedSwitchName, children]);

    return {
        rootProps: {
            ...restProps,
            ref,
        },
        contextValue,
    };
};
