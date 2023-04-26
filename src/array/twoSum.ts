/**
 * The "Two Sum" problem requires finding two numbers in an array that add up to a specific target.
 * It is assumed that there is only one possible solution and each element can only be used once.
 * For example, given the array "nums" of integers [2, 7, 11, 15] and a target of 9, 
 * the output should be [0, 1], because nums[0] + nums[1] = 2 + 7 = 9.
 * 
 * To solve this problem, one approach is to use a hash table to store the difference between the target and each element in the array. 
 * Then, as we traverse the array, we can check if the current element's complement 
 * (i.e., the difference between the target and the current element) is already in the hash table.
 *  If it is, we have found the two numbers that add up to the target. 
 * If not, we add the current element and its index to the hash table and continue.
 */

export function twoSum(nums: Array<number>, target:number):number[] | null {
    const map:any = {};

    for (let i = 0; i < nums.length; i++) {
        let another = target - nums[i];
        if(another in map){
            return [map[another], i];
        }
        map[nums[i]] = i;
    }
    return null;
}