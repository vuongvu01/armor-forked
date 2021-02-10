import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const TextUnderlineIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M20.9361702,19.8706383 C21.5237072,19.8706383 22,20.3469311 22,20.9344681 C22,21.5220051 21.5237072,21.9982979 20.9361702,21.9982979 L20.9361702,21.9982979 L3.06382979,21.9982979 C2.47629282,21.9982979 2,21.5220051 2,20.9344681 C2,20.3469311 2.47629282,19.8706383 3.06382979,19.8706383 L3.06382979,19.8706383 Z M8.34042553,2 C8.9279625,2 9.40425532,2.47629282 9.40425532,3.06382979 C9.40425532,3.65136676 8.9279625,4.12765957 8.34042553,4.12765957 L8.34042553,4.12765957 L7.18723404,4.12765957 C7.06972665,4.12765957 6.97446809,4.22291814 6.97446809,4.34042553 L6.97446809,4.34042553 L6.97446809,11.5940426 C6.97446813,14.3714473 9.22599953,16.6229786 12.0034043,16.6229786 C14.780809,16.6229786 17.0323404,14.3714473 17.0323404,11.5940426 L17.0323404,11.5940426 L17.0323404,4.34042553 C17.0323404,4.22291814 16.9370819,4.12765957 16.8195745,4.12765957 L16.8195745,4.12765957 L15.6595745,4.12765957 C15.0720375,4.12765957 14.5957447,3.65136676 14.5957447,3.06382979 C14.5957447,2.47629282 15.0720375,2 15.6595745,2 L15.6595745,2 L20.5293617,2 C21.1168987,2 21.5931915,2.47629282 21.5931915,3.06382979 C21.5931915,3.65136676 21.1168987,4.12765957 20.5293617,4.12765957 L20.5293617,4.12765957 L19.3693617,4.12765957 C19.2518543,4.12765957 19.1565957,4.22291814 19.1565957,4.34042553 L19.1565957,4.34042553 L19.1565957,11.5923404 C19.1565957,15.5448191 15.9524787,18.7489362 12,18.7489362 C8.04752131,18.7489362 4.84340426,15.5448191 4.84340426,11.5923404 L4.84340426,11.5923404 L4.84340426,4.3387234 C4.84340426,4.22121601 4.74814569,4.12595745 4.6306383,4.12595745 L4.6306383,4.12595745 L3.4706383,4.12595745 C2.88310133,4.12765957 2.40680851,3.65136676 2.40680851,3.06382979 C2.40680851,2.47629282 2.88310133,2 3.4706383,2 L3.4706383,2 Z" />
    </SVGIconGroup>
);

export const TextUnderlineIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`TextUnderlineIcon ${className || ''}`}
        >
            {TextUnderlineIconShape}
        </SVGIcon>
    );
};
