const twoSum = (nums,target) => {
    if(!Array.isArray(nums))
    {
        return "Only array is allowed as input";
    }
    var dictionary = {};
    for(let i = 0; i < nums.length; i++)
    {
        if(!dictionary.hasOwnProperty(target - nums[i]))
        {
            dictionary[nums[i]] = i;
        }
        else
        {
            return [dictionary[target - nums[i]], i];
        }
    }
};

console.log(twoSum([2,7,11,15], 9)) 