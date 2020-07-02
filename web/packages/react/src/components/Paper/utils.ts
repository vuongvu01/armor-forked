import { useMemo } from 'react';
import { PaperStylesPropsType } from './type';
import { returnEmptyString, makeBEM, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useStylesOverridePaper = (
    styles?: PaperStylesPropsType,
): Required<PaperStylesPropsType> =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useClassNamePaper = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    exampleProperty?: boolean,
) =>
    useMemo(() => {
        const baseClassNames = makeClassName(
            classPrefix,
            className,
            classNames,
        );
        const stateClassNames: string[] = [];
        if (exampleProperty) {
            stateClassNames.push(makeBEM(classPrefix, 'root', 'example'));
        }

        return `${baseClassNames} ${stateClassNames.join(' ')}`;
    }, [classPrefix, className, classNames, exampleProperty]);
