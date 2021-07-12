import {quickSort} from './quickSort';

describe('quickSort', () => {
    it('should sort an array of unordered numbers', () => {
        expect(quickSort([9, 8, 7, 6, 5, 2, 3, 4])).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should sort an array contain minus numbers', () => {
        expect(quickSort([2, 5, 3, -1, -8, 20, -40])).toEqual([-40, -8, -1, 2, 3, 5, 20])
    });
});
