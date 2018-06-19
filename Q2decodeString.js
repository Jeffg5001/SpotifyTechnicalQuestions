function decodeString(s){
    let repeatString = ''
    for(let i = s.length - 1; i >= 0; i--){
        if(/\d/.test(s[i])){
            let temp = ''
            for(let j = 0; j < +s[i]; j++){
                temp += repeatString
            }
            repeatString = temp
        }
        else if(s[i] !== ']'){
            while(s[i] !== '['){
                repeatString = s[i] + repeatString
                i--
            }
        }
    }
    return repeatString
}
console.log(decodeString('3[bl2[a]]'))