import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const HeadingIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M3.66667 2H20.3333C20.7754 2 21.1993 2.18222 21.5118 2.50656C21.8244 2.83091 22 3.27081 22 3.72951V10.4746C22 10.9333 21.8244 11.3732 21.5118 11.6975C21.1993 12.0219 20.7754 12.2041 20.3333 12.2041H3.66667C3.22464 12.2041 2.80072 12.0219 2.48816 11.6975C2.17559 11.3732 2 10.9333 2 10.4746V3.72951C2 3.27081 2.17559 2.83091 2.48816 2.50656C2.80072 2.18222 3.22464 2 3.66667 2ZM20.228 3.79283C20.1889 3.75228 20.1359 3.72951 20.0807 3.72951H4.08333C3.97283 3.72951 3.86685 3.77506 3.78871 3.85615C3.71057 3.93723 3.66667 4.04721 3.66667 4.16188V10.2584C3.66667 10.3157 3.68862 10.3707 3.72769 10.4113C3.76676 10.4518 3.81975 10.4746 3.875 10.4746H20.0807C20.1359 10.4746 20.1889 10.4518 20.228 10.4113C20.267 10.3707 20.289 10.3157 20.289 10.2584V3.94569C20.289 3.88836 20.267 3.83337 20.228 3.79283ZM2.80808 15.4694H21.1919C21.4062 15.4694 21.6118 15.3781 21.7633 15.2154C21.9149 15.0527 22 14.8321 22 14.6021C22 14.3721 21.9149 14.1514 21.7633 13.9888C21.6118 13.8261 21.4062 13.7347 21.1919 13.7347H2.80808C2.59376 13.7347 2.38823 13.8261 2.23668 13.9888C2.08514 14.1514 2 14.3721 2 14.6021C2 14.8321 2.08514 15.0527 2.23668 15.2154C2.38823 15.3781 2.59376 15.4694 2.80808 15.4694ZM17.1899 22.0001H2.81013C2.59527 22.0001 2.38921 21.9087 2.23728 21.746C2.08535 21.5834 2 21.3628 2 21.1327C2 20.9027 2.08535 20.6821 2.23728 20.5194C2.38921 20.3568 2.59527 20.2654 2.81013 20.2654H17.1899C17.4047 20.2654 17.6108 20.3568 17.7627 20.5194C17.9146 20.6821 18 20.9027 18 21.1327C18 21.3628 17.9146 21.5834 17.7627 21.746C17.6108 21.9087 17.4047 22.0001 17.1899 22.0001ZM2.79208 18.7347H21.2079C21.418 18.7347 21.6195 18.6433 21.768 18.4807C21.9165 18.318 22 18.0974 22 17.8673C22 17.6373 21.9165 17.4167 21.768 17.254C21.6195 17.0914 21.418 17 21.2079 17H2.79208C2.58201 17 2.38054 17.0914 2.23199 17.254C2.08345 17.4167 2 17.6373 2 17.8673C2 18.0974 2.08345 18.318 2.23199 18.4807C2.38054 18.6433 2.58201 18.7347 2.79208 18.7347Z" />
    </SVGIconGroup>
);

export const HeadingIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`HeadingIcon ${className || ''}`}
        >
            {HeadingIconShape}
        </SVGIcon>
    );
};
