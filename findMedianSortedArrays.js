export function findMedianSortedArrays (nums1, nums2) {
    if (nums1.length>0 && nums2.length>0){
        let l = nums1.concat(nums2).length
        let nums3 = (nums1.concat(nums2)).sort()
        return l % 2 === 0 ? (nums3[l/2] +nums3[l/2-1]) / 2 : nums3[Math.ceil(l/2)-1]
    }
    if (nums1.length === 0 && nums2.length > 0) {
        return nums2.length% 2 ===0 ? (nums2[Math.ceil(nums2.length/2)] +nums2[Math.ceil(nums2.length/2)-1]) / 2 :nums2[Math.ceil(nums2.length/2)-1]
    }
    if (nums1.length > 0 && nums2.length === 0) {
        return nums1.length% 2 ===0 ? (nums1[Math.ceil(nums1.length/2)] +nums1[Math.ceil(nums1.length/2)-1]) / 2 :nums1[Math.ceil(nums1.length/2)-1]
    }
    return null
}