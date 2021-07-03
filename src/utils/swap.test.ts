import {legacySwap, swap} from "./swap";

describe('swap', () => {
    let array: number[];

   beforeEach(() => {
    array = [1, 2];
   })

   describe('ES6 swap', () => {
       it('should swap numbers', () => {
          expect(swap(array,0, 1)).toEqual([2,1]);
       });
   });

   describe('legacy swap', () => {
       it('should swap numbers', () => {
           expect(legacySwap(array,0, 1)).toEqual([2,1]);
       });
   });
});