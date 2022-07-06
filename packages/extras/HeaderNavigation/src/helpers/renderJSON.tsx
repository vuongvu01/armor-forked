import React, { ReactElement, ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

/**
 * @deprecated
 * @use renderJSONAlt()
 */
export const renderJSON = (
    Element: ReactElement,
    props: Record<string, any>,
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

export const renderJSONAlt = (
    element: ReactElement,
    props?: { className?: string },
) => {
    const tree = renderer.create(element).toJSON() as ReactTestRendererJSON;

    if (props && 'className' in props) {
        const { className } = props;

        if (className) {
            // we can only operate JSON, not testInstance, because toHaveStyleRule accepts only JSON
            // therefore, functions like findByProps() can not be used :(
            const queue: ReactTestRendererJSON[] = [];
            queue.push(tree);

            while (queue.length) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const next = queue.shift()!;

                const classNames = next.props.className;
                if (
                    typeof classNames === 'string' &&
                    classNames.includes(className)
                ) {
                    return next;
                }

                if (next.children) {
                    next.children.forEach((child) => {
                        if (typeof child !== 'string') {
                            queue.push(child);
                        }
                    });
                }
            }

            return null;
        }
    }

    return tree;
};
