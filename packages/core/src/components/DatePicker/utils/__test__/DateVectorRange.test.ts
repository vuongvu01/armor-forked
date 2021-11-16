import { DateVectorRange } from '../DateVectorRange';
import { DateVector } from '../DateVector';
import { DATE_PICKER_INFINITY } from '../../constants';

const makeDate = (day: number) => new Date(2021, 7, day, 10, 4, 0, 100);

describe('DateVectorRange', () => {
    it('should support normal initializers', async () => {
        const localDateA = makeDate(10);
        const localDateB = makeDate(12);

        const range = DateVectorRange.createFromLocalDateRange([
            localDateA,
            localDateB,
        ]);

        expect(
            range.dateStart?.isEqualTo(
                DateVector.createFromLocalDate(makeDate(10)),
            ),
        );
        expect(
            range.dateStart?.isEqualTo(
                DateVector.createFromLocalDate(makeDate(12)),
            ),
        );
    });

    it('should support infinite initializers', async () => {
        const localDateCurrent = makeDate(7);
        const localDateCurrentVector = DateVector.createFromLocalDate(
            localDateCurrent,
        );

        const localDateA = makeDate(10);
        const localDateB = makeDate(12);

        let range = DateVectorRange.createFromLocalDateAdvancedRange(
            [localDateA, DATE_PICKER_INFINITY],
            localDateCurrentVector,
        );

        expect(range.isInfiniteStart()).toBeFalsy();
        expect(range.isInfiniteEnd()).toBeTruthy();

        range = DateVectorRange.createFromLocalDateAdvancedRange(
            [DATE_PICKER_INFINITY, localDateB],
            localDateCurrentVector,
        );

        expect(range.isInfiniteStart()).toBeTruthy();
        expect(range.isInfiniteEnd()).toBeFalsy();

        range = DateVectorRange.createFromLocalDateAdvancedRange(
            [DATE_PICKER_INFINITY, DATE_PICKER_INFINITY],
            localDateCurrentVector,
        );

        expect(range.isInfiniteStart()).toBeTruthy();
        expect(range.isInfiniteEnd()).toBeTruthy();
    });

    it('should support current date initializers', async () => {
        const localDateCurrent = makeDate(7);
        const localDateCurrentVector = DateVector.createFromLocalDate(
            localDateCurrent,
        );

        const range = DateVectorRange.createFromLocalDateAdvancedRange(
            ['current', 'current'],
            localDateCurrentVector,
        );

        expect(range.isFlat()).toBeTruthy();
        expect(
            range.dateStart?.isEqualTo(
                DateVector.createFromLocalDate(makeDate(7)),
            ),
        );
        expect(
            range.dateEnd?.isEqualTo(
                DateVector.createFromLocalDate(makeDate(7)),
            ),
        );
    });
});
