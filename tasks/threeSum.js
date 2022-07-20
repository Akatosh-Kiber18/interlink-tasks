export let threeSum = (n) => {
    n.sort((a, b) => a - b)
    let result = []
    if (n.length > 3) {
        for (let i = 0; i < n.length; i++) {
            for (let j = i + 1; j < n.length; j++) {
                for (let k = j+1; k < n.length; k++) {
                    if (n[i] + n[j] + n[k] === 0) {
                        let arr = [n[i],n[j],n[k]]
                        let checkArr = JSON.stringify(arr)
                        let checkResult = JSON.stringify(result)
                        if (checkResult.indexOf(checkArr) === -1){
                            result.push(arr)
                        }
                    }
                }
            }
        }
        return result
    }
    return n[0]+n[1]+n[2] === 0 ? [n] : result ;
}