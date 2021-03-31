import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { getPropsBlocker } from '../../utils';
import { TabsRootPropsType } from './type';
import { TabLabel, TabRoot } from '../Tab/style';

const themeStyle = ({
    theme: {
        componentOverrides: { Tabs },
    },
    wide,
    removePaddingLeft,
    removePaddingRight,
}: TabsRootPropsType) => {
    if (wide) {
        return css`
            width: 100%;
            justify-content: space-evenly;

            ${Tabs.Root.base}
        `;
    }

    let result = Tabs.Root.base;

    if (removePaddingLeft) {
        result = css`
            ${result};

            ${TabRoot}:nth-child(1) {
                ${TabLabel} {
                    padding-left: 0;
                }
                &::after {
                    left: 0;
                }
            }
        `;
    }
    if (removePaddingRight) {
        result = css`
            ${result};

            ${TabRoot}:nth-last-child(1) {
                ${TabLabel} {
                    padding-right: 0;
                }
                &::after {
                    right: 0;
                }
            }
        `;
    }

    return result;
};

export const TabsRoot = styled.div.withConfig(getPropsBlocker())<
    TabsRootPropsType
>`
    align-items: start;
    display: flex;
    flex-wrap: wrap;
    width: fit-content;

    ${themeStyle}
    ${marginAttributes}
`;
