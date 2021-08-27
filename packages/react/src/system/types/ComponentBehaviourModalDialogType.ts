export type ComponentBehaviourModalDialogType = Partial<{
    /**
     * Being set to true, enables semi-transparent backdrop under the dialog window. If a user clicks on a backdrop, the #COMPONENT_NAME# gets closed
     * @armor-docs-group modal_dialog
     */
    enableBackdrop: boolean;
    /**
     * Being set to true, enables the #COMPONENT_NAME# close button
     * @armor-docs-group modal_dialog
     */
    enableCloseButton: boolean;
    /**
     * Being set to true, enables closing the #COMPONENT_NAME# by pressing the Esc button
     * @armor-docs-group modal_dialog
     */
    enableCloseByEscape: boolean;
    /**
     * Being set to true, enables closing the #COMPONENT_NAME# by clicking at the backdrop
     * @armor-docs-group modal_dialog
     */
    enableCloseOnBackdropClick: boolean;
    /**
     * Being set to true, enables blocking window vertical scroll when the #COMPONENT_NAME# is open
     * @armor-docs-group modal_dialog
     */
    enableWindowScrollBlock: boolean;
    /**
     * Being set to true, enables the transition effects
     * @armor-docs-group modal_dialog
     */
    enableEffects: boolean;
}>;
