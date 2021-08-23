export type ComponentBehaviourOpenStateType = {
    /**
     * @armor-docs-group open_close_state
     */
    open?: boolean;
    /**
     * @armor-docs-group open_close_state
     */
    defaultOpen?: boolean;
    /**
     * @armor-docs-group open_close_state
     */
    onOpenChange?: (state: boolean) => void;
};
