import { ClassBasedOnComponentType } from '../type';
import { makeBEM, makeClassName } from '../../../utils';

const getClassNameByComponent = ({
    component,
    classPrefix,
    className,
    classNames,
    disabled,
    expanded,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeClassName(
        classPrefix,
        className,
        classNames,
        component,
    );

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
