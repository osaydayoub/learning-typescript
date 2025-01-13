//Primitives:number, string, boolean
//More complex types: arrays, objects
//Function types, parameters

//Primitives

let age:number;

age=12

let userName:string;
userName="Max";

let isInstructor:boolean;

isInstructor=true;

//More complex types

//an array of strings
let hobbies:string[];
hobbies=['Sports','Cooking'];

// an Object
let person:{
    name:string,
    age:number
};

person={
    name: 'Max',
    age:32
}

// an array of objects
let pepole:{
    name:string,
    age:number
}[];


// Type inference

//Both are the same 
//let course:string='React - The Complete Guide';
let course='React - The Complete Guide'
//This leads to completion falt
// course=123
//Sometimes a variable can have more than one type
//Union Types
let newCourse:string | number='React - The Complete Guide'
newCourse=123

//Type Aliases
type Person = {    
    name:string;
    age:number;
};


// an Object
let newPerson:Person;

newPerson={
    name: 'Max',
    age:32
}

// an array of objects
let newPepole:Person[];

//Functions & Function Types

// Don't have to add a return value type it will be an inference
function add(a:number,b:number):number{
    return a + b;
}

//the return value is void 
function printOutput(value:any){
    console.log(value);
}

//Generics

function insertAtBeginning<T>(array:T[],value:T){
    const newArray=[value,...array]
    return newArray
}
const stringArray=insertAtBeginning(['b','c'],'a');
