// objects property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)
/**
 * Usefulnes of Object destructuring
 * 
 * 1. access object property directly
 * 2. rename the property
 * 3. set a default value if the property doesn't initially exist
 * 4. use it in an object argument
 * 
 */


const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label: productLabel, stock, rating = 5} = product
console.log('label: ', productLabel)
console.log('stock: ', stock)
console.log(rating)

const transaction = (type, { label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)