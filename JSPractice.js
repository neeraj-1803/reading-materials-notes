function reverseString(str) {
    let arr = str.split('');
    return arr.reverse().join('');
}

console.log(reverseString("hello"));

function isPalindrome(str) {
    let arr = str.split('');
    let arr1 = [...arr];
    arr = arr.reverse();
    if (arr.join('') == arr1.join(''))
        return true;
    else
        return false;
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));

function reverseInt(str) {
    let arr = str.toString().split('');
    return parseInt(arr.reverse().join('')) * Math.sign(str);
}

console.log(reverseInt(-521));

function capitalize(str) {
    return str.toLowerCase().split(' ').map(function (e) {
        return e[0].toUpperCase() + e.substring(1, e.length);
    }).join(' ');
}

console.log(capitalize("i love js"));

function maxChar(str) {
    var charMap = {};
    let arr = str.split('');
    for (var i in arr) {
        if (charMap.hasOwnProperty(arr[i])) {
            charMap[arr[i]] = charMap[arr[i]] + 1;
        } else {
            charMap[arr[i]] = 1;
        }
    }
    const keys = Object.keys(charMap);
    let max = charMap[keys[0]];
    for (var i in keys) {
        if (max < charMap[keys[i]])
            max = charMap[keys[i]];
    }
    return `${max} occurs max times`;
}

console.log(maxChar("javascript"));

function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        let fizz = false;
        let buzz = false;
        if (i % 3 == 0) {
            fizz = true;
        }
        if (i % 5 == 0) {
            buzz = true;
        }
        if (fizz && buzz) {
            console.log("Fizzbuzz");
        } else if (fizz) {
            console.log("Fizz");
        } else if (buzz) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
console.log(fizzBuzz());

