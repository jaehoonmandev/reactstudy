
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



