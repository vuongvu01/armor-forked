import React from 'react';
import styled from 'styled-components';
import { DeleteIcon, TickCircleFilledIcon } from '@deliveryhero/armor-icons';
import {
    FileUploadButton,
    Box,
    Card,
    Button,
    Flex,
    FlexItem,
    Typography,
} from '@deliveryhero/armor';

export default {
    title: 'FileUploadButton',
    component: FileUploadButton,
};

const BreakWordTypography = styled(Typography)`
    word-break: break-all;
`;

export const Basic = () => <FileUploadButton>Upload file...</FileUploadButton>;
export const CSVUpload = () => {
    return (
        <Card maxWidth="400px" padding={6}>
            <Box paddingY={6}>
                <Flex gutterSpacing={2}>
                    <FlexItem paddingTop={1}>
                        <TickCircleFilledIcon style={{ color: '#a3da70' }} />
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
                        <DeleteIcon style={{ color: '#e8656c' }} />
                    </FlexItem>
                </Flex>
            </Box>
            <Flex justifyContent="flex-end" gutterSpacing={2}>
                <Button tertiary>Download template</Button>
                <FileUploadButton>Upload file...</FileUploadButton>
            </Flex>
        </Card>
    );
};