function longestWord(str) {
    const arr = str.split(" ");
    let longest = arr[0];
    for (var i in arr) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

longestWord("THis is a test to test the Javascript code that is being written.")

function chunkArray(arr, len) {
    let newArr = [];
    let tempArr = [];
    let j = 0;
    for (var i in arr) {
        if (j < len) {
            j++;
            tempArr.push(arr[i]);
        } else {
            newArr.push(tempArr);
            tempArr = [];
            tempArr.push(arr[i]);
            j = 1;
        }
    }
    if (tempArr.length > 0) {
        newArr.push(tempArr);
    }
    return newArr;
}

chunkArray([1, 2, 2, 2, 3, 4, 5, 5, 5, 3, 2, 2], 3);

function flattenArray(arr) {
    var newArr = [];
    for (var i in arr) {
        if (Array.isArray(arr[i])) {
            for (var j in arr[i]) {
                newArr = [...newArr, arr[i][j]]
            }
        } else {
            newArr = [...newArr, arr[i]]
        }
    }
    return newArr;
}

flattenArray([
    [1, 2],
    [3, 4],
    [5, 6],
    [7]
]);


function isAnagram(str1, str2) {
    str1 = str1.replace(/[^A-Za-z]/g, "").toLowerCase();
    str2 = str2.replace(/[^A-Za-z]/g, "").toLowerCase();
    if (str1.length != str2.length) return false;
    var arr1 = str1.split('');
    var arr2 = str2.split('');
    let count = 0;
    for (var i in arr1) {
        for (var j in arr2) {
            if (arr1[i] == arr2[j]) {
                count++;
                break;
            }
        }
    }
    if (count === arr1.length) {
        return true;
    } else {
        return false;
    }
}

isAnagram("elbow", "below");

function letterChanges(str) {
    const arr = str.split(' ');
    let changed = "";
    const newArr = [];
    for (var i in arr) {
        if (arr[i].length > 1) {
            changed = "";
            for (var j in arr[i]) {
                if (arr[i][j] == "z") {
                    changed += "a";
                } else {
                    changed += String.fromCharCode(arr[i][j].charCodeAt(0) + 1);
                }
            }
        } else {
            if (arr[i] == "z") {
                changed += "a";
            } else {
                changed += String.fromCharCode(arr[i].charCodeAt(0) + 1);
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
    return args.reduce((sum, currValue) => {
        return sum += currValue;
    }, sum);
}

addAll(2, 3, 4, 5);

function sumAllPrimes(num) {
    if (num <= 2) return 2;
    let i = 2;
    while (i < num) {
        if (num % i === 0) {
            return sumAllPrimes(num - 1);
        }
        i++;
    }
    return num + sumAllPrimes(num - 1);
}

sumAllPrimes(10);

function seekAndDestroy() {
    let arr = arguments[0];
    let newArr = [...arguments];
    let indexArr = [];
    newArr.shift();
    for (var i in arr) {
        for (var j in newArr) {
            if (arr[i] == newArr[j]) {
                indexArr.push(i);
            }
        }
    }
    for (var i in indexArr) {
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

function sortByHeight(arr) {
    let newArr = arr.map((data) => {
        if (data != -1)
            return data;
    });
    newArr.sort((a, b) => a - b);
    return arr.map((data) => {
        if (data != -1) {
            let temp = newArr[0];
            newArr.shift();
            return temp;
        } else {
            return -1;
        }
    });
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(letters) {
    const arr = "abcdefghijklmnopqrstuvwxyz".split('');
    const letterArr = letters.split('');
    let i = 1;
    while (i <= 26) {
        if (arr[i] != letterArr[i])
            break;
        else
            i++;
    }
    if (i <= 26) {
        return String.fromCharCode(("a".charCodeAt(0) - 1) + i);
    } else {
        return undefined;
    }
}
missingLetters("abcdefghjklmno");

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
    let odd = 0,
        even = 0;
    for (var i in arr) {
        if (arr[i] % 2 == 0) {
            even += arr[i];
        } else {
            odd += arr[i];
        }
    }
    return [even, odd];
}
evenOddSums([50, 60, 60, 45, 71]);

// Mountain Array 012321
var validMountainArray = function (arr) {
    if (arr.length < 3) {
        return false;
    }

    let left = 0;
    let right = arr.length - 1;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[left] < arr[left + 1]) {
            left++;
        }
        if (arr[right] < arr[right - 1]) {
            right--;
        }
        // console.log(left, right, i);
        if (i != (left - 1) && (arr.length - i - 1) != (right + 1)) { //meeting in the middle
            break;
        }
    }

    return left == right && left != 0 && right != (arr.length - 1);
};

//alternative solution

var validMountainArray = function (arr) {
    if (arr.length < 3) {
        return false;
    }
    if (arr[0] > arr[1]) {
        return false;
    }

    let foundMax = false;

    for (let i = 1; i < arr.length - 1; i++) {
        // flat
        if (arr[i - 1] === arr[i]) {
            return false;
        }

        // maximum
        if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
            if (foundMax) {
                return false;
            }
            foundMax = true;
        }

        // minimum
        if (arr[i - 1] > arr[i] && arr[i + 1] > arr[i]) {
            return false
        }
    }

    return foundMax;
};


//to check if the m and n exist where n = 2*m in an array.
var checkIfExist = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        let ind = arr.indexOf(arr[i] / 2);
        if (ind !== -1 && ind !== i) {
            return true;
        }
    }
    return false;
};

//Replace Elements with Greatest Element on Right Side, replace last with -1;
var replaceElements = function(arr) {
    // iterate from end
    // keep a record of the biggest value
    
    let biggestVal = -1;
    
    for (let i = arr.length - 1; i >= 0; i--) {
      const newBiggestVal = Math.max(arr[i], biggestVal);
      arr[i] = biggestVal;
      biggestVal = newBiggestVal;
    }
    
    return arr;
  };

  //remove duplicates from array;
  function removeDup(arr){
      let mySet = new Set(arr);
      return Array.from(mySet);
  }
//memory utilized is very less
  var removeDuplicates = function(nums) {
    
    if(nums.length === 0) return 0;
    if(nums.length === 1) return 1;
    
    let j = 1;
    
    for(let i = 1; i< nums.length; i++) {
       if(nums[i]!=nums[i-1]){
           nums[j++] = nums[i]
           // j++;
       }

    }
    return j;
};

//Move Zeroes to the end of the array.
var moveZeroes = function(nums) {
    let zeroCount = 0
    let i = 0
    while(i < nums.length - zeroCount) {
        const currentElem = nums[i]
        if (currentElem === 0) {
            nums.splice(i, 1)
            nums.push(currentElem)
            zeroCount++
        } else {
            i++
        }
    }
    
    return nums
};

//move all the odd elements to the last of the array
var sortArrayByParity = function(nums) {
    var returnArr = [];
    returnArr.push(nums[0]);
    for(var i=1; i<nums.length; i++){
        if(nums[i]%2 === 0){
            returnArr.unshift(nums[i]);
        }else{
            returnArr.push(nums[i]);
        }
    }
    return returnArr;
};

//remove val from the nums array.
var removeElement = function(nums, val) {
    let index = 0;  
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num !== val) {
            nums[index] = num;
            index++;
        }
    }
    return index;
};

//Height Checker number of indices that do not match in sorted array.
var heightChecker = function(heights) {
    let count = 0;
    var sortedHeight = [...heights];
    sortedHeight = sortedHeight.sort((a,b)=>a-b);
    // return sortedHeight.reduce((acc, val, index) =>{
    //     if(val != heights[index])
    //         return acc+1;
    //     else
    //         return acc;
    // }, 0)
    let len = sortedHeight.length -1;
    for(let i=0; ((i<(Math.ceil(sortedHeight.length/2)))); i++){
        if(sortedHeight[i] != heights[i])
            count++;
        if(i<len){
        if(sortedHeight[len] != heights[len])
            count++;
        }
        len--;
    }
    return count;
};


//third max unique number in an array.
var thirdMax = function(nums) {
    nums = [...new Set(nums.sort((a,b)=>b-a))]; //converting to set removes the duplicates by default.
    if(nums.length < 3)
        return nums[0];
    return nums[2]
};

//find disappearing/missing numbers from the nums arr considering it should be in range [1..length of array];
var findDisappearedNumbers = function(nums) {
    const s = new Set(nums);
    const missing = [];
    for(let i=1;i<=nums.length;i++) {
      if(!s.has(i)) {
        missing.push(i);
      }
    }
    return missing;
  };

//Squares of a Sorted Array
  var sortedSquares = function(nums) {
    nums = nums.map(data=>{
        return data*data;
    });
    return nums.sort((a,b)=> a-b);
};
