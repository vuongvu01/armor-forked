import { makeBEM } from '@deliveryhero/armor-system';

import { ClassBasedOnComponentType } from '../components/Radio/type';

export const selectorClassGeneratorBasedOnComponent = ({
    component,
    classPrefix,
    disabled,
    checked,
    error,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    const stateClassNames: string[] = [];

    if (checked) {
        stateClassNames.push(makeBEM(classPrefix, component, 'checked'));
    }

    if (disabled) {
        stateClassNames.push(makeBEM(classPrefix, component, 'disabled'));
    }
    if (error) {
        stateClassNames.push(makeBEM(classPrefix, component, 'error'));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};
