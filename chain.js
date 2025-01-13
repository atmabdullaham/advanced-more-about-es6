// data access 

const data = [
 {
  id: 1,
  name: "Abul",
  adress: "Bilat"
 }
]
// console.log(data[0].id)
// console.log(data[0].name)
// console.log(data[0].adress)

const products = {
 count: 5000,
 data: [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 3, name: "Mac", price: 165000 }
 ]
}

// need second product price


// console.log(products.data[1].price)
const user = {
 id: 355,
 name: "Sharif",
 adress: {
  city: "Dhaka",
  street: {
   first: "34/3 Uttora side",
   second: "poribag er goli",
   thired: "no dorai"
  }
 }
}

// we need second adress
// console.log(user.adress.street.second)

const user2 = {
 id: 533,
 name: "probibir majar",
 adress: {
  city: "chittagong",
  country: "bangladesh"
 }
}

// Optional Chaining
console.log(user2.adress.street?.second)
console.log(user.adress.street?.second)