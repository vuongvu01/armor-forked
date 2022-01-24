import { ProgressBarPresetType } from './type';

export const PROGRESSBAR_CLASS_PREFIX = 'ProgressBar';

export const ProgressBarLevels: { [string: string]: ProgressBarPresetType } = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    FILE_UPLOAD: 'fileUpload',
};
