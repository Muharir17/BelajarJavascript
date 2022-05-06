import App from './component1.js'
// import {banana, orange} from './component2.js'

// bisa juga dengan
import * as Fruit from './component2.js'

console.log('export default ', App)
// console.log('export default ', banana)
console.log('export default ', Fruit.banana)
console.log('export default ', Fruit.orange)