import { useState, useEffect } from 'react';
import { durationNormal, useRootRef } from '@deliveryhero/armor-system';

import { ProgressBarPropsType } from '../type';
import { RefType } from '../../../type';

const correctProgressValue = (progress?: number) => {
    if (!progress || progress < 0) {
        return 0;
    }
    if (progress > 100) {
        return 100;
    }
    return progress;
};

export const useProgressBar = <E extends HTMLElement>(
    {
        color,
        height,
        progress,
        preset,
        autoRun,
        duration,
        reverse,
        onFinish,
        isPaused,
        ...restProps
    }: ProgressBarPropsType,
    ref: RefType<E>,
) => {
    const [internalProgress, setInternalProgress] = useState<number>(0);
    const innerRef = useRootRef<E>(ref);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (autoRun && duration && !isPaused) {
            // Auto update progress bar value, each step takes 1%
            interval = setInterval(() => {
                setInternalProgress((curProgress) => {
                    return curProgress < 100 ? curProgress + 1 : curProgress;
                });
            }, duration / 100);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [autoRun, duration, isPaused]);

    useEffect(() => {
        const isFinished = autoRun && internalProgress >= 100;

        if (isFinished && onFinish) {
            setTimeout(() => onFinish(), durationNormal);
        }
    }, [autoRun, internalProgress, onFinish]);

    const realProgress = reverse ? 100 - internalProgress : internalProgress;

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
            preset,
        },
        getProgressProps: () => ({
            color,
            height,
            progress:
                autoRun && duration
                    ? realProgress
                    : correctProgressValue(progress),
            preset,
        }),
    };
};
