/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { IconPlaceholderIcon } from '@deliveryhero/armor-icons';
import { Flex, FlexPropsType } from '../../Flex';
import { Typography } from '../../Typography';
import { withWrapper } from '../../../helpers/Wrapper';

import { Link } from '../Link';

export default {
    title: 'Core/Link',
    component: Link,
    decorators: [withWrapper],
    parameters: {},
};

const flexProps: FlexPropsType = {
    gutterSpacing: 8,
    alignItems: 'center',
};

export const Small = () => {
    return (
        <Flex {...flexProps}>
            <Link href="#" small>
                This is a link
            </Link>
            <Link href="#" small inline>
                This is a link
            </Link>
            <Link href="#" small>
                <IconPlaceholderIcon />
                This is a link
            </Link>
        </Flex>
    );
};

export const Medium = () => {
    return (
        <Flex {...flexProps}>
            <Link href="#" medium>
                This is a link
            </Link>
            <Link href="#" medium inline>
                This is a link
            </Link>
            <Link href="#" medium>
                <IconPlaceholderIcon />
                This is a link
            </Link>
        </Flex>
    );
};

export const Large = () => {
    return (
        <Flex {...flexProps}>
            <Link href="#" large>
                This is a link
            </Link>
            <Link href="#" large inline>
                This is a link
            </Link>
            <Link href="#" large>
                <IconPlaceholderIcon />
                This is a link
            </Link>
        </Flex>
    );
};

export const withHref = () => {
    return (
        <Flex {...flexProps}>
            <Link href="https://google.com" medium target="blank">
                Click me and I will appear as visited
            </Link>
            <Link href="https://google.com" medium target="blank" inline>
                Click me and I will appear as visited
            </Link>
            <Link href="https://google.com" medium target="blank">
                <IconPlaceholderIcon />
                Click me and I will appear as visited
            </Link>
        </Flex>
    );
};

export const Disabled = () => {
    return (
        <Flex {...flexProps}>
            <Link href="#" medium disabled>
                This is a link
            </Link>
            <Link href="#" medium inline disabled>
                This is a link
            </Link>
            <Link href="#" medium disabled>
                <IconPlaceholderIcon />
                This is a link
            </Link>
        </Flex>
    );
};

export const BodyCopy = () => {
    return (
        <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an{' '}
            <Link href="#">unknown printer</Link> took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
        </Typography>
    );
};

export const Margin = () => {
    return (
        <Link medium margin={8}>
            This is a link
        </Link>
    );
};
