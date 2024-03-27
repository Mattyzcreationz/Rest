function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  //Refactor it to use the rest operator & an arrow function
  /* Write an ES2015 Version */
  // ES2015 version using rest operator and arrow function
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


/*findMin

Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator. */
function findMin(...args) {
    // If no arguments are provided, return undefined
    if (args.length === 0) {
        return undefined;
    }

    // Spread the arguments into Math.min to find the minimum value
    return Math.min(...args);
}
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

/*mergeObjects
Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
*/
function mergeObjects(obj1, obj2) {
    // Create a new object by spreading properties of obj1 and obj2
    return { ...obj1, ...obj2 };
}
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

/*doubleAndReturnArgs
Write a function called doubleAndReturnsArgs which acce[ts an array and
variable number of arguments. the function should return a new array with the 
orignial array values and all of additional arguments doubled.
*/
function doubleAndReturnArgs(arr, ...args) {
    return [...arr, ...args.map(arg => arg * 2)];
}
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

/*Slice and Dice!
For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.
 */
const removeRandom = items => {
    const index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
};

const extend = (array1, array2) => [...array1, ...array2];


const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

const removeKey = (obj, key) => {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
};

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

const update = (obj, key, val) => ({ ...obj, [key]: val });

const items = [1, 2, 3, 4, 5];
console.log(removeRandom(items)); 

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(extend(array1, array2)); 

const obj = { a: 1, b: 2 };
console.log(addKeyVal(obj, 'c', 3)); 

console.log(removeKey(obj, 'b')); 
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
console.log(combine(obj1, obj2)); 

console.log(update(obj, 'a', 100)); 