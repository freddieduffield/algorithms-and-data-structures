import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  it('should return the index of a given number', () => {
    expect(binarySearch(list, 7)).toEqual(7);
    expect(binarySearch(list, 0)).toEqual(0);
    expect(binarySearch(list, 12)).toEqual(12);
  });

  it('should return null is number is not found', () => {
    expect(binarySearch(list, 99)).toEqual(null);
  });
});
