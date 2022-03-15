import React, { FunctionComponent, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import data from './data.json';
import { ComponentElementStylePropsType } from '../type';
import { SpinnerRoot } from './style';

export const Spinner: FunctionComponent<ComponentElementStylePropsType> = ({
    className,
    ...restProps
}) => {
    const anime = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        if (anime.current) {
            lottie.loadAnimation({
                container: anime.current as Element,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: data,
            });
        }
        return () => lottie.stop();
    }, [anime]);

    return (
        <SpinnerRoot
            {...restProps}
            className={`Spinner ${className || ''}`}
            ref={anime}
        />
    );
};
