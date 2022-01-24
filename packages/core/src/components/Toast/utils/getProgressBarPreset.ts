import { ProgressBarPresetType } from '../../ProgressBar/type';
import { ToastPropsType } from '../type';

export const getProgressBarPreset = ({
    level,
    success,
    info,
    error,
    warning,
}: Pick<ToastPropsType, 'level' | 'success' | 'info' | 'error' | 'warning'>):
    | ProgressBarPresetType
    | undefined => {
    if (level === 'success' || success) {
        return 'success';
    }
    if (level === 'info' || info) {
        return 'info';
    }
    if (level === 'error' || error) {
        return 'error';
    }
    if (level === 'warning' || warning) {
        return 'warning';
    }

    return undefined;
};
