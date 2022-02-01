import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useContentSwitcherClassNames } from './hooks/useContentSwitcherClassNames';
import { useContentSwitcher } from './hooks/useContentSwitcher';
import { ContentSwitcherRoot } from './style';
import { ContentSwitcherPropsType } from './type';
import {
    ContentSwitcherRootTestId,
    CONTENTSWITCHER_CLASS_PREFIX,
} from './constants';
import { ContentSwitcherContext } from './ContentSwitcherContext';

/**
 * @armor-docs-component
 */
export const ContentSwitcher = forwardRef<
    HTMLDivElement,
    ContentSwitcherPropsType
>(function ContentSwitcher({ className, children, ...props }, ref) {
    const theme = useComponentTheme(CONTENTSWITCHER_CLASS_PREFIX);
    const classNames = useContentSwitcherClassNames(
        CONTENTSWITCHER_CLASS_PREFIX,
        className,
    );
    const {
        rootProps: { ...restProps },
        contextValue,
    } = useContentSwitcher<HTMLDivElement>({ ...props, children }, ref);

    return (
        <ContentSwitcherContext.Provider value={contextValue}>
            <ContentSwitcherRoot
                {...restProps}
                data-testid={ContentSwitcherRootTestId}
                theme={theme}
                className={classNames.Root}
            >
                {children}
            </ContentSwitcherRoot>
        </ContentSwitcherContext.Provider>
    );
});

ContentSwitcher.displayName = CONTENTSWITCHER_CLASS_PREFIX;

ContentSwitcher.propTypes = {
    /** For controlled usage: Switch with the name passed here will be shown as selected */
    switchName: PropTypes.string,
    /** Callback function which will be called after clicking
     * any of the unselected switch controls and receive first
     * argument as object containing name and index of selected switch control
     */
    onSwitchNameChange: PropTypes.func,
    /** Switch with the name passed here will be shown as selected for first load */
    defaultSwitchName: PropTypes.string,
};
