import { useMemo } from 'react';

import { StepperPieceVariant } from '../type';
import { appendClassName, makeRootClassName, makeBEM } from '../../../../utils';

export const useStepClassNames = (
    classPrefix: string,
    className?: string,
    variant?: StepperPieceVariant,
) =>
    useMemo(() => {
        return {
            Root: appendClassName(
                makeRootClassName(classPrefix, className),
                makeBEM(classPrefix, 'Root', variant),
            ),
            Wrapper: makeBEM(classPrefix, 'Wrapper'),
            Button: makeBEM(classPrefix, 'Button'),
            Icon: makeBEM(classPrefix, 'Icon'),
            Number: makeBEM(classPrefix, 'Number'),
            Content: makeBEM(classPrefix, 'Content'),
            Title: makeBEM(classPrefix, 'Title'),
            Description: makeBEM(classPrefix, 'Description'),
            Line: makeBEM(classPrefix, 'Line'),
            Piece: makeBEM(classPrefix, 'Piece'),
        };
    }, [classPrefix, className, variant]);
