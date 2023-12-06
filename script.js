let person = {
    id: 1,
    name: 'Odil',
    age: 78,
    child: {
        id: 1,
        name: 'Ali',
        age: 48,
        child: {
            id: 1,
            name: 'Umar',
            age: 20
        }
    }
}

let sum = 0;

while (true) {
    if (person) {
        sum += person.age
    } else {
        break
    }
    person = person.child 
}

console.log(sum);

// /////////////////////////////////////////////////

let arr = [
    {id: 1, name: 'Fozil'},
    {id: 2, name: 'Odil'},
    {id: 3, name: 'Alibek'},
    {id: 4, name: 'Elyor'},
]

const onSearch = (input) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase().includes(input.toLowerCase())) {
          result.push(arr[i])
        }
    }
    console.log(result);
}

onSearch('o');

