const fruitsArray = ["apple", "orange", "banana"]
for(let value of fruitsArray){
    console.log(`Perulangan buah ${value}`)
}

const fruitObject = {
    apple: 13,
    orange: 17,
    banana: 15
}

for(let key in fruitObject){
    console.log(`Jumlah buah ${fruitObject[key]}`)
}
