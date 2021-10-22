import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const DownloadIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M8.39167 0C7.72267 0.000470939 7.18046 0.556021 7.18 1.24147L7.18083 8.26253C7.18106 8.31922 7.15918 8.37364 7.12006 8.41372C7.08094 8.4538 7.02782 8.47622 6.9725 8.47599H4.55583C4.1459 8.44227 3.76155 8.68333 3.6044 9.07272C3.44725 9.46211 3.5532 9.9109 3.86667 10.1837L8.94833 15.392C9.4278 15.8609 10.1822 15.8609 10.6617 15.392L15.7433 10.1879C16.0556 9.91469 16.1608 9.46655 16.0039 9.07772C15.8469 8.68889 15.4636 8.44772 15.0542 8.48026H12.6375C12.5224 8.48026 12.4292 8.38469 12.4292 8.2668V1.24147C12.4287 0.556354 11.887 0.000941582 11.2183 0H8.39167ZM3.3625 20C1.5062 19.9981 0.00183746 18.4567 0 16.5548V14.9521C0.0157822 14.3863 0.467983 13.9361 1.02042 13.9361C1.57285 13.9361 2.02505 14.3863 2.04083 14.9521V16.5522C2.04175 17.2997 2.63294 17.9055 3.3625 17.9064H16.6375C17.3671 17.9055 17.9583 17.2997 17.9592 16.5522V14.9521C17.9749 14.3863 18.4272 13.9361 18.9796 13.9361C19.532 13.9361 19.9842 14.3863 20 14.9521V16.5548C19.9982 18.4567 18.4938 19.9981 16.6375 20H3.3625Z" />
    </SVGIconGroup>
);

export const DownloadIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon {...restProps} className={`DownloadIcon ${className || ''}`}>
            {DownloadIconShape}
        </SVGIcon>
    );
};
