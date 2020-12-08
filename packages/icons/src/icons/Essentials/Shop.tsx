import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const ShopIconShape = (
    <SVGIconGroup>
        <SVGIconPath 
            d="M18.8065414,11.0017014 C18.7120875,10.9406906 18.5874146,10.9566146 18.5113282,11.0394077 C17.6965237,11.9566159 16.561587,12.5272103 15.3393965,12.6341105 C14.1858447,12.721399 13.0424657,12.3651621 12.1426337,11.638111 C12.0588971,11.5715937 11.9403539,11.5715937 11.8566172,11.638111 C11.0598864,12.2907015 10.062199,12.6480627 9.03231963,12.6497448 C8.91184324,12.6497448 8.78952752,12.6442268 8.6644528,12.6341105 C7.43706284,12.5288525 6.29681881,11.9567554 5.47872603,11.0357291 C5.40355619,10.952972 5.27975167,10.9362837 5.18535223,10.9961834 C4.55139344,11.4154463 3.80091509,11.6231076 3.04160827,11.5893686 C2.97975474,11.5876388 2.91979635,11.6108145 2.87518621,11.6536955 C2.83057607,11.6965766 2.80504955,11.7555725 2.80433416,11.8174461 L2.80433416,20.6204994 C2.80433416,21.3823765 3.42195763,22 4.18383478,22 L19.8181752,22 C20.5800523,22 21.1976758,21.3823765 21.1976758,20.6204994 L21.1976758,11.8284821 C21.1976758,11.7651228 21.171332,11.704612 21.1252447,11.6611334 C21.0791574,11.6176548 21.0172248,11.5950311 20.953964,11.5985653 C20.1925019,11.6365638 19.4391819,11.4271828 18.8065414,11.0017014 Z M14.7600062,14.9774222 C14.7704049,14.7843948 14.9347939,14.6360337 15.127873,14.6454224 L18.0708077,14.6454224 C18.2638868,14.6360337 18.4282758,14.7843948 18.4386745,14.9774222 L18.4386745,19.8378627 C18.4386745,20.0918217 18.2328,20.2976962 17.978841,20.2976962 L15.2198397,20.2976962 C14.9658807,20.2976962 14.7600062,20.0918217 14.7600062,19.8378627 L14.7600062,14.9774222 Z M6.02316894,14.9516715 C6.0345115,14.7721976 6.18848794,14.6354665 6.3680441,14.6454224 L11.1926176,14.6454224 C11.3721738,14.6354665 11.5261502,14.7721976 11.5374928,14.9516715 L11.5374928,18.0178415 C11.5261502,18.1973154 11.3721738,18.3340465 11.1926176,18.3240907 L6.36620476,18.3240907 C6.18664861,18.3340465 6.03267217,18.1973154 6.02132961,18.0178415 L6.02316894,14.9516715 Z M21.003626,2 L18.1039157,2 C18.0316157,2.00028662 17.9635916,2.03429867 17.9199823,2.09196671 C17.8766522,2.1518073 17.8650097,2.22892322 17.8887136,2.2988918 L19.3215549,6.61029107 C19.3451804,6.68056383 19.3575946,6.75411807 19.3583416,6.82825217 C19.3583416,8.80645606 19.3583416,9.39136433 19.3583416,9.57897641 C19.3571916,9.65472226 19.3932799,9.72621148 19.4549067,9.77026716 C20.0476924,10.2361945 20.8445279,10.349176 21.5434706,10.0664 C22.441479,9.6718897 23.025625,8.78847683 23.0370099,7.80769761 L23.0370099,6.93769256 C23.0366721,6.90978244 23.0316995,6.88212239 23.0222953,6.85584219 L21.2896425,2.30992781 C21.2123904,2.10852072 21.0845567,2 21.003626,2 Z M17.934697,9.53023406 C17.9622925,9.49159615 17.9770871,9.44528243 17.97701,9.397802 L17.97701,6.97723824 C17.9772198,6.95251334 17.9731754,6.92793578 17.965046,6.90458454 L16.3822989,2.16094174 C16.3510405,2.06709117 16.2632571,2.00367867 16.1643378,2.00367867 L12.920672,2.00367867 C12.8596726,2.00367867 12.8011496,2.02780703 12.757891,2.07081437 C12.7152184,2.11429477 12.6911408,2.17267461 12.6907553,2.23359544 L12.6907553,10.185037 C13.2913786,10.9640015 14.2552307,11.3726971 15.2327151,11.2628868 C16.352901,11.1343813 17.3505372,10.4946445 17.934697,9.53023406 Z M11.3112547,10.1813583 L11.3112547,2.22991677 C11.3112547,2.10293724 11.2083174,2 11.0813379,2 L7.83399342,2 C7.73507419,2 7.64729078,2.06341251 7.61603233,2.15726307 L6.03328528,6.90458454 C6.02515584,6.92793578 6.02111143,6.95251334 6.02132123,6.97723824 L6.02132123,9.39228399 C6.02132123,9.43960954 6.0357725,9.48580809 6.06271463,9.52471605 C6.64896024,10.4956298 7.65465196,11.1374087 8.78217018,11.2601278 C9.75629225,11.3706242 10.7167869,10.9609296 11.3112547,10.1813583 Z M4.64366832,9.58725341 L4.64366832,6.82825217 C4.64382185,6.75421589 4.65561496,6.6806641 4.67861567,6.61029107 L6.11513565,2.30257047 C6.13883958,2.23260189 6.12719707,2.15548597 6.08386697,2.09564538 C6.04044618,2.03775099 5.97230154,2.00367867 5.89993355,2.00367867 L2.99838392,2.00367867 C2.91745321,2.00367867 2.78961949,2.11219938 2.71328712,2.31360647 L0.981554007,6.85584219 C0.971522157,6.88201508 0.965927347,6.9096783 0.965,6.93769256 L0.965,7.80769761 C0.976880025,8.78648689 1.56082584,9.66762263 2.45761967,10.0599623 C3.20898303,10.4181069 4.10740317,10.2238334 4.64366832,9.58725341 Z"
        />
    </SVGIconGroup>
);

export const ShopIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{ShopIconShape}</SVGIcon>;
};
