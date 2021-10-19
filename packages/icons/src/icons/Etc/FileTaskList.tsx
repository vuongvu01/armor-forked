import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const FileTaskListIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M13.6842 6.68499H10.3158C10.0924 6.68499 9.87824 6.59279 9.72032 6.42867C9.56239 6.26455 9.47367 6.04195 9.47367 5.80985V3.70076C9.45998 3.205 9.58168 2.71536 9.8247 2.28852C10.0677 1.86168 10.4221 1.51511 10.8468 1.28892C11.2715 1.06274 11.7492 0.966204 12.2245 1.01049C12.6999 1.05477 13.1534 1.23807 13.5326 1.53915C13.841 1.78374 14.0911 2.09884 14.2634 2.46004C14.4357 2.82124 14.5257 3.21884 14.5263 3.62199V5.80985C14.5263 6.04195 14.4376 6.26455 14.2797 6.42867C14.1217 6.59279 13.9075 6.68499 13.6842 6.68499ZM11.4748 3.03855C11.4054 3.14649 11.3684 3.27339 11.3684 3.40321C11.3706 3.57658 11.4378 3.74221 11.5558 3.86481C11.6738 3.98742 11.8332 4.0573 12 4.05956C12.1249 4.05956 12.247 4.02107 12.3509 3.94895C12.4547 3.87683 12.5357 3.77432 12.5835 3.65438C12.6313 3.53445 12.6438 3.40248 12.6194 3.27516C12.5951 3.14784 12.5349 3.03089 12.4466 2.93909C12.3583 2.8473 12.2457 2.78479 12.1232 2.75946C12.0007 2.73414 11.8737 2.74713 11.7583 2.79681C11.6429 2.84649 11.5442 2.93062 11.4748 3.03855ZM15.7894 8.87282H8.2105C8.04299 8.87282 7.88235 8.94197 7.7639 9.06506C7.64546 9.18815 7.57892 9.3551 7.57892 9.52918C7.57892 9.70325 7.64546 9.8702 7.7639 9.99329C7.88235 10.1164 8.04299 10.1855 8.2105 10.1855H15.7894C15.957 10.1855 16.1176 10.1164 16.236 9.99329C16.3545 9.8702 16.421 9.70325 16.421 9.52918C16.421 9.3551 16.3545 9.18815 16.236 9.06506C16.1176 8.94197 15.957 8.87282 15.7894 8.87282ZM16.421 12.5923C16.4188 12.4189 16.3516 12.2533 16.2336 12.1307C16.1157 12.0081 15.9563 11.9382 15.7894 11.9359H8.2105C8.04299 11.9359 7.88235 12.0051 7.7639 12.1282C7.64546 12.2513 7.57892 12.4182 7.57892 12.5923C7.57892 12.7664 7.64546 12.9333 7.7639 13.0564C7.88235 13.1795 8.04299 13.2486 8.2105 13.2486H15.7894C15.9563 13.2464 16.1157 13.1765 16.2336 13.0539C16.3516 12.9313 16.4188 12.7656 16.421 12.5923ZM18.3158 3.62205H16C15.9442 3.62205 15.8906 3.6451 15.8511 3.68613C15.8117 3.72716 15.7895 3.78281 15.7895 3.84084V5.15355C15.7895 5.21158 15.8117 5.26723 15.8511 5.30826C15.8906 5.34929 15.9442 5.37234 16 5.37234H17.8947C18.0064 5.37234 18.1135 5.41844 18.1925 5.5005C18.2714 5.58256 18.3158 5.69386 18.3158 5.80991V17.003C18.3155 17.1212 18.2701 17.2346 18.1895 17.318L15.4947 20.1185C15.4555 20.1608 15.4084 20.1942 15.3563 20.2168C15.3041 20.2394 15.2481 20.2506 15.1916 20.2498H6.10526C5.99359 20.2498 5.8865 20.2037 5.80753 20.1216C5.72857 20.0395 5.68421 19.9282 5.68421 19.8122V5.80991C5.68421 5.69386 5.72857 5.58256 5.80753 5.5005C5.8865 5.41844 5.99359 5.37234 6.10526 5.37234H8C8.05584 5.37234 8.10938 5.34929 8.14886 5.30826C8.18835 5.26723 8.21053 5.21158 8.21053 5.15355V3.84084C8.21053 3.78281 8.18835 3.72716 8.14886 3.68613C8.10938 3.6451 8.05584 3.62205 8 3.62205H5.68421C5.23753 3.62205 4.80914 3.80646 4.49329 4.1347C4.17744 4.46294 4 4.90813 4 5.37234V20.2498C4 20.714 4.17744 21.1592 4.49329 21.4874C4.80914 21.8156 5.23753 22 5.68421 22H18.3158C18.7625 22 19.1909 21.8156 19.5067 21.4874C19.8226 21.1592 20 20.714 20 20.2498V5.37234C20 4.90813 19.8226 4.46294 19.5067 4.1347C19.1909 3.80646 18.7625 3.62205 18.3158 3.62205ZM7.7639 15.1911C7.88235 15.068 8.04299 14.9989 8.2105 14.9989H11.3684C11.5359 14.9989 11.6965 15.068 11.815 15.1911C11.9334 15.3142 12 15.4812 12 15.6552C12 15.8293 11.9334 15.9963 11.815 16.1194C11.6965 16.2425 11.5359 16.3116 11.3684 16.3116H8.2105C8.04299 16.3116 7.88235 16.2425 7.7639 16.1194C7.64546 15.9963 7.57892 15.8293 7.57892 15.6552C7.57892 15.4812 7.64546 15.3142 7.7639 15.1911Z" />
    </SVGIconGroup>
);

export const FileTaskListIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`FileTaskListIcon ${className || ''}`}
        >
            {FileTaskListIconShape}
        </SVGIcon>
    );
};
