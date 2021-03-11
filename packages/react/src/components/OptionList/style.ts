import styled, { css } from 'styled-components';
import { transitionDurationInSec } from '../../constants';
import {
    OptionListItemPropsType,
    OptionListPropsType,
    OptionListBeforeSectionContainerPropsType,
    OptionListSearchPropsType,
} from './type';
import { color, spacing } from '../../system';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';
import { elevation } from '../../system/mixins/elevation';
import { Search } from '../Search';
import { Typography } from '../Typography';
import { TypographyPropsType } from '../Typography/type';

const getOptionListStyle = ({
    isOptionListShown,
    enableAbsolutePositioning,
}: OptionListPropsType) => {
    let result = css`
        height: ${isOptionListShown ? 'auto' : '0'};
    ` as {};

    if (enableAbsolutePositioning !== false) {
        result = css`
            ${result};
            position: absolute;
            top: ${spacing(1)};
            left: 0;
            right: 0;
            z-index: 1024;
        `;
    }

    return result;
};

export const OptionListRoot = styled.div<OptionListPropsType>`
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 400px;
    overflow: auto;
    padding-bottom: 0;
    padding-top: 0;
    transition: ${transitionDurationInSec}s;
    box-shadow: ${elevation('large')};

    ${getOptionListStyle}
    ${getComponentOverride('OptionList')}
`;

export const OptionListBeforeSectionContainer = styled.div<
    OptionListBeforeSectionContainerPropsType
>`
    border-bottom: solid 1px ${color('neutral.02')};
`;

export const OptionListSearchContainer = styled.div<OptionListSearchPropsType>`
    padding: ${spacing(4)};
`;

export const OptionListSearch = styled(Search).attrs({
    enableSuggestions: false,
})<OptionListSearchPropsType>`
    width: 100%;
`;

const optionItemStyle = ({ isSelected }: OptionListItemPropsType) => {
    let result = css`
        background-color: ${color('neutral.00')};
        min-height: ${spacing(10)};
        padding: ${spacing(2)} ${spacing(4)};
        &:hover {
            background-color: ${color('primary.lightest')};
        }
    `;

    if (isSelected) {
        result = css`
            ${result};
            background-color: ${color('primary.lightest')};
            border-left-color: ${color('primary.main')};
        `;
    }
    return result;
};

export const OptionListItem = styled.div<OptionListItemPropsType>`
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    border-left: 2px solid transparent;

    ${optionItemStyle}
    ${getComponentOverride('OptionListItem')};
`;

export const OptionListItemTypography = styled(Typography)<TypographyPropsType>`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
