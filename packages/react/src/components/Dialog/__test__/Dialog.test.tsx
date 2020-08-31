/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import {
    cleanup,
    render,
    screen,
    fireEvent,
    wait,
    waitForElement,
} from '@testing-library/react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '../..';
import { dialogTitleText } from '../../DialogTitle/constants';
import { dialogCloseButton } from '../constants';

const baseDialog = (
    <Dialog open={true} wide={false}>
        <DialogTitle>New location</DialogTitle>
        <DialogContent>Hello world!</DialogContent>
        <DialogActions>
            <Button tertiary>Cancel</Button>
            <Button>Save</Button>
        </DialogActions>
    </Dialog>
);

describe('<Dialog />', () => {
    beforeAll(() => {
        // @ts-ignore
        ReactDOM.createPortal = jest.fn(element => element);
    });

    afterEach(async () => {
        cleanup();
        // @ts-ignore
        ReactDOM.createPortal.mockClear();
    });

    it('should render itself without errors', async () => {
        render(<Dialog />);
    });

    it('should ensure that title typography is as in the spec', () => {
        render(baseDialog);

        const headerTitle = screen.getByTestId(dialogTitleText);
        expect(headerTitle).toBeInstanceOf(HTMLHeadingElement);
        expect(headerTitle).toHaveClass(
            'DialogTitle-Text Typography-Root--subSectionTitle',
        );
    });

    it('should ensure that the correct classes are set', () => {
        render(baseDialog);

        const header = screen.getByTestId(dialogCloseButton);
        expect(header).toHaveClass('Dialog-CloseButton');
    });

    it('should close itself by pressing ESC', async () => {
        const onClose = jest.fn();

        const { getByTestId } = render(
            <Dialog open onClose={onClose}>
                <button data-testid="hello-btn">Hello</button>
            </Dialog>,
        );

        const button = await waitForElement(() => getByTestId('hello-btn'));

        fireEvent.keyDown(button, { key: 'Escape', code: 'Escape' });

        await wait(() => {
            expect(onClose).toHaveBeenCalled();
        });
    });
});
