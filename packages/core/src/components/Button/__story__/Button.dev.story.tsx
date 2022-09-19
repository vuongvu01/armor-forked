/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IconPlaceholderIcon } from '@deliveryhero/armor-icons';

import { Flex } from '../../Flex';
import { Button } from '../Button';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Core/Button',
    component: Button,
    decorators: [withWrapper],
    parameters: {},
};

const flexProps = {
    gutterSpacing: 8,
};

export const Primary = () => {
    return (
        <Flex {...flexProps}>
            <Button primary>Primary</Button>
            <Button primary>
                <IconPlaceholderIcon /> Primary
            </Button>
            <Button primary>
                Primary <IconPlaceholderIcon />
            </Button>
            <Button primary>
                <IconPlaceholderIcon />
            </Button>
        </Flex>
    );
};

export const PrimaryDisabled = () => {
    return (
        <Flex {...flexProps}>
            <Button primary disabled>
                Primary
            </Button>
            <Button primary disabled>
                <IconPlaceholderIcon /> Primary
            </Button>
            <Button primary disabled>
                Primary <IconPlaceholderIcon />
            </Button>
            <Button primary disabled>
                <IconPlaceholderIcon />
            </Button>
        </Flex>
    );
};

export const PrimarySmall = () => {
    return (
        <Flex {...flexProps}>
            <Button primary small>
                Primary
            </Button>
            <Button primary small>
                <IconPlaceholderIcon /> Primary
            </Button>
            <Button primary small>
                Primary <IconPlaceholderIcon />
            </Button>
            <Button primary small>
                <IconPlaceholderIcon />
            </Button>
        </Flex>
    );
};

export const PrimarySmallDisabled = () => {
    return (
        <Flex {...flexProps}>
            <Button primary small disabled>
                Primary
            </Button>
            <Button primary small disabled>
                <IconPlaceholderIcon /> Primary
            </Button>
            <Button primary small disabled>
                Primary <IconPlaceholderIcon />
            </Button>
            <Button primary small disabled>
                <IconPlaceholderIcon />
            </Button>
        </Flex>
    );
};

export const Secondary = () => {
    return (
        <Flex {...flexProps}>
            <Button secondary>Secondary</Button>
            <Button secondary>
                <IconPlaceholderIcon /> Secondary
            </Button>
            <Button secondary>
                Secondary <IconPlaceholderIcon />
            </Button>
            <Button secondary>
                <IconPlaceholderIcon />
            </Button>
        </Flex>
    );
};

export const SecondaryDisabled = () => {
    return (
        <Flex {...flexProps}>
            <Button secondary disabled>
                Secondary
            </Button>
            <Button secondary disabled>
                <IconPlaceholderIcon /> Secondary
            </Button>
            <Button secondary disabled>
                Secondary <IconPlaceholderIcon />
            </Button>
            <Button secondary disabled>
                <IconPlaceholderIcon />
            </Button>
        </Flex>
    );
};

export const SecondarySmall = () => {
    return (
        <Flex {...flexProps}>
            <Button secondary small>
                Secondary
            </Button>
            <Button secondary small>
                <IconPlaceholderIcon /> Secondary
            </Button>
            <Button secondary small>
                Secondary <IconPlaceholderIcon />
            </Button>
            <Button secondary small>
                <IconPlaceholderIcon />
            </Button>
        </Flex>
    );
};

export const SecondarySmallDisabled = () => {
    return (
        <Flex {...flexProps}>
            <Button secondary small disabled>
                Secondary
            </Button>
            <Button secondary small disabled>
                <IconPlaceholderIcon /> Secondary
            </Button>
            <Button secondary small disabled>
                Secondary <IconPlaceholderIcon />
            </Button>
            <Button secondary small disabled>
                <IconPlaceholderIcon />
            </Button>
        </Flex>
    );
};

export const Tertiary = () => {
    return (
        <Flex {...flexProps}>
            <Button tertiary>Tertiary</Button>
            <Button tertiary>
                <IconPlaceholderIcon /> Tertiary
            </Button>
            <Button tertiary>
                Tertiary <IconPlaceholderIcon />
            </Button>
            <Button tertiary>
                <IconPlaceholderIcon />
            </Button>
        </Flex>
    );
};

export const TertiaryDisabled = () => {
    return (
        <Flex {...flexProps}>
            <Button tertiary disabled>
                Tertiary
            </Button>
            <Button tertiary disabled>
                <IconPlaceholderIcon /> Tertiary
            </Button>
            <Button tertiary disabled>
                Tertiary <IconPlaceholderIcon />
            </Button>
            <Button tertiary disabled>
                <IconPlaceholderIcon />
            </Button>
        </Flex>
    );
};

export const TertiarySmall = () => {
    return (
        <Flex {...flexProps}>
            <Button tertiary small>
                Tertiary
            </Button>
            <Button tertiary small>
                <IconPlaceholderIcon /> Tertiary
            </Button>
            <Button tertiary small>
                Tertiary <IconPlaceholderIcon />
            </Button>
            <Button tertiary small>
                <IconPlaceholderIcon />
            </Button>
        </Flex>
    );
};

export const TertiarySmallDisabled = () => {
    return (
        <Flex {...flexProps}>
            <Button tertiary small disabled>
                Tertiary
            </Button>
            <Button tertiary small disabled>
                <IconPlaceholderIcon /> Tertiary
            </Button>
            <Button tertiary small disabled>
                Tertiary <IconPlaceholderIcon />
            </Button>
            <Button tertiary small disabled>
                <IconPlaceholderIcon />
            </Button>
        </Flex>
    );
};

export const Danger = () => {
    return (
        <Flex {...flexProps}>
            <Button primary danger>
                Primary
            </Button>
            <Button primary danger disabled>
                Primary
            </Button>
            <Button tertiary danger>
                Tertiary
            </Button>
            <Button tertiary danger disabled>
                Tertiary
            </Button>
        </Flex>
    );
};

export const Wide = () => (
    <Button primary small wide>
        Create workflow
    </Button>
);
