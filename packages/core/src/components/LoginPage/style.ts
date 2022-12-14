import styled from 'styled-components';
import {
    getComponentOverride,
    marginProps,
    pixelToRem,
    propsBlocker,
    reset,
    spacing,
    typography,
    fontWeightBold,
    fontWeightMedium,
    focusWithin,
    borderRadius,
    token,
} from '@deliveryhero/armor-system';

import { LoginPagePropsType, LoginPageRootPropsType } from './type';
import { Card } from '../Card';
import { Divider } from '../Divider';
import { Link } from '../Link';
import { defaultBackground } from './images/background';

/** 👉 ROOT ELEMENT */
export const LoginPageRoot = styled.div.withConfig(
    propsBlocker,
)<LoginPageRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    min-height: ${spacing(192)};
    min-width: ${spacing(256)};
    height: 100%;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    background: ${defaultBackground};
    background-size: cover;
    ${getComponentOverride('LoginPage')};
    ${marginProps};
`;

export const LoginPageWrapper = styled.div.withConfig(
    propsBlocker,
)<LoginPagePropsType>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
`;

export const LoginPageContainer = styled(Card).withConfig(
    propsBlocker,
)<LoginPagePropsType>`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${spacing(108)};
    padding: ${spacing(13, 22)};
`;

export const LoginPageHeader = styled.div<LoginPagePropsType>`
    font-size: ${pixelToRem(44)};
    line-height: ${pixelToRem(52)};
    font-weight: ${fontWeightBold};
`;

export const LoginPageTitle = styled.div<LoginPagePropsType>`
    font-size: ${pixelToRem(20)};
    line-height: ${pixelToRem(28)};
    font-weight: ${fontWeightMedium};
`;

export const LoginPageGreetingContainer = styled.div<LoginPagePropsType>`
    padding: ${spacing(12, 0, 0, 0)};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoginPageGreetingTitle = styled.div<LoginPagePropsType>`
    ${typography('sectionTitle')};
    color: ${token('body.color')};
    margin: 0;
`;

export const LoginPageGreetingDescription = styled.div<LoginPagePropsType>`
    ${typography('paragraphLarge')};
    color: ${token('body.color')};
    margin: ${spacing(2, 0, 1)};
`;

export const LoginPageFormContainer = styled.div<LoginPagePropsType>`
    padding: ${spacing(4, 0)};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const SeparatorContainer = styled.div<LoginPagePropsType>`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const SeparatorDivider = styled(Divider)<LoginPagePropsType>`
    width: inherit;
`;

export const OAuth2SignInContainer = styled.div<LoginPagePropsType>`
    margin: ${spacing(4, 0)};
    border-radius: ${borderRadius('sharp')};
    ${focusWithin()};
`;

export const RegistrationOfferContainer = styled.div<LoginPagePropsType>`
    display: flex;
    justify-content: center;
`;

export const RegistrationOfferSupportiveText = styled.div<LoginPagePropsType>`
    ${typography('paragraphSmall')};
    color: ${token('body.color')};
    margin: ${spacing(0, 2, 0, 0)};
`;

export const RegistrationOfferLink = styled(Link)<LoginPagePropsType>`
    font-size: ${pixelToRem(12)};
    &:focus {
        border: none;
    }
`;
