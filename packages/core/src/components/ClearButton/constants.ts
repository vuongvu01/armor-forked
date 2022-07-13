import { ScalarType } from '@deliveryhero/armor-system';
import { ClearButtonSize, ClearButtonType } from './type';

export const CLEAR_BUTTON_CLASS_PREFIX = 'ClearButton';

export const CLEAR_BUTTON_DEFAULT_TYPE = 'circle-filled';

export const CLEAR_BUTTON_DEFAULT_STATE = 'enabled';

export const CLEAR_BUTTON_DEFAULT_SIZE = 'large';

export const CLEAR_BUTTON_TYPE_CLASSNAME_MAP: Record<ClearButtonType, string> =
    {
        'circle-filled': 'CircleFilledIcon',
        thin: 'ThinIcon',
    };

export const CLEAR_BUTTON_SIZE_MAP: Record<ClearButtonSize, ScalarType> = {
    medium: 20 / 4,
    large: 24 / 4,
};
