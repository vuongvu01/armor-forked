import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useDatePickerActionBarClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        const ActionBarButton = makeBEM(classPrefix, 'ActionBarButton');

        return {
            Root: makeRootClassName(classPrefix, className),
            ActionBarButton,
            ActionBarButtonApply: [
                ActionBarButton,
                makeBEM(classPrefix, 'ActionBarButtonApply'),
            ].join(' '),
            Actions: makeBEM(classPrefix, 'Actions'),
        };
    }, [classPrefix, className]);
