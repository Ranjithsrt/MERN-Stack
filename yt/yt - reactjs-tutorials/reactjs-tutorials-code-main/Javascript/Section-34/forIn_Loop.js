
// for in loop is used to iterate over the properties of an object

let person1 = {
    uName : "Kesavan",
    hobbies : [ "Cricket", "Video Maker", "Editor" ],
    familyDetails : {
        totalMembers : 5,
        siblings : [ "a", "b", "c"  ]
    },
    walk(){
        console.log( "Im going to home" );
    }
}


for( let key in person1  ){
    console.log( key ); // it will give the keys of the object
    console.log( person1[key] ); // it will give the values of the object
}

// for in loop can be used to iterate over the array and string also

// array

let arr = [ 120,130,140,150 ];

for(  let key in arr ){
    console.log(arr[key] ); // it will give the values of the array
    console.log( key ); // it will give the index of the array
}

// string

let str = "ECMA Script"

for(  let key in str ){
    console.log( str[key] + 1 ); // it will give the values of the string
    console.log( key ); // it will give the index of the string
}