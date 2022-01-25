import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';
import { ProgressBarPropsType } from '@deliveryhero/armor';

const ProgressBarLevels = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    FILE_UPLOAD: 'fileUpload',
};

const presetProgressIndicatorColorMap = {
    [ProgressBarLevels.SUCCESS]: 'success.10',
    [ProgressBarLevels.INFO]: 'primary.05',
    [ProgressBarLevels.WARNING]: 'warning.10',
    [ProgressBarLevels.ERROR]: 'error.08',
    [ProgressBarLevels.FILE_UPLOAD]: 'primary.03',
};

export const getProgressBarOverride = ({ preset }: ProgressBarPropsType) => {
    let result = {};

    if (preset) {
        result = css`
            ${result};
            background-color: ${preset === ProgressBarLevels.FILE_UPLOAD
                ? color('neutral.11')
                : 'none'};

            .ProgressBar-Indicator {
                background-color: ${color(
                    presetProgressIndicatorColorMap[preset],
                )};
            }
        `;
    }

    return result;
};
