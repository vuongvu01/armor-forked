import { MessageEffectivePropsLevelType } from '../type';
import {
    CheckMarkCircleIcon,
    InfoIcon,
    WarningIcon,
    CancelIcon,
} from '../../../icons';
import { messageLevels } from '../constants';

export const useIconComponent = ({
    level,
    warning,
    success,
    error,
}: MessageEffectivePropsLevelType) => {
    // 'error' | 'warning' | 'info' | 'success';
    if (warning || level === messageLevels.warning) {
        return WarningIcon;
    }

    if (error || level === messageLevels.error) {
        return CancelIcon;
    }

    if (success || level === messageLevels.success) {
        return CheckMarkCircleIcon;
    }

    return InfoIcon;
};
