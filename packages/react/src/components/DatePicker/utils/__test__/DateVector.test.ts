import { DateVector } from '../DateVector';

describe('DateVector', () => {
    it('should be created from a structure', async () => {
        const vector = DateVector.createFromStructure({
            year: 2021,
            month: 4,
            day: 18,
        });

        expect(vector.timeStamp).toEqual(1621296000000);
    });
});
