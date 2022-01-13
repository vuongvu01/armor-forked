import { css } from 'styled-components';
import { colorGrey50, color } from '@deliveryhero/armor-system';
import { AccordionPropsType } from '@deliveryhero/armor';

export const getAccordionOverride = ({ disabled }: AccordionPropsType) => {
    let result = css`
        border-top-color: ${color('neutral.02')};
        border-bottom-color: ${color('neutral.02')};

        .AccordionHeader-HeaderTitle,
        .ExpansionIndicator-Icon {
            color: ${color('neutral.06')};
        }
    `;

    if (disabled) {
        result = css`
            ${result};

            .AccordionHeader-Root {
                background: ${color('neutral.02')};
            }

            .AccordionHeader-HeaderTitle {
                color: ${colorGrey50};
            }

            .ExpansionIndicator-Icon {
                color: ${colorGrey50};
            }
        `;
    } else {
        result = css`
            ${result};

            .AccordionHeader-Root {
                &:hover {
                    background: ${color('neutral.03')};
                }
            }
        `;
    }

    return result;
};