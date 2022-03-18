function twoSumBruteForce(nums: number[], target: number) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        return [i, j];
      }
    }
  }
}

function twoSumMap(nums: number[], target: number) {
  let map = new Map();

  for (var i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (map.has(complement) && map.get(complement) != i) {
      return [i, map.get(complement)];
    }
  }
}
