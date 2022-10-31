import React, { FunctionComponent, useEffect, useMemo, useRef } from 'react';
import lottie from 'lottie-web';

import { generateId } from '@deliveryhero/armor-system';
import data from './data.json';
import { LoadingSpinnerPropsType } from './type';
import { SpinnerRoot } from './style';

export const LoadingSpinner: FunctionComponent<
    React.PropsWithChildren<LoadingSpinnerPropsType>
> = ({ className, ...restProps }) => {
    const anime = useRef<null | HTMLDivElement>(null);
    const name = useMemo(() => generateId(), []);

    useEffect(() => {
        if (anime.current) {
            lottie.loadAnimation({
                container: anime.current as Element,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: data,
                name,
            });
        }
        return () => lottie.stop(name);
    }, [anime]);

    return (
        <SpinnerRoot
            {...restProps}
            className={`LoadingSpinner ${className || ''}`}
            ref={anime}
        />
    );
};
