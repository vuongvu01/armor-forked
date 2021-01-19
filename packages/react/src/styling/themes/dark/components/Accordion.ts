import { css } from 'styled-components';
import { colorGrey50, colorGrey60, colorGrey70 } from '../../../../tokens';
import { AccordionPropsType } from '../../../../components/Accordion/type';

export const getAccordionOverride = ({ disabled }: AccordionPropsType) => {
    let result = css`
        border-top-color: ${colorGrey70};
        border-bottom-color: ${colorGrey70};
    `;

    if (disabled) {
        result = css`
            ${result};

            .AccordionHeader-Root {
                background: ${colorGrey70};
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
                    background: ${colorGrey60};
                }
            }
        `;
    }

    return result;
};
