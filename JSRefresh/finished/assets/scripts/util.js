
// String 변수를 선언하고 이를 다른 파일에서 사용할 수 있도록 export
//export let apiKey = "vavasjlsjks"

//파일에 하나만 지정할 수 있는 default 키워드로 export 할 수 있다.
//export default "vavasjlsjks"

//default 변수와, 명명 변수는 함께 사용할 수 있다.
// export default "vavasjlsjks"
// export let apiKey = "vavasjlsjks"
// export let abc = "abc";

// function 함수는 바로 실행되는 코드가 아니라 나중에 호출하는 용도.
// argument 에 = 시 default 값을 설정한다.
// function createGreeting(userName, messgge = "Hello") {
//     // console.log(userName);
//     // console.log(messgge)
//     return "Hi " + userName + ' ' + messgge; //return 으로 String 반환
// }
//
// //호출, 호출 횟수는 상관 없다.
// const greeting1= createGreeting('name1'); // 2번째 arg 지정 안할 시 default 값
//
// const greeting2= createGreeting('name2', 'message2');
//
// console.log(greeting1);
// console.log(greeting2);

//익명함수
// export default (userName, message) => {
//     return userName + message;
// }

//
// //객체
// let user = {
//     name: 'Max',
//     age: 27,
//     //객체안에 함수를 선언한다.
//     greet() {
//         console.log(this.name); // this 키워드를 통해 객체 내의 변수 접근
//     }
// };
// //점 표기법을 통해 객체에 접근한다.
// console.log(user.name);
// //객체의 함수 호출
// user.greet();
//
// //클래스. 클래스명 시작은 대문자로.
// class User {
//     //생성자
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log('Hi!');
//     }
// }
//
//
// // 클래스는 인스턴스화가 이루어져야지 사용가능하다.
// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet()


//배열
//배열은 어떤 자료형이라도 저장가능하다.(배열마저도)
// const hobbies = ["Sports", "Coocking", "Reading"];
// console.log(hobbies[0]); // 인덱스 접근자.
//
// //배열 메소드(map과 같은)
// hobbies.push("Working");//배열 . 접근으로 기능을 이용할수 있다.
//
// //찾으려는 원소가 배열에 있는지 모든 배열요소와 비교한다,
// //있다면 true를 반환하고 해당 요소의 위치를 가져온다.
// const index = hobbies.findIndex((item) => {
//     return item == 'Sports';
// });
//
// // const index = hobbies
// //     .findIndex((item) => item == 'Sports'); // {,} 제거가능
//
// //map 또한 모든 배열 원소에 대해 실행된다.
// //모든 원소에 ! 추가하지만 원래의 배열에는 지장을 주지 않는다.
// const editeHobbies = hobbies.map((item) => item + "!");
//
// // map은 어떤 유형의 원소든 다른 유형의 원소로 변환할 수 있다.
// const editeHobbies = hobbies.map(
//     (item) =>({
//     text:item
// }));

//새로 반환되는 배열에서, 모든 객체는 val키와 입력 배열의 숫자를 값으로 가져야 합니다.
// function transformToObjects(numberArray) {
//     // should return an array of objects
//     return numberArray.map(
//         item => {
//             return {val: item}
//         }
//     );
// }


//디스트럭처링
//배열은 각 인덱스 요소와 맵핑되어 변수처럼 사용할 수 있게된다.
// const [firstName, lastName] = ['jaehoon', 'park'];
//
// console.log(firstName);
// console.log(lastName);
//
// // 객체 또한 디스트럭처링이 가능하며 변수명: 을 통해 as가 가능하다.
// const {name: userName, age} ={
//     name: "jaehoon",
//     age: 27
// };
//
// console.log(userName);
// console.log(age);


//스프레드 연산자.
const hobbies = ["Sports", "Coocking"];
const newHobbies = ['Reading'];

//const mergedHobbies = [hobbies, newHobbies];
// 배열의 요소를 하나의 배열로 합치기 위해서는 [,] 안에 '...' 연산자와 ','로 구분된 배열을 넣어줌.
const mergedHobbies = [...hobbies, ...newHobbies];

//객체또한 '...' 연산자를 활용하여 통합 가능
const user = {
    name: "jaehoon",
    age: 27
};

const extendedUser = {
    isAdmin: true,
    ...user // 스프레드 연산자.
}
