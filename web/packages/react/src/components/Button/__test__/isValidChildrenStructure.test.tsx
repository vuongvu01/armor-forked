import React, { ReactNode } from 'react';

import { isValidChildrenStructure } from '../utils';

describe('isValidChildrenStructure', () => {
    it('should allow to render a button with a label', async () => {
        const children = 'Submit';

        expect(isValidChildrenStructure(children)).toEqual(true);
    });

    it('should allow to render a button with an icon', async () => {
        const Icon = React.createElement('MaterialIcon', { icon: 'edit' });

        expect(isValidChildrenStructure(Icon)).toEqual(true);
    });

    it('should allow to render a button with an icon followed by a label', async () => {
        const Icon = React.createElement('MaterialIcon', { icon: 'edit' });

        const children = [Icon, 'Submit'];

        expect(isValidChildrenStructure(children)).toEqual(true);
    });

    it('should allow to render a button with a label followed by an icon', async () => {
        const Icon = React.createElement('MaterialIcon', { icon: 'edit' });

        const children = ['Submit', Icon];

        expect(isValidChildrenStructure(children)).toEqual(true);
    });

    it('should not allow to render a button with no children', async () => {
        expect(isValidChildrenStructure(null)).toEqual(false);
        expect(isValidChildrenStructure([])).toEqual(false);
        expect(isValidChildrenStructure(<></>)).toEqual(false);
    });

    it('should not allow to render a button with a node that is not an icon', async () => {
        const NotIcon = React.createElement('span', { icon: 'edit' });

        expect(isValidChildrenStructure(NotIcon)).toEqual(false);
    });

    it('should not allow to render a button with a label that is not a primitive string', async () => {
        const NotIcon = (): ReactNode => <span>Submit</span>;

        expect(isValidChildrenStructure(NotIcon)).toEqual(false);
    });

    it('should not allow to render a button with 2 icons', async () => {
        const Icon1 = React.createElement('MaterialIcon', { icon: 'edit' });
        const Icon2 = React.createElement('MaterialIcon', { icon: 'delete' });

        const children = [Icon1, Icon2];

        expect(isValidChildrenStructure(children)).toEqual(false);
    });

    it('should not allow to render a button with children count > 2', async () => {
        const children = [
            'Submit',
            <br key="key1" />,
            'this',
            <br key="key2" />,
            'form',
        ];

        expect(isValidChildrenStructure(children)).toEqual(false);
    });
});
