import React, { useContext } from 'react';

type FilterEditorSettingsContextValueType = {
    enableClearAllButton?: boolean;
    enableActions?: boolean;
    enableHeader?: boolean;
    filterEditorId?: string;
};

export const FilterEditorSettingsContext =
    React.createContext<FilterEditorSettingsContextValueType>({});

export const FilterEditorSettingsContextProvider =
    FilterEditorSettingsContext.Provider;

export const useFilterEditorSettingsContext = () =>
    useContext(FilterEditorSettingsContext);
