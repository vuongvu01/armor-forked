import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useFileUploaderClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Title: makeBEM(classPrefix, 'Title'),
            Description: makeBEM(classPrefix, 'Description'),
            UploadButton: makeBEM(classPrefix, 'UploadButton'),
            FileListContainer: makeBEM(classPrefix, 'FileListContainer'),
            FileCard: makeBEM(classPrefix, 'FileCard'),
        };
    }, [classPrefix, className]);
