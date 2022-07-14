import { CancelCircleFilledIcon, CancelIcon } from '@deliveryhero/armor-icons';
import { transition } from '@deliveryhero/armor-system';
import styled, { css } from 'styled-components';
import { ClearButtonIconPropsType } from '../type';

const iconDefaultStyle = css`
    border-radius: inherit;

    ${transition({
        color: true,
        background: true,
    })}
`;

export const ClearButtonCircleFilledIcon = styled(
    CancelCircleFilledIcon,
)<ClearButtonIconPropsType>`
    ${iconDefaultStyle}
`;

export const ClearButtonThinIcon = styled(CancelIcon)<ClearButtonIconPropsType>`
    ${iconDefaultStyle}
`;
