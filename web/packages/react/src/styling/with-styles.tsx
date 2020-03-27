import React, { ComponentType, forwardRef, Ref } from 'react';

type OverrideAttributeFallbackType = { [k: string]: { [k: string]: any } };

export const withStyles = <
    S extends {},
    A extends {} = OverrideAttributeFallbackType
>(
    styles: S,
    attributes?: A,
) => <P extends { styles?: S; attributes?: A; ref?: Ref<unknown> }>(
    Component: ComponentType<P>,
) => {
    const WithStyles = forwardRef((props, ref) => (
        // @ts-ignore todo: tackle this
        <Component
            {...props}
            styles={styles}
            attributes={attributes}
            ref={ref}
        />
    ));

    WithStyles.displayName = `withStyles(${Component.displayName ||
        Component.name ||
        'Component'})`;

    return WithStyles as ComponentType<P>;
};
