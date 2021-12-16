import { sortBy } from '../useSortedList';

const inputList = [
    { id: 'b', rank: 3, unknown: {} },
    { id: 'a', rank: 2, unknown: {} },
    { id: 'd', rank: 4, unknown: {} },
    { id: 'c', rank: 1, unknown: {} },
];

describe('useSortedList', () => {
    describe('sortBy', () => {
        it('should sort by a string property', () => {
            const input = [...inputList];

            const expected = [
                { id: 'a', rank: 2, unknown: {} },
                { id: 'b', rank: 3, unknown: {} },
                { id: 'c', rank: 1, unknown: {} },
                { id: 'd', rank: 4, unknown: {} },
            ];

            expect(input.sort(sortBy('id'))).toEqual(expected);
        });

        it('should sort by a number property', () => {
            const input = [...inputList];

            const expected = [
                { id: 'c', rank: 1, unknown: {} },
                { id: 'a', rank: 2, unknown: {} },
                { id: 'b', rank: 3, unknown: {} },
                { id: 'd', rank: 4, unknown: {} },
            ];

            expect(input.sort(sortBy('rank'))).toEqual(expected);
        });

        it('should NOT sort with an unknown property', () => {
            const input = [...inputList];

            const expected = [...inputList];

            expect(input.sort(sortBy('unknown'))).toEqual(expected);
        });
    });
});
