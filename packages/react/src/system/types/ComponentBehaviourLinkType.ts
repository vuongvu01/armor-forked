export type ComponentBehaviourLinkType = Partial<{
    /** If the underlying element is an *anchor* element, the component will forward to **.#COMPONENT_NAME#-Root** */
    href: string;
    /** If defined, the component will forward it to the underlying router link element **.#COMPONENT_NAME#-Root**. In some routers the *to* property is an equivalent for *href* in case of a normal *a* link. */
    to: string;
    /** If the underlying element is an *anchor* element, the component will forward to **.#COMPONENT_NAME#-Root** */
    rel: string;
    /** If the underlying element is an *anchor* element, the component will forward to **.#COMPONENT_NAME#-Root** */
    target: string;
}>;
