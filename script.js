// // 1 massala

// let str = 'ABBACC';

// let arr = [];

// for (let i = 0; i < str.length; i++) {

//     if (arr.includes(str[i])) {

//         console.log(str[i]); 
//         console.log(str[i]); break

//     }

//     arr.push(str[i])
// }

// // 2 masala

// let num =[1 , [3 , [5]], [10]];

// console.log(num.flat(Infinity).reduce((initial,sum) => initial + sum, 0));


// // 3 masala
let cars = [
    { id: 1, year: 1998, engine: 1, name: "Tico" },
    { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
    { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
    { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
    { id: 5, year: 2012, engine: 2, name: "Malibu" },
    { id: 6, year: 2000, engine: 1.2, name: "Damas" },
    { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
  ];

// 1

//   let natija = [];

//   const onSearch = () => {
//     for(let i = 0; i < cars.length; i++) {
//         if (cars[i].year < 2000) {
//             natija.push(cars[i])
//         }
//       }
//       console.log(natija);
//   }
  
//   onSearch();

// //   2

// let natija2 = [];

// const onSearch2 = () => {
//   for(let i = 0; i < cars.length; i++) {
//       if (cars[i].year >= 2010) {
//           natija2.push(cars[i])
//       }
//     }
//     console.log(natija2);
// }

// onSearch2();

// 3

// let natija3 = [];

// const onSearch3 = () => {
//     for(let i = 0; i < cars.length; i++) {
//         cars.sort((a, b) => a.engine - b.engine);
//         console.log(cars);
//     }
//     console.log(natija3);
// }
 
// onSearch3();

// 4

// let natija4 = [];

// const onSearch4 = () => {
//     for(let i = 0; i < cars.length; i++) {
//         cars.sort((a, b) => a.year - b.year);
//         console.log(cars);
//     }
//     console.log(natija4);
// }
 
// onSearch4();

// 5

// let natija5 = [];

// const onSearch5 = () => {
//     for(let i = 0; i < cars.length; i++) {
//         cars.sort((a, b) => a.name.localeCompare(b.name));
//         console.log(cars);
//     }
//     console.log(natija5);
// }
 
// onSearch5();

// 6

// let natija6 = [];

// const onSearch6 = () => {
//     for(let i = 0; i < cars.length; i++) {
//        if (cars[i].year < 2000) {
//         natija6.push({ ...cars[i], status: 'Eski malumot' });
//        }
//     }
//     console.log(natija6);
// }
 
// onSearch6();

// 7

// let natija7 = [];

// const onSearch7 = () => {
//     for(let i = 0; i < cars.length; i++) {
//        if (cars[i].year < 2010 && cars[i].year > 2000) {
//         natija7.push({ ...cars[i], status: "O'rta" });
//        }
//     }
//     console.log(natija7);
// }
 
// onSearch7();

// 8

// let natija8 = [];

// const onSearch8 = () => {
//     for(let i = 0; i < cars.length; i++) {
//        if (cars[i].year < 2022 && cars[i].year > 2010) {
//         natija8.push({ ...cars[i], status: "O'rta" });
//        }
//     }
//     console.log(natija8);
// }
 
// onSearch8();