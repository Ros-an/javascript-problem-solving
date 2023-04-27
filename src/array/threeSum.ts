/**
 * Three Sum
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique
 * triplets in the array which gives the sum of zero.
 *
 * Note:
 *
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */
/**
 * To solve this problem, one approach is to sort the array in ascending order and then use a combination of two-pointers and
 * iteration to find the triplets.The algorithm involves iterating through the sorted array and selecting a current element
 * as the potential first element of the triplet. Then, using two pointers (left and right), we search for the remaining two elements in
 * the subarray to the right of the current element. By adjusting the pointers based on the sum of the three elements,
 * we can find unique triplets that sum up to zero.To avoid duplicate triplets, we skip duplicate elements while iterating and
 * also while adjusting the pointers.
 */

export function threeSum(numbs: Array<number>): Array<Array<number>> {
    const triplets = [];
    // step 1: sort in ascending order, which will help avoid duplication later on
    numbs.sort((a, b) => a - b);

    // step 2: for each first element numbs[i], do a bidirectional search
    // - 2 because we'have pointers for last two element
    for (let i = 0; i < numbs.length - 2; i++) {
        // avoid duplication
        if (i === 0 || (i > 0 && numbs[i] !== numbs[i - 1])) {
            let left = i + 1;
            let right = numbs.length - 1;
            let target = 0 - numbs[i]; // for readablity purpose used `0`

            while (left < right) {
                const sum = numbs[left] + numbs[right];

                if (sum === target) {
                    triplets.push([numbs[i], numbs[left], numbs[right]]);

                    // skip duplication
                    while (left < right && numbs[left] === numbs[left + 1]) left++ ;
                    while (left < right && numbs[right] === numbs[right - 1]) right-- ;
                    left++;
                    right++;
                } else if (sum < target) { 
                    left++; // since sum is less, to get bigger sum, we move left pointer, as array is in ascending order
                } else {
                    right--;
                }
            }
        }
    }
    return triplets;
}
