import { TimeVector12 } from '../TimeVector12';

describe('TimeVector12', () => {
    it('should covert civilian time to military', async () => {
        expect(
            new TimeVector12(12, 0, 'am').convertTo24().toJSON(),
        ).toMatchObject({ hour: 0, minute: 0 });
        expect(
            new TimeVector12(1, 0, 'am').convertTo24().toJSON(),
        ).toMatchObject({ hour: 1, minute: 0 });
        expect(
            new TimeVector12(2, 0, 'am').convertTo24().toJSON(),
        ).toMatchObject({ hour: 2, minute: 0 });
        expect(
            new TimeVector12(3, 0, 'am').convertTo24().toJSON(),
        ).toMatchObject({ hour: 3, minute: 0 });
        expect(
            new TimeVector12(4, 0, 'am').convertTo24().toJSON(),
        ).toMatchObject({ hour: 4, minute: 0 });
        expect(
            new TimeVector12(5, 0, 'am').convertTo24().toJSON(),
        ).toMatchObject({ hour: 5, minute: 0 });
        expect(
            new TimeVector12(6, 0, 'am').convertTo24().toJSON(),
        ).toMatchObject({ hour: 6, minute: 0 });
        expect(
            new TimeVector12(7, 0, 'am').convertTo24().toJSON(),
        ).toMatchObject({ hour: 7, minute: 0 });
        expect(
            new TimeVector12(8, 0, 'am').convertTo24().toJSON(),
        ).toMatchObject({ hour: 8, minute: 0 });
        expect(
            new TimeVector12(9, 0, 'am').convertTo24().toJSON(),
        ).toMatchObject({ hour: 9, minute: 0 });
        expect(
            new TimeVector12(10, 0, 'am').convertTo24().toJSON(),
        ).toMatchObject({ hour: 10, minute: 0 });
        expect(
            new TimeVector12(11, 0, 'am').convertTo24().toJSON(),
        ).toMatchObject({ hour: 11, minute: 0 });

        expect(
            new TimeVector12(12, 0, 'pm').convertTo24().toJSON(),
        ).toMatchObject({ hour: 12, minute: 0 });
        expect(
            new TimeVector12(1, 0, 'pm').convertTo24().toJSON(),
        ).toMatchObject({ hour: 13, minute: 0 });
        expect(
            new TimeVector12(2, 0, 'pm').convertTo24().toJSON(),
        ).toMatchObject({ hour: 14, minute: 0 });
        expect(
            new TimeVector12(3, 0, 'pm').convertTo24().toJSON(),
        ).toMatchObject({ hour: 15, minute: 0 });
        expect(
            new TimeVector12(4, 0, 'pm').convertTo24().toJSON(),
        ).toMatchObject({ hour: 16, minute: 0 });
        expect(
            new TimeVector12(5, 0, 'pm').convertTo24().toJSON(),
        ).toMatchObject({ hour: 17, minute: 0 });
        expect(
            new TimeVector12(6, 0, 'pm').convertTo24().toJSON(),
        ).toMatchObject({ hour: 18, minute: 0 });
        expect(
            new TimeVector12(7, 0, 'pm').convertTo24().toJSON(),
        ).toMatchObject({ hour: 19, minute: 0 });
        expect(
            new TimeVector12(8, 0, 'pm').convertTo24().toJSON(),
        ).toMatchObject({ hour: 20, minute: 0 });
        expect(
            new TimeVector12(9, 0, 'pm').convertTo24().toJSON(),
        ).toMatchObject({ hour: 21, minute: 0 });
        expect(
            new TimeVector12(10, 0, 'pm').convertTo24().toJSON(),
        ).toMatchObject({ hour: 22, minute: 0 });
        expect(
            new TimeVector12(11, 0, 'pm').convertTo24().toJSON(),
        ).toMatchObject({ hour: 23, minute: 0 });
    });
});
