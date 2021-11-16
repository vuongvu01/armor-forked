import {
    makeBEM,
    appendBEMModifier,
    appendBEMModifierOnCondition,
} from '../bem';

describe('BEM', () => {
    describe('makeBEM', () => {
        it('should make BEM declaration', async () => {
            expect(makeBEM('Root', 'Element')).toEqual('Root-Element');
            expect(makeBEM('Root', 'Element', 'disabled')).toEqual(
                'Root-Element--disabled',
            );
        });
    });

    describe('appendBEMModifier', () => {
        it('should attach BEM modifier', async () => {
            expect(appendBEMModifier('Element', 'disabled')).toEqual(
                'Element--disabled',
            );
        });
    });

    describe('appendBEMModifierOnCondition', () => {
        it('should attach BEM modifier', async () => {
            expect(
                appendBEMModifierOnCondition('Element', 'disabled', true),
            ).toEqual('Element--disabled');
            expect(
                appendBEMModifierOnCondition('Element', 'disabled', false),
            ).toEqual('');
        });
    });
});
