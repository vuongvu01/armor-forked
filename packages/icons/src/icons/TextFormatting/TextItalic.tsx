import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const TextItalicIconShape = (
    <SVGIconGroup>
        <SVGIconPath
            d="M20.9361702,2 L14.4365957,2 C13.8490588,2 13.372766,2.47629282 13.372766,3.06382979 C13.372766,3.65136676 13.8490588,4.12765957 14.4365957,4.12765957 L15.3608511,4.12765957 C15.4384588,4.12767649 15.5099012,4.16994809 15.5472746,4.23796419 C15.584648,4.3059803 15.5820233,4.38895023 15.5404255,4.45446809 L5.85531915,19.6757447 C5.77706848,19.7983489 5.64161763,19.8724938 5.49617021,19.8723404 L3.06382979,19.8723404 C2.47629282,19.8723404 2,20.3486332 2,20.9361702 C2,21.5237072 2.47629282,22 3.06382979,22 L9.56340426,22 C10.1509412,22 10.627234,21.5237072 10.627234,20.9361702 C10.627234,20.3486332 10.1509412,19.8723404 9.56340426,19.8723404 L8.63914894,19.8723404 C8.56154119,19.8723235 8.49009883,19.8300519 8.4527254,19.7620358 C8.41535197,19.6940197 8.41797671,19.6110498 8.45957447,19.5455319 L18.1446809,4.32510638 C18.2227296,4.20217693 18.3582164,4.12769132 18.5038298,4.12765957 L20.9361702,4.12765957 C21.5237072,4.12765957 22,3.65136676 22,3.06382979 C22,2.47629282 21.5237072,2 20.9361702,2 Z"
        />
    </SVGIconGroup>
);

export const TextItalicIcon: FunctionComponent<SVGIconPropsType> = props => {
    const {className, ...restProps} = props;
    return <SVGIcon {...restProps} className={`TextItalicIcon ${className || ''}`}>{TextItalicIconShape}</SVGIcon>;
};
