import {selectionSort} from './selectionSort';

describe('selectionSort', () => {
    it('should sort an array of unordered numbers', () => {
        expect(selectionSort([9, 8, 7, 6, 5, 2, 3, 4])).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should sort an array contain minus numbers', () => {
        expect(selectionSort([2, 5, 3, -1, -8, 20, -40])).toEqual([-40, -8, -1, 2, 3, 5, 20])
    });
});
