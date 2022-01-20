import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const PlayYoutubeIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M20.3333 6.9845V17.0155C20.3333 17.7043 19.8119 18.1728 19.1919 18.2333C17.5874 18.3898 15.1901 18.5455 12 18.5455C8.80986 18.5455 6.41265 18.3898 4.80807 18.2333C4.18807 18.1728 3.66667 17.7043 3.66667 17.0155V6.9845C3.66667 6.2957 4.18807 5.82723 4.80807 5.76673C6.41264 5.61017 8.80986 5.45455 12 5.45455C15.1901 5.45455 17.5874 5.61017 19.1919 5.76673C19.8119 5.82723 20.3333 6.2957 20.3333 6.9845ZM2 6.9845C2 5.62821 3.07842 4.47189 4.62288 4.32119C6.28857 4.15867 8.74761 4 12 4C15.2524 4 17.7114 4.15867 19.3771 4.32119C20.9216 4.47189 22 5.62821 22 6.9845V17.0155C22 18.3718 20.9216 19.5281 19.3771 19.6788C17.7114 19.8413 15.2524 20 12 20C8.74761 20 6.28857 19.8413 4.62288 19.6788C3.07842 19.5281 2 18.3718 2 17.0155V6.9845ZM9.6416 8.93089V15.0691L15.3333 12L9.6416 8.93089Z" />
    </SVGIconGroup>
);

export const PlayYoutubeIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`PlayYoutubeIcon ${className || ''}`}
        >
            {PlayYoutubeIconShape}
        </SVGIcon>
    );
};
