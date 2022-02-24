import { TypographyRootPropsType } from '../type';

export const getTypographyName = ({
    pageTitle,
    sectionTitle,
    subSectionTitle,
    label,
    paragraph,
    small,
    large,
}: TypographyRootPropsType) => {
    let typographyName = 'body';

    if (pageTitle) {
        typographyName = 'pageTitle';
    } else if (sectionTitle) {
        typographyName = 'sectionTitle';
    } else if (subSectionTitle) {
        typographyName = 'subSectionTitle';
    } else if (label) {
        typographyName = 'labelMedium';

        if (large) {
            typographyName = 'labelLarge';
        } else if (small) {
            typographyName = 'labelSmall';
        }
    } else if (paragraph) {
        typographyName = 'paragraphMedium';

        if (large) {
            typographyName = 'paragraphLarge';
        } else if (small) {
            typographyName = 'paragraphSmall';
        }
    }

    return typographyName;
};
