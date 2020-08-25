import { useMemo } from 'react';

import { ClassNamesType } from '../../type';
import { makeBEM, makeClassName } from '../../../utils';
import { ClassBasedOnComponentType } from '../type';

const sideSheetClassGeneratorBasedOnComponent = ({
    component,
    classPrefix,
    className,
    classNames,
    disableOverlay,
    wide,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeClassName(
        classPrefix,
        className,
        classNames,
        component,
    );

    const stateClassNames: string[] = [];

    if (disableOverlay) {
        stateClassNames.push(makeBEM(classPrefix, component, 'disableOverlay'));
    }

    if (wide) {
        stateClassNames.push(makeBEM(classPrefix, component, 'wide'));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

const useSideSheetClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disableOverlay?: boolean,
    wide?: boolean,
) =>
    useMemo(
        () => ({
            Body: sideSheetClassGeneratorBasedOnComponent({
                component: 'Body',
                classPrefix,
                className,
                classNames,
                disableOverlay,
                wide,
            }),
            CloseIcon: sideSheetClassGeneratorBasedOnComponent({
                component: 'CloseIcon',
                classPrefix,
                className,
                classNames,
                disableOverlay,
                wide,
            }),
            Root: sideSheetClassGeneratorBasedOnComponent({
                component: 'Root',
                classPrefix,
                className,
                classNames,
                disableOverlay,
                wide,
            }),
            Content: sideSheetClassGeneratorBasedOnComponent({
                component: 'Content',
                classPrefix,
                className,
                classNames,
                disableOverlay,
                wide,
            }),
            Footer: sideSheetClassGeneratorBasedOnComponent({
                component: 'Footer',
                classPrefix,
                className,
                classNames,
                disableOverlay,
                wide,
            }),
            Header: sideSheetClassGeneratorBasedOnComponent({
                component: 'Header',
                classPrefix,
                className,
                classNames,
                disableOverlay,
                wide,
            }),
            HeaderContainer: sideSheetClassGeneratorBasedOnComponent({
                component: 'HeaderContainer',
                classPrefix,
                className,
                classNames,
                disableOverlay,
                wide,
            }),
            Overlay: sideSheetClassGeneratorBasedOnComponent({
                component: 'Overlay',
                classPrefix,
                className,
                classNames,
                disableOverlay,
                wide,
            }),
        }),
        [classPrefix, className, classNames, disableOverlay, wide],
    );

export default useSideSheetClassName;
