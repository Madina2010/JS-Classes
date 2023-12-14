// CRUD => Create , Read, Update, Delete

let cars = [
    { id: 1, year: 1998, engine: 1, name: "Tico" },
    { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
    { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
    { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
    { id: 5, year: 2012, engine: 2, name: "Malibu" },
    { id: 6, year: 2000, engine: 1.2, name: "Damas" },
    { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
  ];

// Create
const onCreate = (car) => {
    cars.push(car);
}

onCreate({id: cars.length + 1, year: 2023, engine:3,  name: 'BMW', });
console.log(cars);

// // Read
const onRead = () => {
    let data = cars.map(({id,name, year, engine}) => {
        console.log(id,name, year, engine);
    })
}

onRead();

// // Update
const onUpdate = (car) => {
  let updated = cars.map(value => value.id === car.id ? {...value, name: 'Tayota', year: 2023} : value);

  console.log(updated);
}

onUpdate({id: 3})

// // Delete

const onDelete = (ids) => {
    let filtiredData = cars.filter((value) => value.id !== ids);
    console.log(filtiredData);
}

onDelete(1);