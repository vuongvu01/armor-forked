export type ComponentBehaviourOpenStateType = {
    /**
     * If defined, sets the value of the __open/close state__ of #COMPONENT_NAME# and enables the _controlled mode_
     */
    open?: boolean;
    /**
     * If defined, sets the default value of the __open/close state__ of #COMPONENT_NAME#. It does not have any effect if _open_ property is also defined.
     */
    defaultOpen?: boolean;
    /**
     * A callback that gets fired when there is a change in the value of the __open/close state__ of #COMPONENT_NAME#.
     * @param state
     */
    onOpenChange?: (state: boolean) => void;
};
