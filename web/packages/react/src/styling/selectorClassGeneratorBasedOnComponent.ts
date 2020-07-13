import { ClassBasedOnComponentType } from '../components/Radio/type';
import { makeBEM, makeClassName } from '../utils';

const selectorClassGeneratorBasedOnComponent = ({
    component,
    classPrefix,
    className,
    classNames,
    disabled,
    checked,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeClassName(classPrefix, className, classNames);

    const stateClassNames: string[] = [];

    if (checked) {
        stateClassNames.push(makeBEM(classPrefix, component, 'checked'));
    }

    if (disabled) {
        stateClassNames.push(makeBEM(classPrefix, component, 'disabled'));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

export default selectorClassGeneratorBasedOnComponent;
