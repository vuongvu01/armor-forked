import { useRootRef, useControlledState } from '@deliveryhero/armor-system';
import { useCallback, useMemo, Children } from 'react';
import { ContentSwitcherPropsType } from '../type';
import { RefType } from '../../../type';
import { ContentSwitcherControlPropsType } from '../ContentSwitcherControl/type';

export const useContentSwitcher = <E extends HTMLElement>(
    props: ContentSwitcherPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);
    const {
        onSwitchNameChange: onSwitchNameChangeCb,
        switchName: selectedSwitchNameProp,
        defaultSwitchName,
        children,
        ...restProps
    } = props;
    const [selectedSwitchName, setSelectedSwitchName] = useControlledState(
        defaultSwitchName,
        selectedSwitchNameProp,
        onSwitchNameChangeCb,
    );

    const contextValue = useMemo(() => {
        const childrenIndexMap: Record<string, number> = {};

        Children.map(
            children as React.ReactElement<ContentSwitcherControlPropsType>[],
            (
                child: React.ReactElement<ContentSwitcherControlPropsType>,
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
            ref: innerRef,
        },
        contextValue,
    };
};
