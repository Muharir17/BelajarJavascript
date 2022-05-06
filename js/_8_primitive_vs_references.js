// primitive : the value is stored with assign-by-value
// reference : the value is stored with assign-by-reference

var name = "Muharir"
var nameCopy = name
console.log('name', name)
console.log('nameCopy', nameCopy)

name = "Rabiatul"
console.log('name', name)
console.log('nameCopy', nameCopy)

const user = {
    nama: "Rasyid"
}

const userCopy = {...user}
console.log('user', user)
console.log('userCopy', userCopy)
user.nama = "Muthia"
console.log('user', user)
console.log('userCopy', userCopy)
