import { useCallback, MouseEvent } from 'react';
import { TagPropsType } from '../type';
import { getStatusTagLabel, isStatusTag } from './index';

export const useTag = ({
    type,
    label,
    children,
    onClose,
    onDeselect,
    code,
    ...restRootProps
}: TagPropsType) => {
    let realLabel = label;
    if (isStatusTag(type)) {
        realLabel = getStatusTagLabel(type);
    }
    const content = realLabel !== undefined ? realLabel : children;

    const onCloseButtonClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (onClose) {
                onClose(event);
            }

            // need to maintain backward compatibility with onClose
            if (onDeselect) {
                onDeselect(code);
            }
        },
        [onClose, onDeselect],
    );

    return {
        content,
        onCloseButtonClick,
        restRootProps,
    };
};
