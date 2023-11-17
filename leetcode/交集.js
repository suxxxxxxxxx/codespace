var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const intersectionSet = new Set([...set1].filter(x => set2.has(x)));

    return Array.from(intersectionSet);
};
