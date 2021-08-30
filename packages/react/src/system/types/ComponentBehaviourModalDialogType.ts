export type ComponentBehaviourModalDialogType = Partial<{
    /**
     * Being set to true, enables semi-transparent backdrop under the dialog window. If a user clicks on a backdrop, the #COMPONENT_NAME# gets closed
     */
    enableBackdrop: boolean;
    /**
     * Being set to true, enables the #COMPONENT_NAME# close button
     */
    enableCloseButton: boolean;
    /**
     * Being set to true, enables closing the #COMPONENT_NAME# by pressing the Esc button
     */
    enableCloseByEscape: boolean;
    /**
     * Being set to true, enables closing the #COMPONENT_NAME# by clicking at the backdrop
     */
    enableCloseOnBackdropClick: boolean;
    /**
     * Being set to true, enables blocking window vertical scroll when the #COMPONENT_NAME# is open
     */
    enableWindowScrollBlock: boolean;
    /**
     * Being set to true, enables the transition effects
     */
    enableEffects: boolean;
}>;
