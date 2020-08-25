import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const SearchIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M21.6895606,20.1892107 L16.1489584,14.6486084 C18.6584424,11.3498027 18.1828179,6.67072392 15.0608791,3.94434765 C11.9389403,1.21797138 7.23843133,1.37675418 4.30759275,4.30759275 C1.37675418,7.23843133 1.21797138,11.9389403 3.94434765,15.0608791 C6.67072392,18.1828179 11.3498027,18.6584424 14.6486084,16.1489584 L20.1892107,21.6895606 C20.6065038,22.0966057 21.2722675,22.0966057 21.6895606,21.6895606 C22.1034798,21.2750885 22.1034798,20.6036827 21.6895606,20.1892107 Z M4.17925479,9.90485493 C4.17925479,6.74128726 6.7438331,4.17670894 9.90740077,4.17670894 C13.0709684,4.17670894 15.6355468,6.74128726 15.6355468,9.90485493 C15.6355468,13.0684226 13.0709684,15.6330009 9.90740077,15.6330009 C6.74538394,15.62926 4.18299571,13.0668718 4.17925479,9.90485493 Z" />
    </SVGIconGroup>
);

export const SearchIcon: FunctionComponent<SVGIconPropsType> = props => {
    return <SVGIcon {...props}>{SearchIconShape}</SVGIcon>;
};
