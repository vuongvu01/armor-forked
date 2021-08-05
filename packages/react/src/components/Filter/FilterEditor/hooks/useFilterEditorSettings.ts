import { useFilterEditorSettingsContext } from '../utils/FilterEditorSettingsContext';
import { FilterEditorPropsType } from '../type';

export const useFilterEditorSettings = ({
    enableClearAllButton,
    enableActions,
    enableHeader,
}: FilterEditorPropsType) => {
    const {
        enableClearAllButton: enableClearAllButtonFromContext,
        enableActions: enableActionsFromContext,
        enableHeader: enableHeaderFromContext,
    } = useFilterEditorSettingsContext();

    let reallyEnableClearFilterButton = true;
    if (enableClearAllButton !== undefined) {
        reallyEnableClearFilterButton = enableClearAllButton;
    } else if (enableClearAllButtonFromContext !== undefined) {
        reallyEnableClearFilterButton = enableClearAllButtonFromContext;
    }

    let reallyEnableActions = true;
    if (enableActions !== undefined) {
        reallyEnableActions = enableActions;
    } else if (enableActionsFromContext !== undefined) {
        reallyEnableActions = enableActionsFromContext;
    }

    let reallyEnableHeader = true;
    if (enableHeader !== undefined) {
        reallyEnableHeader = enableHeader;
    } else if (enableHeaderFromContext !== undefined) {
        reallyEnableHeader = enableHeaderFromContext;
    }

    return {
        showClearFilterButton: reallyEnableClearFilterButton,
        showActions: reallyEnableActions,
        showHeader: reallyEnableHeader,
    };
};
