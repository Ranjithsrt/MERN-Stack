// object : key-value pair
// key : string
// value : any data type

 
// object literal

let userProfile = {
    userName : "Kesavan",
    age : 30,
    hairColor : "black",
    eyeColor : "brown",

// Method : function inside object

    eat : function(){
        console.log( "Im gonna eat ice cream" );
        return "Vanilla Ice Cream"
    }
}

 console.log( userProfile.hairColor, userProfile.age );

// accessing property in dot notation

 console.log( userProfile.userName );

 // method calling

 let iceCreamType = userProfile.eat();

 console.log( iceCreamType );



// Property in string type


let vehicle = {
    "vehicleType" : "four-wheeler",
    "price" : 20000,
    fuelType : "petrol",
    "seater type" : ["two", "three", "four"]
}

// accessing property in dot notation

console.log( vehicle.vehicleType );

// accessing property in string type

console.log( vehicle["vehicleType"]  );
console.log( vehicle["fuelType"]  );

console.log( vehicle["seater type"][0] );



// Shorthand Assigned Property

// Dynamic Property

let uName = "Kesavan"
let age = 30

// let person1 = {
//     uName : uName,
//     age : age 
// }

// shorthand assigned property

let dynamicProp = "employeeId"
let person1 = {
    uName,
    age,
    ['dynamicProp'] : "IFS246",
    [dynamicProp] : "UQI!@#$"
}
console.log( person1 );
console.log( person1.uName, person1.age, person1.dynamicProp, person1[dynamicProp] );

