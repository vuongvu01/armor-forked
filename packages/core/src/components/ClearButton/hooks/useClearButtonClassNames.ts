import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';
import {
    ClearButtonState,
    ClearButtonType,
    ClearButtonIconSize,
    ClearButtonSize,
} from '../type';
import {
    CLEAR_BUTTON_DEFAULT_TYPE,
    CLEAR_BUTTON_TYPE_CLASSNAME_MAP,
} from '../constants';

export const useClearButtonClassNames = (
    classPrefix: string,
    className?: string,
    type?: ClearButtonType,
    state?: ClearButtonState,
    iconSize?: ClearButtonIconSize,
    size?: ClearButtonSize,
) =>
    useMemo(() => {
        const iconPrefix =
            CLEAR_BUTTON_TYPE_CLASSNAME_MAP[type ?? CLEAR_BUTTON_DEFAULT_TYPE];

        const root = makeRootClassName(classPrefix, className);

        const rootClassname = [root, size && `${root}--${size}`]
            .filter(Boolean)
            .join(' ');

        const iconClassname = [
            makeBEM(classPrefix, iconPrefix),
            makeBEM(classPrefix, iconPrefix, state),
            iconSize && makeBEM(classPrefix, iconPrefix, iconSize),
        ]
            .filter(Boolean)
            .join(' ');

        return {
            Root: rootClassname,
            Icon: iconClassname,
        };
    }, [type, classPrefix, className, size, state, iconSize]);
