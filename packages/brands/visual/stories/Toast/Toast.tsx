import React from 'react';
import { Stack, Toast } from '@deliveryhero/armor';

export default {
    title: 'Toast',
    component: Toast,
};

export const Basic = () => {
    return (
        <Stack gutterSpacing={2}>
            <Toast message="Messsage" level="error" />
            <Toast message="Messsage" level="warning" />
            <Toast message="Messsage" level="info" />
            <Toast message="Messsage" level="success" />
            <Toast message="Messsage" error />
            <Toast message="Messsage" warning />
            <Toast message="Messsage" info />
            <Toast message="Messsage" success />
            <Toast message="Messsage" level="success" disableCloseButton />
            <Toast message="Messsage" level="success" disableIcon />
            <Toast
                message="Messsage"
                level="success"
                action={{ label: 'Click', onClick: () => {} }}
            />
            <Toast
                message="This is a long message. This is a long message. This is a long message. This is a long message. This is a long message. This is a long message. This is a long message. This is a long message."
                success
            />
        </Stack>
    );
};
