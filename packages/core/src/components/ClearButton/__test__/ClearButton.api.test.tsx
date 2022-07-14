/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { render } from '@testing-library/react';

import { ClearButton, ClearButtonPropsType } from '..';

const setupComponent = (props: ClearButtonPropsType = {}) => {
    return render(<ClearButton {...props} />);
};

describe('<ClearButton />', () => {
    it('should render type="circle-filled" and state="enabled" as default', () => {
        const { container } = setupComponent();

        const icon = container.querySelector('.ClearButton-CircleFilledIcon');

        expect(icon).toHaveClass('ClearButton-CircleFilledIcon--enabled');
    });

    it('should render type="circle-filled"', () => {
        const { container } = setupComponent({
            type: 'circle-filled',
        });

        const icon = container.querySelector('.ClearButton-CircleFilledIcon');

        expect(icon).toBeInTheDocument();
    });

    it('should render type="circle-filled" and state="enabled"', () => {
        const { container } = setupComponent({
            type: 'circle-filled',
            state: 'enabled',
        });

        const icon = container.querySelector('.ClearButton-CircleFilledIcon');

        expect(icon).toHaveClass('ClearButton-CircleFilledIcon--enabled');
    });

    it('should render type="circle-filled" and state="hover"', () => {
        const { container } = setupComponent({
            type: 'circle-filled',
            state: 'hover',
        });

        const icon = container.querySelector('.ClearButton-CircleFilledIcon');

        expect(icon).toHaveClass('ClearButton-CircleFilledIcon--hover');
    });

    it('should render type="circle-filled" and state="pressed"', () => {
        const { container } = setupComponent({
            type: 'circle-filled',
            state: 'pressed',
        });

        const icon = container.querySelector('.ClearButton-CircleFilledIcon');

        expect(icon).toHaveClass('ClearButton-CircleFilledIcon--pressed');
    });

    it('should render type="circle-filled" and state="disabled"', () => {
        const { container } = setupComponent({
            type: 'circle-filled',
            state: 'disabled',
        });

        const icon = container.querySelector('.ClearButton-CircleFilledIcon');

        expect(icon).toHaveClass('ClearButton-CircleFilledIcon--disabled');
    });

    it('should render type="thin"', () => {
        const { container } = setupComponent({
            type: 'thin',
        });

        const icon = container.querySelector('.ClearButton-ThinIcon');

        expect(icon).toBeInTheDocument();
    });

    it('should render type="thin" and state="enabled"', () => {
        const { container } = setupComponent({
            type: 'thin',
            state: 'enabled',
        });

        const icon = container.querySelector('.ClearButton-ThinIcon');

        expect(icon).toHaveClass('ClearButton-ThinIcon--enabled');
    });

    it('should render type="thin" and state="hover"', () => {
        const { container } = setupComponent({
            type: 'thin',
            state: 'hover',
        });

        const icon = container.querySelector('.ClearButton-ThinIcon');

        expect(icon).toHaveClass('ClearButton-ThinIcon--hover');
    });

    it('should render type="thin" and state="pressed"', () => {
        const { container } = setupComponent({
            type: 'thin',
            state: 'pressed',
        });

        const icon = container.querySelector('.ClearButton-ThinIcon');

        expect(icon).toHaveClass('ClearButton-ThinIcon--pressed');
    });

    it('should render type="thin" and state="disabled"', () => {
        const { container } = setupComponent({
            type: 'thin',
            state: 'disabled',
        });

        const icon = container.querySelector('.ClearButton-ThinIcon');

        expect(icon).toHaveClass('ClearButton-ThinIcon--disabled');
    });

    it('should render type=circle-filled and iconSize=medium', () => {
        const { container } = setupComponent({
            type: 'circle-filled',
            iconSize: 'medium',
        });

        const icon = container.querySelector('.ClearButton-CircleFilledIcon');

        expect(icon).toHaveClass('ClearButton-CircleFilledIcon--medium');
    });

    it('should render type=thin and iconSize=medium', () => {
        const { container } = setupComponent({
            type: 'thin',
            iconSize: 'medium',
        });

        const icon = container.querySelector('.ClearButton-ThinIcon');

        expect(icon).toHaveClass('ClearButton-ThinIcon--medium');
    });

    it('should render size=medium', () => {
        const { container } = setupComponent({
            size: 'medium',
        });

        const root = container.querySelector('.ClearButton-Root');

        expect(root).toHaveClass('ClearButton-Root--medium');
    });

    it('should render size=large', () => {
        const { container } = setupComponent({
            size: 'large',
        });

        const root = container.querySelector('.ClearButton-Root');

        expect(root).toHaveClass('ClearButton-Root--large');
    });
});
