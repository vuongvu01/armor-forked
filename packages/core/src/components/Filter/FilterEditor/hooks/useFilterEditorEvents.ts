import { useEffect } from 'react';
import { eventBus } from '@deliveryhero/armor-system';

import {
    FILTER_EDITOR_APPLY_FILTER_EVENT,
    FILTER_EDITOR_CLEAR_FILTER_EVENT,
} from '../constants';

export const useFilterEditorEvents = (
    onApplyFilterButtonClick: () => void,
    onClearFilterButtonClick: () => void,
) => {
    // sometimes the "Apply" button is located outside of the FilterEditor component, not inside, like it is used to be
    // in order to update the internal state of the component, we have to use an event bus ever since.
    // nasty, but we need to keep backward compatibility :(
    useEffect(() => {
        eventBus.on(FILTER_EDITOR_APPLY_FILTER_EVENT, onApplyFilterButtonClick);

        return () =>
            eventBus.off(
                FILTER_EDITOR_APPLY_FILTER_EVENT,
                onApplyFilterButtonClick,
            );
    }, [onApplyFilterButtonClick]);

    // same is for the "Clear all" button
    useEffect(() => {
        eventBus.on(FILTER_EDITOR_CLEAR_FILTER_EVENT, onClearFilterButtonClick);

        return () =>
            eventBus.off(
                FILTER_EDITOR_CLEAR_FILTER_EVENT,
                onClearFilterButtonClick,
            );
    }, [onClearFilterButtonClick]);

    return {};
};
