/**
 * variable 선언하기
 * 
 * var - 사용안함(let, const로 다 대체됨)
 * let
 * const
 */


// var
var name = "code factory";
console.log(name);

var age = 32;
console.log(age);

// let
let ive = "king_god_ive";
console.log(ive);
// 이때 let과 var로 선언한 변수는 추후 값 변경 가능

ive = "love dive";
console.log(ive);


// const
const infinite = "inft";
console.log(infinite);

// infinite = "0609";
// const 변수는 추후 값 변경 불가능

/**
 * 선언과 할당
 * 
 * 선언 - 변수를 선언
 * var name;
 * 
 * 할당 - 변수에 값을 할당
 * name = hchaehyun;
 * 
 * 변수를 선언만 하고 할당하지 않는 것 가능
 * let cuteCat;
 * 이때 결과는 undefined로 출력됨
 * const는 불가능. 무조건 할당해야 한다(값을 초기화 해야함)
 */
