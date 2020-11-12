import React from 'react';
import styled from 'styled-components';
import { color } from '../color';
import { spacing } from '../spacing';
import { typography } from '../typography';

export default {
    title: 'Mixins',
    parameters: {},
};

const Block = styled.div`
    width: ${spacing(20)};
    padding: ${spacing(5)};
    background-color: ${color('primary.main')};
    ${typography('paragraphMedium')};
    color: ${color('neutral.01')};
`;

export const ColorAndSpacing = () => {
    return <Block>Quick brown fox...</Block>;
};
