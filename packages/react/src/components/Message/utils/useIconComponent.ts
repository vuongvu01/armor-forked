import {
    CancelCircleFilledIcon,
    InfoIcon,
    WarningIcon,
    TickCircleFilledIcon,
} from '@deliveryhero/armor-icons';
import { MessageEffectivePropsLevelType } from '../type';
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
        return CancelCircleFilledIcon;
    }

    if (success || level === messageLevels.success) {
        return TickCircleFilledIcon;
    }

    return InfoIcon;
};
