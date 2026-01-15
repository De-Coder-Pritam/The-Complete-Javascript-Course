// // alert("hello world!");
// // console.log(45+13);
// if(NaN === NaN){
//     let num=12;
// }
// myfunction();
//  function myfunction()
// {
//     console.log("Hellow");
// }
// const myfunc = function (){
//     console.log("Hello expression based");
// }
// const myfun = ()=>{
//     console.log("Arrow Function");
// }
// myfunc();
// myfun();

// let arr = ['Pritam','Sohan','Chotu'];
// console.log(arr);
// arr.push(34);
// console.log(arr);
// arr.unshift(342);
// console.log(arr);
// console.log(arr.length);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// console.log(45+34);
// let country="India";
// let personName="Pritam";
// let continent='Europe';
// let population=15;
// console.log(country);
// console.log(personName);
// console.log(continent);
// console.log(population);

const pritam = {
  firstName: 'Pritam',
  lastName: 'Branwal',
  dateOfBirth: 2002,
  calcAge: function () {
    this.age = 2026 - this.dateOfBirth;
    return this.age;
  },
};
console.log(pritam.calcAge());
console.log(pritam.age);

for (let i = 0; i <= 10; i++) {
  console.log(`Rep ${i}`);
}
const priyanka = {
  firstName: 'Priyanka',
  lastName: 'Branwal',
  display: function () {
    console.log(
      `First Name is ${this.firstName} and last name is ${this.lastName}`
    );
  },
};
priyanka.display();

let h1 = document.querySelector('h1');
h1.style.color = 'red';
