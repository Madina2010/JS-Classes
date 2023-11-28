// function => malum muammoni xal qilish uchun kodlar majmuosi

// function types => declaration , expression , arrow

// declaration function

// function example() {
//     console.log('Salom hammaga');
//     // return 'Salom';
// }

// example();  // call console bolganda
// console.log(example()); // call return bolganda

/////////////////////////////////////////////////////////////////////////////////

// expression yoki anonymous function

// var example = function example() {
//     console.log('Salom hammaga');
// }

// example();  // call


/////////////////////////////////////////////////////////////////////////////////

// arrow function

// CONSOLE bilan

// var example = () => {
//     console.log('Salom hammaga');
// }

// example();

// RETURN bilan

// var example = () => 'Salom hammaga';

// console.log(example());

// var example = () => {return 'Salom '};

// console.log(example());


// example();  // call


// declaration function => hoisting buladi
// expression yoki anonymous function => hoisting bulmaydi
// arrow function => hoisting bulmaydi , va qachonkiy {} bulmasa return keyword ni talab qilmaydi , AvtoReturn hususiyati mavjud


// parametr va argument

// function user(name, status, age) {        // name, status, age => parametr
//     return `Name : ${name} Status : ${status}   Age : ${age}`
// }

// console.log(user('Madina ', 'developer' ,' 16 '));   // Madina , developer , 16 => argument 
// console.log(user('Nasiba ', 'mentor' ,' 18 '));   // Nasiba , mentor , 18 => argument 
// console.log(user('Dilorom ', 'student' ,' 13 '));   // Dilorom , student , 13 => argument 

// reusability => qayta-qayta foydalanish

// default parametr

// function user(name = 'Test', age = 25) {        // name => parametr
//     console.log(`Name : ${name} Age : ${age}`);
// }

// user('Madina',20);



