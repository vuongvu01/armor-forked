import { useCallback, useMemo } from 'react';
import {
    useControlledState,
    useRootRef,
    eventBus,
    SCALE_SMALL,
} from '@deliveryhero/armor-system';

import { FilterLayoutPropsType } from '../type';
import { RefType } from '../../../../type';
import { FILTER_LAYOUT_FILTER_EDITOR_POSITION_SIDE_SHEET } from '../constants';
import {
    FILTER_EDITOR_APPLY_FILTER_EVENT,
    FILTER_EDITOR_CLEAR_FILTER_EVENT,
} from '../../FilterEditor/constants';

export const useFilterLayout = <E extends HTMLElement>(
    {
        filterEditor,
        filterOpen,
        defaultFilterOpen,
        onFilterOpenChange,
        filterEditorPlacement,
        ...restProps
    }: FilterLayoutPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    const [reallyOpen, setReallyOpen] = useControlledState<boolean>(
        defaultFilterOpen,
        filterOpen,
        onFilterOpenChange,
    );

    const showSideSheet =
        filterEditorPlacement ===
        FILTER_LAYOUT_FILTER_EDITOR_POSITION_SIDE_SHEET;

    const onFilterEditorClose = useCallback(() => setReallyOpen(false), [
        setReallyOpen,
    ]);

    const onApplyFilterButtonClick = useCallback(
        // sometimes the Apply button is located outside of the FilterEditor component, not inside, like it is used to be
        // in order to update the internal state of the component, we have to use an event bus ever since.
        // nasty, but we need to keep backward compatibility :(
        () => eventBus.dispatch(FILTER_EDITOR_APPLY_FILTER_EVENT),
        [],
    );

    const onClearFilterButtonClick = useCallback(
        // same is for the "Clear all" button
        () => eventBus.dispatch(FILTER_EDITOR_CLEAR_FILTER_EVENT),
        [],
    );

    const filterEditorContextValue = useMemo(
        () => ({
            enableActions: !showSideSheet,
            enableHeader: !showSideSheet,
        }),
        [showSideSheet],
    );

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
        filterEditor,
        getLeftBarProps: () => ({
            open: reallyOpen,
        }),
        getSideSheetProps: () => ({
            open: reallyOpen,
            onClose: onFilterEditorClose,
            scale: SCALE_SMALL,
        }),
        showLeftBar: !!filterEditor && !showSideSheet,
        showSideSheet,
        editorSettingsContextProviderProps: {
            value: filterEditorContextValue,
        },
        getEditorHeaderProps: () => ({
            onClearFilterButtonClick,
            showClearFilterButton: true,
            marginRight: 10,
        }),
        getEditorActionProps: () => ({
            onApplyFilterButtonClick,
        }),
    };
};
