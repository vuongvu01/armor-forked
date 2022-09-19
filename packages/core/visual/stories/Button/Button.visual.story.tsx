/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { EditIcon } from '@deliveryhero/armor-icons';

import { Button, Flex } from '../../../src/components';

export default {
    title: 'Button',
    component: Button,
};

const flexProps = {
    gutterSpacing: 8,
};

export const Primary = () => {
    return (
        <Flex {...flexProps}>
            <Button primary>Primary</Button>
            <Button primary>
                <EditIcon /> Primary
            </Button>
            <Button primary>
                Primary <EditIcon />
            </Button>
            <Button primary>
                <EditIcon />
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
                <EditIcon /> Primary
            </Button>
            <Button primary disabled>
                Primary <EditIcon />
            </Button>
            <Button primary disabled>
                <EditIcon />
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
                <EditIcon /> Primary
            </Button>
            <Button primary small>
                Primary <EditIcon />
            </Button>
            <Button primary small>
                <EditIcon />
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
                <EditIcon /> Primary
            </Button>
            <Button primary small disabled>
                Primary <EditIcon />
            </Button>
            <Button primary small disabled>
                <EditIcon />
            </Button>
        </Flex>
    );
};

export const Secondary = () => {
    return (
        <Flex {...flexProps}>
            <Button secondary>Secondary</Button>
            <Button secondary>
                <EditIcon /> Secondary
            </Button>
            <Button secondary>
                Secondary <EditIcon />
            </Button>
            <Button secondary>
                <EditIcon />
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
                <EditIcon /> Secondary
            </Button>
            <Button secondary disabled>
                Secondary <EditIcon />
            </Button>
            <Button secondary disabled>
                <EditIcon />
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
                <EditIcon /> Secondary
            </Button>
            <Button secondary small>
                Secondary <EditIcon />
            </Button>
            <Button secondary small>
                <EditIcon />
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
                <EditIcon /> Secondary
            </Button>
            <Button secondary small disabled>
                Secondary <EditIcon />
            </Button>
            <Button secondary small disabled>
                <EditIcon />
            </Button>
        </Flex>
    );
};

export const Tertiary = () => {
    return (
        <Flex {...flexProps}>
            <Button tertiary>Tertiary</Button>
            <Button tertiary>
                <EditIcon /> Tertiary
            </Button>
            <Button tertiary>
                Tertiary <EditIcon />
            </Button>
            <Button tertiary>
                <EditIcon />
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
                <EditIcon /> Tertiary
            </Button>
            <Button tertiary disabled>
                Tertiary <EditIcon />
            </Button>
            <Button tertiary disabled>
                <EditIcon />
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
                <EditIcon /> Tertiary
            </Button>
            <Button tertiary small>
                Tertiary <EditIcon />
            </Button>
            <Button tertiary small>
                <EditIcon />
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
                <EditIcon /> Tertiary
            </Button>
            <Button tertiary small disabled>
                Tertiary <EditIcon />
            </Button>
            <Button tertiary small disabled>
                <EditIcon />
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
