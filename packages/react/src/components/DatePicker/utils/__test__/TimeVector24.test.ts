import { TimeVector24 } from '../TimeVector24';

describe('TimeVector24', () => {
    it('should convert military time to civilian', async () => {
        expect(new TimeVector24(0, 0).convertTo12().toJSON()).toMatchObject({
            hour: 12,
            minute: 0,
            mode: 'am',
        });
        expect(new TimeVector24(1, 0).convertTo12().toJSON()).toMatchObject({
            hour: 1,
            minute: 0,
            mode: 'am',
        });
        expect(new TimeVector24(2, 0).convertTo12().toJSON()).toMatchObject({
            hour: 2,
            minute: 0,
            mode: 'am',
        });
        expect(new TimeVector24(3, 0).convertTo12().toJSON()).toMatchObject({
            hour: 3,
            minute: 0,
            mode: 'am',
        });
        expect(new TimeVector24(4, 0).convertTo12().toJSON()).toMatchObject({
            hour: 4,
            minute: 0,
            mode: 'am',
        });
        expect(new TimeVector24(5, 0).convertTo12().toJSON()).toMatchObject({
            hour: 5,
            minute: 0,
            mode: 'am',
        });
        expect(new TimeVector24(6, 0).convertTo12().toJSON()).toMatchObject({
            hour: 6,
            minute: 0,
            mode: 'am',
        });
        expect(new TimeVector24(7, 0).convertTo12().toJSON()).toMatchObject({
            hour: 7,
            minute: 0,
            mode: 'am',
        });
        expect(new TimeVector24(8, 0).convertTo12().toJSON()).toMatchObject({
            hour: 8,
            minute: 0,
            mode: 'am',
        });
        expect(new TimeVector24(9, 0).convertTo12().toJSON()).toMatchObject({
            hour: 9,
            minute: 0,
            mode: 'am',
        });
        expect(new TimeVector24(10, 0).convertTo12().toJSON()).toMatchObject({
            hour: 10,
            minute: 0,
            mode: 'am',
        });
        expect(new TimeVector24(11, 0).convertTo12().toJSON()).toMatchObject({
            hour: 11,
            minute: 0,
            mode: 'am',
        });
        expect(new TimeVector24(12, 0).convertTo12().toJSON()).toMatchObject({
            hour: 12,
            minute: 0,
            mode: 'pm',
        });
        expect(new TimeVector24(13, 0).convertTo12().toJSON()).toMatchObject({
            hour: 1,
            minute: 0,
            mode: 'pm',
        });
        expect(new TimeVector24(14, 0).convertTo12().toJSON()).toMatchObject({
            hour: 2,
            minute: 0,
            mode: 'pm',
        });
        expect(new TimeVector24(15, 0).convertTo12().toJSON()).toMatchObject({
            hour: 3,
            minute: 0,
            mode: 'pm',
        });
        expect(new TimeVector24(16, 0).convertTo12().toJSON()).toMatchObject({
            hour: 4,
            minute: 0,
            mode: 'pm',
        });
        expect(new TimeVector24(17, 0).convertTo12().toJSON()).toMatchObject({
            hour: 5,
            minute: 0,
            mode: 'pm',
        });
        expect(new TimeVector24(18, 0).convertTo12().toJSON()).toMatchObject({
            hour: 6,
            minute: 0,
            mode: 'pm',
        });
        expect(new TimeVector24(19, 0).convertTo12().toJSON()).toMatchObject({
            hour: 7,
            minute: 0,
            mode: 'pm',
        });
        expect(new TimeVector24(20, 0).convertTo12().toJSON()).toMatchObject({
            hour: 8,
            minute: 0,
            mode: 'pm',
        });
        expect(new TimeVector24(21, 0).convertTo12().toJSON()).toMatchObject({
            hour: 9,
            minute: 0,
            mode: 'pm',
        });
        expect(new TimeVector24(22, 0).convertTo12().toJSON()).toMatchObject({
            hour: 10,
            minute: 0,
            mode: 'pm',
        });
        expect(new TimeVector24(23, 0).convertTo12().toJSON()).toMatchObject({
            hour: 11,
            minute: 0,
            mode: 'pm',
        });
    });
});
