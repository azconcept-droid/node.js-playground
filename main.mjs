// 1.
// import add from "./math-esm.mjs"
// console.log(add(5, 5))

// 2.
// import math from "./math-esm.mjs"
// console.log(math.add(5, 5))
// console.log(math.subtract(5, 5))

// 3.
// import math from "./math-esm.mjs"
// const { add, subtract } = math
// console.log(add(5, 5))
// console.log(subtract(5, 5))

// 4.
// import * as math from "./math-esm.mjs"

// const { add, subtract } = math

// console.log(add(5, 5))
// console.log(subtract(5, 5))

// 5.
import { add, subtract } from "./math-esm.mjs"

console.log(add(5, 5))
console.log(subtract(5, 5))

//NOTE: 4 & 5 same but 5 is mostly used