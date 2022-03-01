import { StepPropsType, StepperPieceVariant } from '../type';

export const getStepVariantByStatus = ({
    warning,
    error,
    success,
    info,
}: Pick<StepPropsType, 'warning' | 'error' | 'success' | 'info'>) => {
    if (warning) {
        return StepperPieceVariant.warning;
    }
    if (error) {
        return StepperPieceVariant.error;
    }
    if (success) {
        return StepperPieceVariant.success;
    }
    if (info) {
        return StepperPieceVariant.info;
    }
    return StepperPieceVariant.log;
};
