import styled from 'styled-components';
import { LoginPagePropsType, LoginPageRootPropsType } from './type';
import {
    getComponentOverride,
    marginAttributes,
    pixelToRem,
    propsBlocker,
    reset,
    spacing,
    typography,
} from '../../system';
import defaultBackgroundImage from './images/default.jpg';
import { Card } from '../Card';
import { fontWeightBold, fontWeightMedium } from '../../tokens';
import { Divider } from '../Divider';
import { Link } from '../Link';

/** 👉 ROOT ELEMENT */
export const LoginPageRoot = styled.div.withConfig(propsBlocker)<
    LoginPageRootPropsType
>`
    ${reset};
    ${typography('paragraphMedium')};

    min-height: ${spacing(192)};
    min-width: ${spacing(256)};
    padding: 0;
    display: flex;
    flex-direction: column;
    background: url(${defaultBackgroundImage}) no-repeat center center fixed;
    background-size: cover;
    ${getComponentOverride('LoginPage')};
    ${marginAttributes};
`;

export const LoginPageWrapper = styled.div.withConfig(propsBlocker)<
    LoginPagePropsType
>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
`;

export const LoginPageContainer = styled(Card).withConfig(propsBlocker)<
    LoginPagePropsType
>`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${spacing(108)};
    padding: ${spacing(13)} ${spacing(22)};
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
    padding: ${spacing(12)} 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoginPageGreetingTitle = styled.div<LoginPagePropsType>`
    ${typography('sectionTitle')};
    margin: 0;
`;

export const LoginPageGreetingDescription = styled.div<LoginPagePropsType>`
    ${typography('paragraphLarge')};
    margin: ${spacing(2)} 0 ${spacing(1)} 0;
`;

export const LoginPageFormContainer = styled.div<LoginPagePropsType>`
    padding: ${spacing(4)} 0;
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
    padding: ${spacing(4)} 0;
`;

export const RegistrationOfferContainer = styled.div<LoginPagePropsType>`
    display: flex;
    justify-content: center;
`;

export const RegistrationOfferSupportiveText = styled.div<LoginPagePropsType>`
    ${typography('paragraphSmall')};
    margin: 0 ${spacing(2)} 0 0;
`;

export const RegistrationOfferLink = styled(Link)<LoginPagePropsType>`
    font-size: ${pixelToRem(12)};
    &:focus {
        border: none;
    }
`;
