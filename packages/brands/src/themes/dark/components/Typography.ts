import { css } from 'styled-components';
import { colorGrey00 } from '@deliveryhero/armor-system';
import { TypographyPropsType } from '@deliveryhero/armor';

export const getTypographyOverride = ({
    pageTitle,
    sectionTitle,
    subSectionTitle,
}: TypographyPropsType) => {
    if (pageTitle || sectionTitle || subSectionTitle) {
        return css`
            color: ${colorGrey00};
        `;
    }

    return {};
};
