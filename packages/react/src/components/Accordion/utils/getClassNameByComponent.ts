import { ClassBasedOnComponentType } from '../type';
import { makeBEM } from '../../../utils';

const getClassNameByComponent = ({
    component,
    classPrefix,
    disabled,
    expanded,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    const stateClassNames: string[] = [];

    if (disabled) {
        stateClassNames.push(makeBEM(classPrefix, component, 'disabled'));
    }

    if (expanded) {
        stateClassNames.push(makeBEM(classPrefix, component, 'expanded'));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

export default getClassNameByComponent;
