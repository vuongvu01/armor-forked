import { TypographyPropsType } from '../type';

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

    // todo: this is probably a mistake, subSectionTitle should be h3 and sectionTitle - h2
    if (subSectionTitle) {
        return 'h2';
    }

    if (sectionTitle) {
        return 'h3';
    }

    return 'div';
};
