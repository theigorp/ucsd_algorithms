var wiggleMaxLength = function(nums) {
    let elementsToRemove = 0;
    const differences = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1] || nums[i] < nums[i + 1]) {
          
        }
    }
    // console.log(differences)
    // for (let i = 0; i < differences.length; i++) {
    //     if (differences[i] >= 0 && differences[i + 1] >= 0 || differences[i] <= 0 && differences[i + 1] <= 0) {
    //         console.log('aa')
    //         elementsToRemove++;
    //     }
    // }

    return nums.length - elementsToRemove;
};