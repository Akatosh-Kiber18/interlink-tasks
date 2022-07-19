export function findMedianSortedArrays (nums1, nums2) {
    if (nums1.length>0 && nums2.length>0){
        let l = nums1.concat(nums2).length
        let lowerThan = (a,b) => a < b ? -1 : 1;
        let nums3 = (nums1.concat(nums2)).sort(lowerThan)
        return l % 2 === 0 ? (nums3[l/2] +nums3[l/2-1]) / 2 : nums3[Math.ceil(l/2)-1]
    }
    if (nums1.length > 0 && nums2.length === 0) {
        let l1 = nums1.length
        return l1% 2 === 0 ? (nums1[Math.ceil(l1/2)] +nums1[Math.ceil(l1/2)-1]) / 2 : nums1[Math.ceil(l1/2)-1]
    }
    if (nums1.length === 0 && nums2.length > 0) {
        let l2 = nums2.length
        return l2% 2 ===0 ? (nums2[Math.ceil(l2/2)] +nums2[Math.ceil(l2/2)-1]) / 2 : nums2[Math.ceil(l2/2)-1]
    }

    return null
}
