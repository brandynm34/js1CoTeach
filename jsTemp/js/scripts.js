// OBJECTS
// An object is a collection of properties, and a property is an association between a name (or key) and a value.
// a property: {key (name): value}

// A new Object can be created by two ways
let object1 = {}; // "object literal" syntax
let object2 = new Object(); // "object constructor" syntax

//object example
// ssecond property has name "age" and value "22"
let person = {
  name: 'Brandy',
  age: 22,
  hairColor: 'brown',
  other: ['glasses', 'short'],
  favorites : {
    food: 'pizza',
    dessert: 'cookies'
  },
  greet: function() {
      return `Hi`;
  }
};

console.log(person);

// When defining an object we use let or var, If you us const you are nu able to change the object in any way


// Accessing object properies
// (name of object).(key)

console.log(person.name); // dot notation
// or
onsole.log(person['name']); // square bracket notation

// console logging a variable that is not defined
console.log(person.eyeColor); // undefined NOT NULL

//Adding properies
// for object 1
person.eyeColor = 'brown' //dot notation
object1.food = "pizza";

object1['color'] = 'pink';
console.log(object1.color);

// FOR...IN loop
// syntax
// for(let key in object) {
//
// }

for (let per in person) {
  console.log('key', per, 'value', person[per]);
};

// for ... of loop
// Not the best for loop to iterate objects, you need special Object methods such as 
// Object.keys, Object.values, Object.entries 

for(let [key,val] of Object.entries(person)){ // Object.entries converts each property into an array
  console.log(key,val);
};

for(let key of Object.keys(obj)){ //Object.keys graps the keys of the object
  console.log(key);
};

for(let key of Object.values(obj)){ //Object.values graps the values of the object
  console.log(key);
};

// object.create ex best practice for cloning
// The Object.create() method creates a new object, using an existing object to provide the newly created object
let newObj = Object.create(object1);
newObj.flower = 'rose';
newObj.color = 'yellow';
console.log('newobj', newObj);
console.log('object1',object1);

// the newObj value change is done to the newObj. object1 has all its orginal keys and values 
// the newObj does holds all values of object one even if we change a value of a key due to inhertiance
// We use Object.create() so the the new Objects is not stores at the same place the old object is
// {this would cause the changing of both objects instead os just the new objects}
