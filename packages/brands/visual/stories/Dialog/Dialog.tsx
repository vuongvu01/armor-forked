import React from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@deliveryhero/armor';

export default {
    title: 'Dialog',
    component: Dialog,
};

export const Basic = () => (
    <Dialog open={true} wide={false}>
        <DialogTitle description="Assign a new id to this location">
            New location
        </DialogTitle>
        <DialogContent>Hello world!</DialogContent>
        <DialogActions>
            <Button tertiary>Cancel</Button>
            <Button>Save</Button>
        </DialogActions>
    </Dialog>
);
