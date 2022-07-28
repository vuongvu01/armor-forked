import React, { FunctionComponent } from 'react';
import { SVGIcon } from '../SVGIcon';
import { TextColorPropsType } from './type';

const TextColorIconShapeSmall: FunctionComponent<React.PropsWithChildren<TextColorPropsType>> = ({
    textColor,
}) => (
    <>
        <path
            d="M8 14.2923H9.5C9.63261 14.2923 9.75979 14.2385 9.85355 14.1427C9.94732 14.0469 10 13.917 10 13.7816C10.005 13.6689 9.97345 13.5578 9.91014 13.4654C9.84683 13.373 9.75536 13.3046 9.65 13.2709C9.63359 13.2659 9.6184 13.2574 9.60547 13.246C9.59253 13.2345 9.58214 13.2204 9.575 13.2045C9.5677 13.1876 9.56393 13.1693 9.56393 13.1509C9.56393 13.1324 9.5677 13.1141 9.575 13.0973L10.13 11.7899C10.1398 11.767 10.1558 11.7476 10.1763 11.734C10.1967 11.7204 10.2206 11.7132 10.245 11.7133H13.745C13.7694 11.7132 13.7933 11.7204 13.8137 11.734C13.8342 11.7476 13.8502 11.767 13.86 11.7899L14.415 13.0973C14.4223 13.1141 14.4261 13.1324 14.4261 13.1509C14.4261 13.1693 14.4223 13.1876 14.415 13.2045C14.4079 13.2204 14.3975 13.2345 14.3845 13.246C14.3716 13.2574 14.3564 13.2659 14.34 13.2709C14.2346 13.3046 14.1432 13.373 14.0799 13.4654C14.0165 13.5578 13.985 13.6689 13.99 13.7816C13.99 13.917 14.0427 14.0469 14.1364 14.1427C14.2302 14.2385 14.3574 14.2923 14.49 14.2923H15.99C16.1226 14.2923 16.2498 14.2385 16.3436 14.1427C16.4373 14.0469 16.49 13.917 16.49 13.7816C16.49 13.6461 16.4373 13.5162 16.3436 13.4205C16.2498 13.3247 16.1226 13.2709 15.99 13.2709H15.65C15.6256 13.271 15.6017 13.2638 15.5813 13.2502C15.5608 13.2365 15.5448 13.2171 15.535 13.1943L12.69 6.45813C12.6307 6.32177 12.534 6.20591 12.4115 6.1246C12.289 6.04328 12.1461 6 12 6C11.8539 6 11.711 6.04328 11.5885 6.1246C11.466 6.20591 11.3693 6.32177 11.31 6.45813L8.455 13.1943C8.44524 13.2171 8.42915 13.2365 8.40872 13.2502C8.38828 13.2638 8.3644 13.271 8.34 13.2709H8C7.86739 13.2709 7.74021 13.3247 7.64645 13.4205C7.55268 13.5162 7.5 13.6461 7.5 13.7816C7.5 13.917 7.55268 14.0469 7.64645 14.1427C7.74021 14.2385 7.86739 14.2923 8 14.2923ZM11.885 7.65317C11.8946 7.63014 11.9106 7.6105 11.9311 7.5967C11.9515 7.58289 11.9755 7.57553 12 7.57553C12.0245 7.57553 12.0485 7.58289 12.0689 7.5967C12.0894 7.6105 12.1054 7.63014 12.115 7.65317L13.33 10.5182C13.3386 10.5375 13.343 10.5584 13.343 10.5795C13.343 10.6006 13.3386 10.6215 13.33 10.6408C13.3181 10.658 13.3024 10.672 13.2841 10.6818C13.2659 10.6916 13.2456 10.6968 13.225 10.697H10.785C10.7644 10.6968 10.7441 10.6916 10.7259 10.6818C10.7076 10.672 10.6919 10.658 10.68 10.6408C10.6714 10.6215 10.667 10.6006 10.667 10.5795C10.667 10.5584 10.6714 10.5375 10.68 10.5182L11.885 7.65317Z"
            fill="black"
        />
        <path
            d="M17.5 15.9358H6.5C6.36739 15.9358 6.24021 15.9896 6.14645 16.0854C6.05268 16.1811 6 16.311 6 16.4465V17.4893C6 17.6247 6.05268 17.7546 6.14645 17.8504C6.24021 17.9462 6.36739 18 6.5 18H17.5C17.6326 18 17.7598 17.9462 17.8536 17.8504C17.9473 17.7546 18 17.6247 18 17.4893V16.4465C18 16.311 17.9473 16.1811 17.8536 16.0854C17.7598 15.9896 17.6326 15.9358 17.5 15.9358Z"
            fill={textColor}
        />
    </>
);

