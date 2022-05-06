function fruitColor(fruit)
{
  switch(fruit){
    case "apple":{
      let color = "red"
      return color}
    case "banana": {
      let color = "yellow"
      return color}
    default:
      return "other color"
  }
}

console.log(fruitColor("apple"))
console.log(fruitColor("banana"))
console.log(fruitColor("manggo"))


// penggunaan let pada switch harus di bungkus dengan  angle bracket {} jika tidak maka akan 