import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

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
 * # ContentSwitcher
 *
 * These are used to display mutually related group of information or tasks in one view.
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/50aa27-content-switcher/b/527bb6)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { ContentSwitcher, ContentSwitcherControl, Typography } from '@deliveryhero/armor';
 *
 * <ContentSwitcher
 *   marginBottom={4}
 *   onSwitchNameChange={(switchName: string) => {
 *      console.log('On switch change 2:', switchName);
 *   }}
 *   width={75}
 * >
 *   <ContentSwitcherControl switchName="1">
 *      <Typography>Option 1</Typography>
 *   </ContentSwitcherControl>
 *   <ContentSwitcherControl switchName="2">
 *      <Typography>Option 2</Typography>
 *   </ContentSwitcherControl>
 *   <ContentSwitcherControl switchName="3">
 *      <Typography>Option 3</Typography>
 *   </ContentSwitcherControl>
 * </ContentSwitcher>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const ContentSwitcher = forwardRef<
    HTMLDivElement,
    ContentSwitcherPropsType
>(function ContentSwitcher({ className, children, ...props }, ref) {
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

export const MemoizedContentSwitcher = memo(ContentSwitcher);
