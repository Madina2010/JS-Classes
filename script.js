// CRUD
let fruits = [
    { id : 1, name : 'Olma'},
    { id : 2, name : 'Banan'},
    { id : 3, name : 'Tarvuz'},
    { id : 4, name : 'Anor'},
];

// Create
const onCreate = (fruit ) => {
    fruits.push(fruit) 
}

onCreate({id : fruits.length + 1 , name : 'Nok'});
console.log(fruits);

// comment
// const onCreate = (fruit => fruit parametr malumot yaratish uchun ishlatiladi) => {
//   fruits.push => fruit ga yangi malumotni fruits ga qoshadi
// }

// onCreate({id : fruits.length => fruits dagi eng ohiri id ga qarab id beradi  + 1 , name : 'Nok'}); => onCreate chaqirlganda fruit ga malumot qoshadi
// console.log(fruits); => fruits ni terminalda ko'rsatadi

// Read

