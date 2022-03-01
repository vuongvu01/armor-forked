import React from 'react';

import { FileUploader, Link, Typography } from '../../../src/components';

export default {
    title: 'FileUploader',
    component: FileUploader,
};

export const Basic = () => {
    return (
        <>
            <FileUploader
                title="Upload File"
                description={
                    <>
                        A clear description including the supported file types,
                        maximum file size and if necessary a{' '}
                        <Link>sample file</Link> link.
                    </>
                }
            ></FileUploader>
        </>
    );
};

export const CustomTitleAndDescription = () => {
    return (
        <>
            <FileUploader
                title={<Typography pageTitle>Upload File</Typography>}
                description={
                    <Typography sectionTitle>
                        A clear description including the supported file types,
                        maximum file size and if necessary a{' '}
                        <Link>sample file</Link> link.
                    </Typography>
                }
                uploadButtonParams={{
                    buttonLabel: 'Select file to upload',
                    secondary: true,
                }}
            ></FileUploader>
        </>
    );
};
