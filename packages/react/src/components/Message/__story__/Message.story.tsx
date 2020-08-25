import React from 'react';
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { action } from '@storybook/addon-actions';
import { Message } from '../Message';
import { LoremIpsum } from '../../../helpers/LoremIpsum';
import { Button } from '../../Button';
import { Typography } from '../../Typography';
import { MessageAction } from '../../MessageAction';
import { Rick } from '../../../helpers/Rick';

export default {
    title: 'Components/Message',
    component: Message,
    decorators: [withKnobs],
    parameters: {},
};

const optionsLevel = {
    Error: 'error',
    Info: 'info',
    Warning: 'warning',
    Success: 'success',
};

export const Basic = () => {
    const longText = boolean('Long text', false);

    return (
        <>
            <Message
                disableCloseButton={!boolean('Show close button', true)}
                actions={
                    boolean('Show actions', true) ? (
                        <MessageAction useMessageColor>
                            See details
                        </MessageAction>
                    ) : null
                }
                extra={boolean('Show extra', true) ? <Rick /> : null}
                level={select('Level', optionsLevel, 'error')}
                disableIcon
            >
                {boolean('Show title', true) && (
                    <Typography h6 marginBottom={1}>
                        Error message
                    </Typography>
                )}
                {boolean('Show message', true) && (
                    <>
                        {longText && (
                            <>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&apos;s standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type
                                specimen book. It has survived not only five
                                centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </>
                        )}
                        {!longText && <>Short text</>}
                    </>
                )}
                {boolean('Show bottom action', true) && (
                    <div>
                        <MessageAction marginTop={2}>See details</MessageAction>
                    </div>
                )}
            </Message>
        </>
    );
};

export const WithCustomAttributes = () => (
    <Message marginTop={30} disableCloseButton={false} disableIcon>
        Hello there!
    </Message>
);

export const AllTypes = () => (
    <>
        <Message info marginBottom={2}>
            Hello there!
        </Message>
        <Message error marginBottom={2}>
            Hello there!
        </Message>
        <Message warning marginBottom={2}>
            Hello there!
        </Message>
        <Message success>Hello there!</Message>
    </>
);