const TextColorIconShapeMedium: FunctionComponent<React.PropsWithChildren<TextColorPropsType>> = ({
    textColor,
}) => (
    <>
        <path
            d="M6.66667 15.0564H8.66667C8.84348 15.0564 9.01305 14.9847 9.13807 14.857C9.2631 14.7293 9.33333 14.5561 9.33333 14.3755C9.34007 14.2253 9.29794 14.077 9.21352 13.9538C9.1291 13.8306 9.00714 13.7395 8.86667 13.6945C8.84478 13.6879 8.82453 13.6766 8.80729 13.6613C8.79004 13.646 8.77619 13.6272 8.76667 13.606C8.75693 13.5835 8.7519 13.5591 8.7519 13.5345C8.7519 13.5099 8.75693 13.4855 8.76667 13.463L9.50667 11.7198C9.51968 11.6894 9.54113 11.6635 9.56838 11.6453C9.59562 11.6272 9.62747 11.6176 9.66 11.6177H14.3267C14.3592 11.6176 14.391 11.6272 14.4183 11.6453C14.4455 11.6635 14.467 11.6894 14.48 11.7198L15.22 13.463C15.2297 13.4855 15.2348 13.5099 15.2348 13.5345C15.2348 13.5591 15.2297 13.5835 15.22 13.606C15.2105 13.6272 15.1966 13.646 15.1794 13.6613C15.1621 13.6766 15.1419 13.6879 15.12 13.6945C14.9795 13.7395 14.8576 13.8306 14.7731 13.9538C14.6887 14.077 14.6466 14.2253 14.6533 14.3755C14.6533 14.5561 14.7236 14.7293 14.8486 14.857C14.9736 14.9847 15.1432 15.0564 15.32 15.0564H17.32C17.4968 15.0564 17.6664 14.9847 17.7914 14.857C17.9164 14.7293 17.9867 14.5561 17.9867 14.3755C17.9867 14.1949 17.9164 14.0217 17.7914 13.894C17.6664 13.7663 17.4968 13.6945 17.32 13.6945H16.8667C16.8341 13.6946 16.8023 13.685 16.775 13.6669C16.7478 13.6487 16.7263 13.6228 16.7133 13.5924L12.92 4.61084C12.8409 4.42903 12.7119 4.27455 12.5486 4.16613C12.3853 4.05771 12.1948 4 12 4C11.8052 4 11.6147 4.05771 11.4514 4.16613C11.2881 4.27455 11.1591 4.42903 11.08 4.61084L7.27333 13.5924C7.26032 13.6228 7.23887 13.6487 7.21162 13.6669C7.18438 13.685 7.15253 13.6946 7.12 13.6945H6.66667C6.48986 13.6945 6.32029 13.7663 6.19526 13.894C6.07024 14.0217 6 14.1949 6 14.3755C6 14.5561 6.07024 14.7293 6.19526 14.857C6.32029 14.9847 6.48986 15.0564 6.66667 15.0564ZM11.8467 6.20423C11.8595 6.17352 11.8808 6.14733 11.9081 6.12893C11.9354 6.11052 11.9673 6.10071 12 6.10071C12.0327 6.10071 12.0646 6.11052 12.0919 6.12893C12.1192 6.14733 12.1405 6.17352 12.1533 6.20423L13.7733 10.0243C13.7848 10.0499 13.7907 10.0778 13.7907 10.106C13.7907 10.1342 13.7848 10.162 13.7733 10.1877C13.7575 10.2106 13.7365 10.2294 13.7122 10.2424C13.6878 10.2554 13.6608 10.2623 13.6333 10.2626H10.38C10.3525 10.2623 10.3255 10.2554 10.3012 10.2424C10.2768 10.2294 10.2559 10.2106 10.24 10.1877C10.2286 10.162 10.2227 10.1342 10.2227 10.106C10.2227 10.0778 10.2286 10.0499 10.24 10.0243L11.8467 6.20423Z"
            fill="black"
        />
        <path
            d="M19.3333 16.9144H4.66667C4.48986 16.9144 4.32029 16.9862 4.19526 17.1139C4.07024 17.2416 4 17.4148 4 17.5954V19.3191C4 19.4997 4.07024 19.6729 4.19526 19.8006C4.32029 19.9283 4.48986 20 4.66667 20H19.3333C19.5101 20 19.6797 19.9283 19.8047 19.8006C19.9298 19.6729 20 19.4997 20 19.3191V17.5954C20 17.4148 19.9298 17.2416 19.8047 17.1139C19.6797 16.9862 19.5101 16.9144 19.3333 16.9144Z"
            fill={textColor}
        />
    </>
);

