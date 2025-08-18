/*
  *MEDIUM

  LOGIC:
  Formula for area is Math.min(height[l], height[r]) * (r - l). Use the 2 pointer approach and in each iteration calculate the area.
  Using Math.max, update the maxArea (init. set to 0) with the newest area if it's bigger. Check which height is bigger (left or right)
  and if h[l] <= h[r] l++; else r--;

  OPTIMIZATION:
  The runtime is O(n).
*/
function containerWithMostWater(height) {
    let maxContainerArea = 0;
    let l = 0;
    let r = height.length - 1;
    //* O(n)
    while (l < r) {
        const area = Math.min(height[l], height[r]) * (r - l);
        maxContainerArea = Math.max(maxContainerArea, area);
        if (height[l] <= height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return maxContainerArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([8,7,2,1]))