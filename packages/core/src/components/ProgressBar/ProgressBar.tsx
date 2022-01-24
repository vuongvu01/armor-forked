import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useProgressBarClassNames } from './hooks/useProgressBarClassNames';
import { useProgressBar } from './hooks/useProgressBar';
import { ProgressBarRoot, ProgressBarIndicator } from './style';
import { ProgressBarPropsType } from './type';
import { PROGRESSBAR_CLASS_PREFIX, ProgressBarLevels } from './constants';

/**
 * @armor-docs-component
 */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarPropsType>(
    function ProgressBar({ className, ...props }, ref) {
        const theme = useComponentTheme(PROGRESSBAR_CLASS_PREFIX);
        const classNames = useProgressBarClassNames(
            PROGRESSBAR_CLASS_PREFIX,
            className,
        );

        const { rootProps, getProgressProps } = useProgressBar<HTMLDivElement>(
            props,
            ref,
        );

        return (
            <ProgressBarRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
            >
                <ProgressBarIndicator
                    {...getProgressProps()}
                    className={classNames.Indicator}
                    theme={theme}
                />
            </ProgressBarRoot>
        );
    },
);

ProgressBar.defaultProps = {
    autoRun: false,
    reverse: false,
};

ProgressBar.propTypes = {
    /** The Progressbar's progress, a value between 0-100 (%) */
    progress: PropTypes.number,
    /** Some presets for theming */
    preset: PropTypes.oneOf([
        ProgressBarLevels.SUCCESS,
        ProgressBarLevels.INFO,
        ProgressBarLevels.WARNING,
        ProgressBarLevels.ERROR,
        ProgressBarLevels.FILE_UPLOAD,
    ]),
    /** If true, the progress bar will run automatically within the given duration */
    autoRun: PropTypes.bool,
    /** Auto run mode duration time */
    duration: PropTypes.number,
    /** If true, the Progressbar's progress will start from 100% and finish at 0% */
    reverse: PropTypes.bool,
    /** A callback is fired whenever the Progressbar's progress reaches 100% (or 0% for the reversed mode). */
    onFinish: PropTypes.func,
};
