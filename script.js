// // Math.floor

// function mathfloor(son) {
//     return Number.parseInt(son)
// }

// console.log(mathfloor(13.1000));

// // Math.ceil

// function mathceil(son) {
//     son > parseInt(son) && console.log(parseInt(son) + 1);
//     son == parseInt(son) && console.log(parseInt(son));
// }

// console.log(mathceil(12.5));

// // Math.round

// function mathround(son) {
//     son >= parseInt(son) + 0.5 && console.log(parseInt(son) + 1);
//     son < parseInt(son) + 0.5 && console.log(parseInt(son));
// }

// console.log(mathround(3.3));

// // //////////////////////////////////////////////////////////////////////////////////////////

// // 1 masala

// // 1 
// let user = {
//     // 2  
//     name: 'John',
//     // 3
//     surname: 'Smith'
// }

// // 4
// user.name = 'Pete';

// // 5
// delete user.name

// console.log(user);

// // 2 masala

// let schedule = {};

// function isEmpty(obj) {
//     for (let key in obj) {
//         return 'false'
//     }
//     return 'true'
// }

// console.log(isEmpty(schedule));

// // 3 masala

// let salaries = {
//     John : 150,
//     Ann : 160,
//     Pete : 130
// }

// let sum = 0;

// for (let people in salaries) {
//     sum += salaries[people]
// }

// console.log(sum);

// // 4 masala

// let menu = {
//     width : 200,
//     height : 300,
//     title :"My menu"
// }

// function multiplyNumeric(m) {
//     for (let key in m) {
//         if (typeof m[key] === 'number') {
//             m[key] *= 2
//         }
//     }
// }

// multiplyNumeric(menu);
// console.log(menu); 