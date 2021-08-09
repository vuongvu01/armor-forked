import React, { useContext } from 'react';

type FilterEditorSettingsContextValueType = {
    enableClearAllButton?: boolean;
    enableActions?: boolean;
    enableHeader?: boolean;
};

export const FilterEditorSettingsContext = React.createContext<
    FilterEditorSettingsContextValueType
>({
    // update: () => {},
});

export const FilterEditorSettingsContextProvider =
    FilterEditorSettingsContext.Provider;

export const useFilterEditorSettingsContext = () =>
    useContext(FilterEditorSettingsContext);
