import React, { ReactElement, ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';

import { ObjectLiteralType } from '../type';

export const renderJSON = (
    Element: ReactElement,
    props: ObjectLiteralType,
    id?: string,
    wrapper?: (node: ReactNode) => ReactElement,
) => {
    // @ts-ignore
    let element = <Element {...props} />;
    if (wrapper) {
        element = wrapper(element);
    }

    let tree = renderer.create(element).toJSON();

    if (id) {
        let failSafe = 10;
        while (failSafe > 0 && tree) {
            failSafe -= 1;

            // @ts-ignore
            if (tree.props.id === id || tree.props['data-testid']) {
                return tree;
            }

            // @ts-ignore
            if (!tree.children[0]) {
                return null;
            }

            // @ts-ignore
            // eslint-disable-next-line prefer-destructuring
            tree = tree.children[0];
        }
    }

    return tree;
};
