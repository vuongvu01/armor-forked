import { css } from 'styled-components';
import {
    colorGrey50,
    colorGrey70,
    colorGrey80,
    colorGrey30,
    colorGrey60,
    colorGrey01,
} from '@deliveryhero/armor-system';
import { AccordionPropsType } from '@deliveryhero/armor';

export const getAccordionOverride = ({ disabled }: AccordionPropsType) => {
    let result = css`
        border-color: ${colorGrey60};
        background-color: ${colorGrey80};

        .AccordionHeader-Root:hover {
            background-color: ${colorGrey70};
        }
        .AccordionHeader-HeaderTitle,
        .ExpansionIndicator-Icon {
            color: ${colorGrey01};
        }
    `;

    if (disabled) {
        result = css`
            ${result};
            background-color: ${colorGrey50};

            .AccordionHeader-HeaderTitle,
            .ExpansionIndicator-Icon.ExpansionIndicator-Icon--disabled {
                color: ${colorGrey30};
            }
        `;
    }

    return result;
};
