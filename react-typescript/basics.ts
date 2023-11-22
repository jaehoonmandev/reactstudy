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

// Type aliases 정의
type Person ={
    name: string;
    age: number
}

// let person: { // 객체안에 들어갈 수 있는 타입을 제한
//     name: string;
//     age: number
// };

let person : Person //Type aliases로 코드 간략화


person = {
    name: 'Park',
    age: 27,
}

// person = {
//     isEmployee: true
// }

// let people: {
//     name: string;
//     age: number
// }[];// 객체 배열.

let people : Person[]



// Type inference

let course = 'React - The Complete Guide'

// union 타입으로 여러개 타입 지정 가능.
let course_union: string|number = 'React - The Complete Guide'
course_union = 1234
//course = 1234; //명시적으로 타입을 지정하지 않아도 타입을 추론하여 에러를 도출.



// Functions & types
// Arg 에 지정한 타입으로 number 형이 return 된다고 추론한다.
function add(a: number, b: number) {
    return a + b
}

//Return Type 이 void 다.
function printOutput(value: any){
    console.log(value)
}



//Generic
function insertAtBeginning<T>(array: T[], value: T) { //제네릭 타입을 선언
    const newArray = [value ,...array]; // 복사한 배열에 새로운 값을 넣는다.
    return newArray
}

// number 타입을 넣었으니 number가 반환되며
const updataedArray = insertAtBeginning([1,2,3], -1)// [-1,1,2,3]

// string 타입을 넣었으니 string이 반환된다.
const stringArray = insertAtBeginning(['a','b','c'], 'd');






