import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';
import { OPTION_LIST_ITEM_FOCUSED_CLASS } from '../constants';

export const useOptionListItemClassName = (
    classPrefix: string,
    className?: string,
    isFocused?: boolean,
) =>
    useMemo(() => {
        const rootClassName = appendClassName(
            makeBEM(classPrefix, 'Root'),
            isFocused ? OPTION_LIST_ITEM_FOCUSED_CLASS : '',
        );

        return {
            Root: appendClassName(rootClassName, className),
            Checkbox: makeBEM(classPrefix, 'Checkbox'),
            Typography: makeBEM(classPrefix, 'Typography'),
            AdditionalInfo: makeBEM(classPrefix, 'AdditionalInfo'),
        };
    }, [classPrefix, className, isFocused]);
