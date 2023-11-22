// Primitives :  number, string, boolean
// More complex types: arrays, objexts
// Function types, parameters

//Primitives

let age: number; //명시적으로 타입을 지정해준다.

age = 27; // number형이 아닌 string 형 등을 넣으면 에러가 발생한다.

let userName: string;

userName = 'Park'

let inInstructor: boolean;

inInstructor = true;

// More complex types

let hobbies: string[]; // 배열 선언

hobbies = ['Sports', 'Cooking']

// let person: any; // 어떤 값이든 들어갈 수 있는 객체 선언.

let person: { // 객체안에 들어갈 수 있는 타입을 제한
    name: string;
    age: number
};
person = {
    name: 'Park',
    age: 27,
}

// person = {
//     isEmployee: true
// }

let people: {
    name: string;
    age: number
}[];// 객체 배열.

// Type inference
let course = 'React - The Complete Guide'

//course = 1234; //명시적으로 타입을 지정하지 않아도 타입을 추론하여 에러를 도출.
