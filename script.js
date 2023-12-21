// CRUD
let fruits = [
    { id : 1, name : 'Olma'},
    { id : 2, name : 'Banan'},
    { id : 3, name : 'Tarvuz'},
    { id : 4, name : 'Anor'},
];

// Create
// const onCreate = (fruit ) => {
//     fruits.push(fruit) 
// }

// onCreate({id : fruits.length + 1 , name : 'Nok'});
// console.log(fruits);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Read
// const onRead = () => {
//     let data = fruits.map((value) => {
//         console.log(value.name);
//     })
// }

// onRead();

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Update
// const onUpdate = (fruit) => {
//     let updated = fruits.map(value => value.id === fruit.id);
//     console.log(updated);
// }

// onUpdate({id : 1});

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Delete
// const onDelete = (i) => {
//     let deleted = fruits.filter((value) => value.id !== i);
//     console.log(deleted);
// }

// onDelete(1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// comment on create
// const onCreate = (fruit => fruit parametr malumot yaratish uchun ishlatiladi) => {
//   fruits.push => fruit ga yangi malumotni fruits ga qoshadi
// }

// onCreate({id : fruits.length => fruits dagi eng ohiri id ga qarab id beradi  + 1 , name : 'Nok'}); => onCreate chaqirlganda fruit ga malumot qoshadi
// console.log(fruits); => fruits ni terminalda ko'rsatadi

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// comment on read
// const onRead = () => {
//     let data = fruits.map((value => fruits ni value lariga teng) => {
//         console.log(value.name => fruits ni name value larini terminal da chiqarib beradi);
//     })
// }

//  onRead(); => onRead chaqirlganda fruits ni chiqarib beradi

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// comment on update

// const onUpdate = (value => fruits ni value lariga teng) => {
//     let updated = fruits.map(value => value.id === fruits.id => agar value ni id  siga fruits ni id si togri kelsa true buladi agar togri kelmasa false buladi);

//     console.log(updated => true yoki false chiqarib bersdi);
// }

// onUpdate({id : 1} => qaysi id bersak oshani updated qiladi);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// comment on delete
// const onDelete = (i => fruits ni value lariga teng) => {
//     let deleted = fruits.filter((value => obj larga teng) => value.id !== i => teng bulmasa arrayga solib beradi); => condition false bulsa malumot ni arrayga solmaydi
//     console.log(deleted);
// }

// onDelete(1);