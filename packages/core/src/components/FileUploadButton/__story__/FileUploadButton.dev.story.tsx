/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import styled from 'styled-components';

// eslint-disable-next-line import/no-extraneous-dependencies
import { DeleteIcon, TickCircleFilledIcon } from '@deliveryhero/armor-icons';

import { withWrapper } from '../../../helpers/Wrapper';

import { FileUploadButton } from '../FileUploadButton';
import { Box } from '../../Box';
import { Card } from '../../Card';
import { Button } from '../../Button';
import { Flex, FlexItem } from '../../Flex';
import { Typography } from '../../Typography';

export default {
    title: 'Components/FileUploadButton',
    component: FileUploadButton,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const Basic = () => {
    const handleFileSelect = (file: File) => {
        console.log(`Selected file name is ${file.name}`);
    };
    const handleClick = (event: React.MouseEvent) => {
        console.log(event.target);
    };

    return (
        <FileUploadButton onFileSelect={handleFileSelect} onClick={handleClick}>
            {text('Button children', 'Upload file...')}
        </FileUploadButton>
    );
};

const BreakWordTypography = styled(Typography)`
    word-break: break-all;
`;

export const CSVUpload = () => {
    const handleFileSelect = (file: File) => {
        console.log(`Selected file name is ${file.name}`);
    };
    const handleClick = (event: React.MouseEvent) => {
        console.log(event.target);
    };

    return (
        <Card maxWidth="400px" padding={6}>
            <Box paddingY={6}>
                <Flex gutterSpacing={2}>
                    <FlexItem paddingTop={1}>
                        <TickCircleFilledIcon color="$color.success.main" />
                    </FlexItem>
                    <FlexItem flexGrow={1}>
                        <BreakWordTypography
                            paragraph
                            medium
                            color="$color.neutral.07"
                            margin={0}
                        >
                            vendorlistitsareallyreallylongvendorslistrighthereyeahvendrosyeah.csv
                            <br />
                            234b | 18 vendors
                        </BreakWordTypography>
                    </FlexItem>
                    <FlexItem alignSelf="center">
                        <DeleteIcon color="$color.error.main" />
                    </FlexItem>
                </Flex>
            </Box>
            <Flex justifyContent="flex-end" gutterSpacing={2}>
                <Button tertiary>
                    {text('Secondary button children', 'Download template')}
                </Button>
                <FileUploadButton
                    accept="text/csv"
                    onFileSelect={handleFileSelect}
                    onClick={handleClick}
                >
                    {text('Button children', 'Upload file...')}
                </FileUploadButton>
            </Flex>
        </Card>
    );
};
