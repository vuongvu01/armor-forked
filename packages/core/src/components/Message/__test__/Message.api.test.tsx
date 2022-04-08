/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { cleanup, render, fireEvent } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { Message, MessageAction } from '..';

describe('<Message />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render children text', async () => {
        const { getByText } = render(<Message>message_content</Message>);
        expect(getByText('message_content')).toBeInTheDocument();
    });

    it('should render icon', async () => {
        const FakeIcon = () => <div>fake_icon</div>;
        const { getByText } = render(<Message iconTag={FakeIcon} />);
        expect(getByText('fake_icon')).toBeInTheDocument();
    });

    it('should disable icon', async () => {
        const FakeIcon = () => <div>fake_icon</div>;
        const { queryByText } = render(
            <Message disableIcon iconTag={FakeIcon} />,
        );
        expect(queryByText('fake_icon')).not.toBeInTheDocument();
    });

    it('should render action and trigger onClick', async () => {
        const fakeHandleClick = jest.fn();
        const Action = (
            <MessageAction onClick={fakeHandleClick}>
                message_action
            </MessageAction>
        );
        const { getByText } = render(<Message actions={Action} />);
        const actionLink = getByText('message_action');

        fireEvent.click(actionLink);
        expect(actionLink).toBeInTheDocument();
        expect(fakeHandleClick).toHaveBeenCalledTimes(1);
    });

    it('should render extra', async () => {
        const Extra = <div>message_extra</div>;
        const { getByText } = render(<Message extra={Extra} />);
        expect(getByText('message_extra')).toBeInTheDocument();
    });

    it('should trigger onClose', async () => {
        const fakeHandleClose = jest.fn();
        const { getByTestId } = render(<Message onClose={fakeHandleClose} />);

        fireEvent.click(getByTestId('Message-CloseButton'));
        expect(fakeHandleClose).toHaveBeenCalledTimes(1);
    });
});
