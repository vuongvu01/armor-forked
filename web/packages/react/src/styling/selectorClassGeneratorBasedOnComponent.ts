import { ClassBasedOnComponentType } from '../components/Radio/type';
import { makeBEM, makeClassName } from '../utils';

const selectorClassGeneratorBasedOnComponent = ({
    component,
    classPrefix,
    className,
    classNames,
    disabled,
    checked,
    error,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeClassName(classPrefix, className, classNames);

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

export default selectorClassGeneratorBasedOnComponent;