const TextColorIconShapeLarge: FunctionComponent<React.PropsWithChildren<TextColorPropsType>> = ({
    textColor,
}) => (
    <>
        <path
            d="M5.33333 15.8205H7.83333C8.05435 15.8205 8.26631 15.7308 8.42259 15.5712C8.57887 15.4116 8.66667 15.1951 8.66667 14.9693C8.67508 14.7816 8.62242 14.5963 8.5169 14.4423C8.41138 14.2883 8.25893 14.1743 8.08333 14.1182C8.05598 14.1099 8.03067 14.0957 8.00911 14.0766C7.98755 14.0576 7.97024 14.034 7.95833 14.0075C7.94616 13.9793 7.93988 13.9489 7.93988 13.9181C7.93988 13.8874 7.94616 13.8569 7.95833 13.8288L8.88333 11.6498C8.8996 11.6117 8.92641 11.5793 8.96047 11.5566C8.99453 11.534 9.03434 11.5219 9.075 11.5221H14.9083C14.949 11.5219 14.9888 11.534 15.0229 11.5566C15.0569 11.5793 15.0837 11.6117 15.1 11.6498L16.025 13.8288C16.0372 13.8569 16.0435 13.8874 16.0435 13.9181C16.0435 13.9489 16.0372 13.9793 16.025 14.0075C16.0131 14.034 15.9958 14.0576 15.9742 14.0766C15.9527 14.0957 15.9274 14.1099 15.9 14.1182C15.7244 14.1743 15.572 14.2883 15.4664 14.4423C15.3609 14.5963 15.3083 14.7816 15.3167 14.9693C15.3167 15.1951 15.4045 15.4116 15.5607 15.5712C15.717 15.7308 15.929 15.8205 16.15 15.8205H18.65C18.871 15.8205 19.083 15.7308 19.2393 15.5712C19.3955 15.4116 19.4833 15.1951 19.4833 14.9693C19.4833 14.7436 19.3955 14.5271 19.2393 14.3675C19.083 14.2078 18.871 14.1182 18.65 14.1182H18.0833C18.0427 14.1183 18.0029 14.1063 17.9688 14.0836C17.9347 14.0609 17.9079 14.0285 17.8917 13.9905L13.15 2.76355C13.0512 2.53629 12.8899 2.34319 12.6858 2.20766C12.4817 2.07214 12.2435 2 12 2C11.7565 2 11.5183 2.07214 11.3142 2.20766C11.1101 2.34319 10.9488 2.53629 10.85 2.76355L6.09167 13.9905C6.0754 14.0285 6.04859 14.0609 6.01453 14.0836C5.98047 14.1063 5.94066 14.1183 5.9 14.1182H5.33333C5.11232 14.1182 4.90036 14.2078 4.74408 14.3675C4.5878 14.5271 4.5 14.7436 4.5 14.9693C4.5 15.1951 4.5878 15.4116 4.74408 15.5712C4.90036 15.7308 5.11232 15.8205 5.33333 15.8205ZM11.8083 4.75529C11.8243 4.7169 11.851 4.68417 11.8851 4.66116C11.9192 4.63816 11.9592 4.62589 12 4.62589C12.0408 4.62589 12.0808 4.63816 12.1149 4.66116C12.149 4.68417 12.1757 4.7169 12.1917 4.75529L14.2167 9.53035C14.2309 9.56243 14.2383 9.59725 14.2383 9.63249C14.2383 9.66772 14.2309 9.70255 14.2167 9.73463C14.1969 9.76329 14.1706 9.78672 14.1402 9.803C14.1098 9.81928 14.076 9.82794 14.0417 9.82826H9.975C9.94065 9.82794 9.90687 9.81928 9.87644 9.803C9.84602 9.78672 9.81981 9.76329 9.8 9.73463C9.78572 9.70255 9.77834 9.66772 9.77834 9.63249C9.77834 9.59725 9.78572 9.56243 9.8 9.53035L11.8083 4.75529Z"
            fill="black"
        />
        <path
            d="M21.1667 17.8931H2.83333C2.61232 17.8931 2.40036 17.9827 2.24408 18.1424C2.0878 18.302 2 18.5185 2 18.7442V21.1489C2 21.3747 2.0878 21.5912 2.24408 21.7508C2.40036 21.9104 2.61232 22.0001 2.83333 22.0001H21.1667C21.3877 22.0001 21.5996 21.9104 21.7559 21.7508C21.9122 21.5912 22 21.3747 22 21.1489V18.7442C22 18.5185 21.9122 18.302 21.7559 18.1424C21.5996 17.9827 21.3877 17.8931 21.1667 17.8931Z"
            fill={textColor}
        />
    </>
);

export const TextColorIcon: FunctionComponent<React.PropsWithChildren<TextColorPropsType>> = (props) => {
    const { className, textColor, ...restProps } = props;

    const { small, medium, large } = restProps;

    const sharedIconProps = {
        textColor,
    };

    const hasNoSize = !small && !medium && !large;

    return (
        <SVGIcon {...restProps} className={`TextColorIcon ${className || ''}`}>
            {small && <TextColorIconShapeSmall {...sharedIconProps} />}
            {medium && <TextColorIconShapeMedium {...sharedIconProps} />}
            {(large || hasNoSize) && (
                <TextColorIconShapeLarge {...sharedIconProps} />
            )}
        </SVGIcon>
    );
};
