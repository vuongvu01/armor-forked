import { MessagePropsType } from '../type';
import { messageLevels } from '../constants';

export const getMessageLevel = ({
    level,
    error,
    success,
    warning,
}: MessagePropsType) => {
    if (level === messageLevels.error || error) {
        return 'error';
    }
    if (level === messageLevels.success || success) {
        return 'success';
    }
    if (level === messageLevels.warning || warning) {
        return 'warning';
    }

    return 'info';
};
