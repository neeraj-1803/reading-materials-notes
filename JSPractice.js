function reverseString(str){
    let arr = str.split('');
    return arr.reverse().join('');
}

console.log(reverseString("hello"));

function isPalindrome(str){
    let arr = str.split('');
    let arr1 = [...arr];
    arr = arr.reverse();
    if(arr.join('') == arr1.join(''))
        return true;
    else
        return false;
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));

function reverseInt(str){
    let arr = str.toString().split('');
    return parseInt(arr.reverse().join(''))*Math.sign(str);
}

console.log(reverseInt(-521));

function capitalize(str){
    return str.toLowerCase().split(' ').map(function(e){
        return e[0].toUpperCase()+e.substring(1, e.length);
    }).join(' ');
}

console.log(capitalize("i love js"));

function maxChar(str){
    var charMap = {};
    let arr = str.split('');
    for(var i in arr){
        if(charMap.hasOwnProperty(arr[i])){
            charMap[arr[i]] = charMap[arr[i]] + 1;
        }else{
            charMap[arr[i]] = 1;
        }
    }
    const keys = Object.keys(charMap);
    let max = charMap[keys[0]];
    for(var i in keys){
        if(max < charMap[keys[i]])
            max = charMap[keys[i]];
    }
    return `${max} occurs max times`;
}

console.log(maxChar("javascript"));

function fizzBuzz(){
    for(var i=1; i<=100; i++){
        let fizz = false;
        let buzz = false;
        if(i%3 == 0){
            fizz = true;
        }
        if(i%5 == 0){
            buzz = true;
        }
        if(fizz && buzz){
            console.log("Fizzbuzz");
        }else if(fizz){
            console.log("Fizz");
        }else if(buzz){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
console.log(fizzBuzz());