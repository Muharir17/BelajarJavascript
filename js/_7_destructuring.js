var person = {
    firstName: "Muharir",
    lastname: "Zack",
    age: 28,
    eyeColor: "black"
};

const {firstName, lastname} = person
console.log(firstName)
console.log(lastname);


[a, b] = [1, 2]
console.log(a);

[a, b,...remain] = [1,2,3, 4,5,6, 7,8,9, 10, 11, 12];
console.log(...remain);
