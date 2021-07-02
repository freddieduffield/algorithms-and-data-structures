"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        if (guess === item) {
            return mid;
        }
        if (guess > item) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return null;
}
exports.binarySearch = binarySearch;
//# sourceMappingURL=binarySearch.js.map