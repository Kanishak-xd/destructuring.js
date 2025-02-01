// Object Destructuring
    // // Create Object
    // const person = {
    //     firstName: "Kanishak",
    //     lastName: "Sharma",
    //     age: 20
    // };
  
    // // Destructuring
    // let {firstName, lastName} = person;
    // console.log(firstName + " " + lastName);


// String Destructuring
    // // Create a String
    // let item = "GOD";

    // // Destructuring
    // let [a1, a2, a3] = item;
    // console.log(a3 + a2 + a1);


// Array Destructuring
    // // Create an Array
    // const friends = ["Kelzang", "Abhilaksh", "Dolith"];

    // // Destructuring
    // let [fren1, fren2, fren3] = friends;
    // console.log(fren1 + ", " + fren2 + " & " + fren3 + " are my friends.");


// Skipping Array Values
    // // Create an Array
    // const friends = ["Kelzang", "Abhilaksh", "Dolith", "Devansh", "Sarabnoor"];

    // // Destructuring
    // let [ , fren1, , fren2, ] = friends;
    // console.log(fren1 + " & " + fren2 + " are my friends.");


// Array Position Values
    // // Create an Array
    // const cities = ["Mandi", "Hamirpur", "Jahu", "Ghumarwin"];
    // // Destructuring
    // let {[0]:city1 ,[1]:city2} = cities;
    // console.log(`I was born in ${city1} & was raised in ${city2}.`);


// The Rest Property
    // // Create an Array
    // const numbers = [10, 20, 30, 40, 50, 60, 70];

    // // Destructuring
    // const [a,b, ...rest] = numbers
    // console.log(`I was ${10} years old when my brother was ${20} & gramps was ${70}.`);


// Swapping JavaScript Variables
    let firstName = "Kanishak";
    let lastName = "Sharma";

    // Destructing
    [firstName, lastName] = [lastName, firstName];
    console.log(`Now, my first name is ${firstName} & second name is ${lastName}.`);