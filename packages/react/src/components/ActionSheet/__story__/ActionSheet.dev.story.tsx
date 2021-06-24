/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import { CogIcon, EditIcon, PlayIcon } from '@deliveryhero/armor-icons';

import { ActionSheet } from '../ActionSheet';
import { Button } from '../../Button';
import { IconButton } from '../../IconButton';

export default {
    title: 'Components/ActionSheet',
    component: ActionSheet,
};

export const Basic = () => {
    return (
        <ActionSheet label="2 items selected" margin={4}>
            <div>
                <Button tertiary marginRight={4}>
                    Cancel
                </Button>
                <Button>Delete</Button>
            </div>
        </ActionSheet>
    );
};

export const CustomIcons = () => {
    return (
        <ActionSheet label="2 items selected" margin={4}>
            <div>
                <IconButton light onClick={() => console.log('We clicked')}>
                    <EditIcon color="primary.main" medium />
                </IconButton>
                <IconButton light onClick={() => console.log('We clicked')}>
                    <PlayIcon color="primary.main" medium />
                </IconButton>
                <IconButton light onClick={() => console.log('We clicked')}>
                    <CogIcon color="primary.main" medium />
                </IconButton>
            </div>
        </ActionSheet>
    );
};
