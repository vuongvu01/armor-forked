import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useFileCardClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Body: makeBEM(classPrefix, 'Body'),
            LeftPortion: makeBEM(classPrefix, 'LeftPortion'),
            RightPortion: makeBEM(classPrefix, 'RightPortion'),
            FormFieldErrorMessage: makeBEM(
                classPrefix,
                'FormFieldErrorMessage',
            ),
            FileIcon: makeBEM(classPrefix, 'FileIcon'),
            FileImageContainer: makeBEM(classPrefix, 'FileImageContainer'),
            FileImage: makeBEM(classPrefix, 'FileImage'),
            CancelIcon: makeBEM(classPrefix, 'CancelIcon'),
            DeleteIcon: makeBEM(classPrefix, 'DeleteIcon'),
            FileName: makeBEM(classPrefix, 'FileName'),
            FileExtension: makeBEM(classPrefix, 'FileExtension'),
            FileSize: makeBEM(classPrefix, 'FileSize'),
            UploadBar: makeBEM(classPrefix, 'UploadBar'),
        };
    }, [classPrefix, className]);
