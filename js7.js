// OBJECT CONSTRUCTOR

function Client( first, last, age, city ) {
  
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.city = city;
  
}

const FIRST_CLIENT = new Client("Nonso", "Jude", 34, "Lagos");
console.log(`${FIRST_CLIENT.firstName} ${FIRST_CLIENT.lastName} is ${FIRST_CLIENT.age} years old and lives in ${FIRST_CLIENT.city}.`)