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

function longestWord(str){
    const arr = str.split(" ");
    let longest = arr[0];
    for(var i in arr){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest;
}

longestWord("THis is a test to test the Javascript code that is being written.")

function chunkArray(arr, len){
    let newArr = [];
    let tempArr = [];
    let j = 0;
    for(var i in arr){
        if(j<len){
            j++;
            tempArr.push(arr[i]);
        }else{
            newArr.push(tempArr);
            tempArr = [];
            tempArr.push(arr[i]);
            j = 1;
        }
    }
    if(tempArr.length > 0){
        newArr.push(tempArr);
    }
    return newArr;
}

chunkArray([1,2,2,2,3,4,5,5,5,3,2,2],3);

function flattenArray(arr){
    var newArr = [];
    for(var i in arr){
        if(Array.isArray(arr[i])){
            for(var j in arr[i]){
                newArr = [...newArr, arr[i][j]]
            }
        }else{
            newArr = [...newArr, arr[i]]
        }
    }
    return newArr;
}

flattenArray([[1, 2], [3, 4], [5, 6], [7]]);


function isAnagram(str1, str2) {
    str1 = str1.replace(/[^A-Za-z]/g, "").toLowerCase();
    str2 = str2.replace(/[^A-Za-z]/g, "").toLowerCase();
    if(str1.length != str2.length) return false;
    var arr1 = str1.split('');
    var arr2 = str2.split('');
    let count = 0;
    for(var i in arr1){
        for(var j in arr2){
            if(arr1[i] == arr2[j]){
                count++;
                break;
            }
        }
    }
    if(count === arr1.length){
        return true;
    }else{
        return false;
    }
}

isAnagram("elbow","below");

function letterChanges(str) {
    const arr = str.split(' ');
    let changed = "";
    const newArr = [];
    for(var i in arr){
        if(arr[i].length > 1){
            changed = "";
            for(var j in arr[i]){
                if(arr[i][j] == "z"){
                    changed+="a";
                }else{
                    changed+=String.fromCharCode(arr[i][j].charCodeAt(0)+1);
                }
            }
        }else{
            if(arr[i] == "z"){
                changed+="a";
            }else{
                changed+=String.fromCharCode(arr[i].charCodeAt(0)+1);
            }
        }
        newArr.push(changed);
    }
    return newArr.join(" ");
}

letterChanges("Neeraj Dwivedi");

function addAll() {
    let sum = 0;
    let args = [...arguments];
    return args.reduce((sum, currValue)=>{
        return sum+=currValue;
    }, sum);
}

addAll(2,3,4,5);

function sumAllPrimes(num) {
    if(num<=2) return 2;
    let i = 2;
    while(i<num){
        if(num%i === 0){
            return sumAllPrimes(num-1);
        }
        i++;
    }
    return num + sumAllPrimes(num-1);
}

sumAllPrimes(10);

function seekAndDestroy() {
    let arr = arguments[0];
    let newArr = [...arguments];
    let indexArr = [];
    newArr.shift();
    for(var i in arr){
        for(var j in newArr){
            if(arr[i] == newArr[j]){
                indexArr.push(i);
            }
        }
    }
    for(var i in indexArr){
        arr.splice(indexArr[i], 1);
    }
    return arr;
}

seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6);


// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight() {}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters() {}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() {}