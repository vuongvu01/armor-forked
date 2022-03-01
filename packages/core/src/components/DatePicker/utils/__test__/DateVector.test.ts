import { DateVector } from '../DateVector';

const makeDate = (day: number) => new Date(2021, 7, day, 10, 4, 0, 100);

describe('DateVector', () => {
    it('should be created from a structure', async () => {
        const vector = DateVector.createFromStructure({
            year: 2021,
            month: 4,
            day: 18,
        });

        expect(vector.timeStamp).toEqual(1621296000000);
    });

    it('should be created from a meta string', async () => {
        const localDateCurrent = makeDate(7);
        const localDateCurrentVector =
            DateVector.createFromLocalDate(localDateCurrent);

        let vector = DateVector.createFromMetaString('current', {
            currentDateVector: localDateCurrentVector,
        });
        expect(vector).not.toBeNull();
        expect(
            vector!.isEqualTo(DateVector.createFromLocalDate(localDateCurrent)),
        );

        vector = DateVector.createFromMetaString('current+2', {
            currentDateVector: localDateCurrentVector,
        });
        expect(vector).not.toBeNull();
        expect(vector!.isEqualTo(DateVector.createFromLocalDate(makeDate(9))));

        vector = DateVector.createFromMetaString('current-2', {
            currentDateVector: localDateCurrentVector,
        });
        expect(vector).not.toBeNull();
        expect(vector!.isEqualTo(DateVector.createFromLocalDate(makeDate(5))));

        vector = DateVector.createFromMetaString('current*1000', {
            currentDateVector: localDateCurrentVector,
        });
        expect(vector).not.toBeNull();
        expect(
            vector!.isEqualTo(DateVector.createFromLocalDate(localDateCurrent)),
        );

        vector = DateVector.createFromMetaString('nonsense', {
            currentDateVector: localDateCurrentVector,
        });
        expect(vector).toBeNull();
    });
});
