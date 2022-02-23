import { useRootRef } from '@deliveryhero/armor-system';

import { FileUploaderPropsType } from '../type';
import { RefType } from '../../../type';
import { DEFAULT_UPLOAD_BUTTON_LABEL } from '../constants';

export const useFileUploader = <E extends HTMLElement>(
    {
        title,
        description,
        uploadButtonParams,
        onFilesSelect,
        ...restProps
    }: FileUploaderPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
        getUploadButtonProps: () => ({
            onFilesSelect,
            ...uploadButtonParams,
        }),
        uploadButtonLabel:
            uploadButtonParams?.buttonLabel || DEFAULT_UPLOAD_BUTTON_LABEL,
        title,
        description,
    };
};
