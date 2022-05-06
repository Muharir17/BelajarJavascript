//...
oldArr = [1, 2, 3]
newArr = [...oldArr, 2, 4]

console.log(newArr)

oldObj = {
    name: 'Peter',
    age: 50
}

newObj = {
    ...oldObj, 
    height: 40
}

console.log(newObj)

// spread dapat juga di gunakan pada function

const showValues = (...args) => {
    // console.log(args)
    for(i=0; i<args.length; i++){
        console.log(args[i])
    }
}

showValues('muharir', 'rabiatul', 'muthia', 'rasyid')