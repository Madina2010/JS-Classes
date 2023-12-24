// 1 masala getting sum of nested obj age
let user = {
    name: 'Test',
    age: 30,
    child: {
        name: 'test',
        age: 20,
        child: {
            name: 'test',
            age: 10,
            child: {
                age: 100
            }
        }
    }
}

sum = 0;

function getAge(obj) {
    
    sum += obj.age; // 30 + 20 + 10
    if (obj.child) {
        getAge(obj.child);
    }
    
}

getAge(user);
console.log(sum);



//////////////////////////////////////////////////////////

// 2 masala finding sum of n
// n = 5
// 5 + 4 + 3 + 2 + 1 => 15

const findSum = (n) => {
    
    if (n > 0) {
        return n + findSum(n - 1)
    } else {
        return n
    }
    
}

console.log(findSum(5));

////////////////////////////////////////////////////////
// 3 masala removing duplicates without using new Set() [1, 1, 2, 2] => [1, 2]
let arr = [1, 1, 2, 2];

const findDuplicate = (d) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            console.log(arr[i]);
          }
        }
      }

}

findDuplicate();

uniqueArray.indexOf(array[i]) === -1