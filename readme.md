# Destructuring Assignment Syntax

The destructuring assignment syntax unpack object properties into variables

## Object Destructuring
Create an object, then destrcture & use it's properties like this:
```
    // Create Object
    const person = {
        firstName: "Kanishak",
        lastName: "Sharma",
        age: 20
    };
  
    // Destructuring
    let {firstName, lastName} = person;
    console.log(firstName + " " + lastName);
```


## String Destructuring
Create a string, wrap it in a variable and then use it's characters using destructring:
```
    // Create a String
    let item = "GOD";

    // Destructuring
    let [a1, a2, a3] = item;
    console.log(a3 + a2 + a1);
```


## Array Destructuring
Make an array, wrap it in a variable, then use its properties using destructuring:
```
    // Create an Array
    const friends = ["Kelzang", "Abhilaksh", "Dolith"];

    // Destructuring
    let [fren1, fren2, fren3] = friends;
    console.log(fren1 + ", " + fren2 + " & " + fren3 + " are my friends.")
```


## Skipping Array Values
## Array Position Values
## The Rest Property
## Destructuring Maps
## Swapping JavaScript Variables