function changePossibilities( ammount, denominations){
    let results = []
    function isRepeat(arr){
        let result = false;
        results.forEach(group=>{
            for(let i = 0; i<group.length; i++){
                if(group[i] !== arr[i]){
                    return
                }
            }
            result = true
        })
        return result
    }
    function changePossibilitiesArray(coins = [], denominations){
        const coinTotal = coins.reduce((a,b)=>a+b,0)
        if(coinTotal === ammount){
            coins.sort()
            if(!isRepeat(coins)){
                results.push(coins)
            }
        }
        else if(coinTotal > ammount){
            return
        }
        denominations.forEach(denomination =>
        changePossibilitiesArray([...coins, denomination], denominations))
    }
    changePossibilitiesArray([],denominations)
    return results.length
}
console.log(changePossibilities(21,[2,3,6,7,8]))