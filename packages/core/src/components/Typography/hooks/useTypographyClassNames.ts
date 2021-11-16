import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '@deliveryhero/armor-system';

import { TypographyPropsType } from '../type';

export const useTypographyClassNames = (
    classPrefix: string,
    className?: string,
    props?: TypographyPropsType,
) => {
    const {
        paragraph,
        label,
        pageTitle,
        subSectionTitle,
        sectionTitle,
        small,
        medium,
        large,
    } = props || {};

    return useMemo(() => {
        const rootClassNames = makeRootClassName(classPrefix, className);
        const rootStateClassNames: string[] = [];
        if (paragraph) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'paragraph'));
        }
        if (label) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'label'));
        }
        if (pageTitle) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'pageTitle'));
        }
        if (sectionTitle) {
            rootStateClassNames.push(
                makeBEM(classPrefix, 'Root', 'sectionTitle'),
            );
        }
        if (subSectionTitle) {
            rootStateClassNames.push(
                makeBEM(classPrefix, 'Root', 'subSectionTitle'),
            );
        }

        if (large) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'large'));
        }
        if (medium) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'medium'));
        }
        if (small) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'small'));
        }

        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`.trim(),
        };
    }, [classPrefix, className]);
};
