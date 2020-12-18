import { css } from 'styled-components';
import { colorGrey00 } from '../../../../tokens';
import { TypographyPropsType } from '../../../../components/Typography/type';

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
