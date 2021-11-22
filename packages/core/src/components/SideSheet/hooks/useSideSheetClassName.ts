import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

import { ClassBasedOnComponentType } from '../type';

const sideSheetClassGeneratorBasedOnComponent = ({
    component,
    classPrefix,
    disableOverlay,
    wide,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    const stateClassNames: string[] = [];

    if (disableOverlay) {
        stateClassNames.push(makeBEM(classPrefix, component, 'disableOverlay'));
    }

    if (wide) {
        stateClassNames.push(makeBEM(classPrefix, component, 'wide'));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

export const useSideSheetClassName = (
    classPrefix: string,
    className?: string,
    disableOverlay?: boolean,
    wide?: boolean,
) =>
    useMemo(
        () => ({
            Root: appendClassName(
                sideSheetClassGeneratorBasedOnComponent({
                    component: 'Root',
                    classPrefix,
                    disableOverlay,
                    wide,
                }),
                className,
            ),
            Window: sideSheetClassGeneratorBasedOnComponent({
                component: 'Window',
                classPrefix,
                disableOverlay,
                wide,
            }),
            Body: sideSheetClassGeneratorBasedOnComponent({
                component: 'Body',
                classPrefix,
                disableOverlay,
                wide,
            }),
            Content: sideSheetClassGeneratorBasedOnComponent({
                component: 'Content',
                classPrefix,
                disableOverlay,
                wide,
            }),
            Footer: sideSheetClassGeneratorBasedOnComponent({
                component: 'Footer',
                classPrefix,
                disableOverlay,
                wide,
            }),
            Header: sideSheetClassGeneratorBasedOnComponent({
                component: 'Header',
                classPrefix,
                disableOverlay,
                wide,
            }),
            HeaderContainer: sideSheetClassGeneratorBasedOnComponent({
                component: 'HeaderContainer',
                classPrefix,
                disableOverlay,
                wide,
            }),
            Backdrop: makeBEM(classPrefix, 'Backdrop'),
        }),
        [classPrefix, className, disableOverlay, wide],
    );
