import {
    CancelCircleFilledIcon,
    InfoIcon,
    WarningIcon,
    TickCircleFilledIcon,
    // eslint-disable-next-line import/no-extraneous-dependencies
} from '@deliveryhero/armor-icons';
import { MessagePropsType } from '../type';
import { messageLevels } from '../constants';

export const useIconComponent = ({
    level,
    warning,
    success,
    error,
    iconTag,
}: MessagePropsType) => {
    if (iconTag) {
        return iconTag;
    }

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
