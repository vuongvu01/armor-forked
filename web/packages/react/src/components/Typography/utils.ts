import { useMemo } from 'react';
import { makeBEM, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';
import { TypographyPropsType } from './type';

export const useTypographyClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
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
        const rootClassNames = makeClassName(
            classPrefix,
            className,
            classNames,
        );
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
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`,
        };
    }, [classPrefix, className, classNames]);
};

export const getTagName = (props: TypographyPropsType) => {
    const { tag, paragraph, pageTitle, subSectionTitle, sectionTitle } = props;

    if (tag) {
        return tag;
    }

    if (paragraph) {
        return 'p';
    }

    if (pageTitle) {
        return 'h1';
    }

    if (subSectionTitle) {
        return 'h2';
    }

    if (sectionTitle) {
        return 'h3';
    }

    return 'div';
};
