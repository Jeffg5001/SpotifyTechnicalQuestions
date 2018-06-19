function sortByStrings(s, t){
let strArray = s.split('')
return strArray.sort((a, b)=>{
    return t.indexOf(a) - t.indexOf(b)
}).join('')
}

console.log(sortByStrings('weather', 'therapyw'))