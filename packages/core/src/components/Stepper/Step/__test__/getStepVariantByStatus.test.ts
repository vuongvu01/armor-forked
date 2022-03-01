import { StepperPieceVariant } from '../type';
import { getStepVariantByStatus } from '../utils';

describe('getStepVariantByStatus', () => {
    const data = [
        [{ warning: true }, StepperPieceVariant.warning],
        [{ error: true }, StepperPieceVariant.error],
        [{ success: true }, StepperPieceVariant.success],
        [{ info: true }, StepperPieceVariant.info],
        [{}, StepperPieceVariant.log],
    ];

    it.each(data)(
        'should return correct variant by status %s',
        // @ts-ignore
        (status, expected) => {
            // @ts-ignore
            expect(getStepVariantByStatus(status)).toBe(expected);
        },
    );
});
