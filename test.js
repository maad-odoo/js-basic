// let promise = new Promise(function(resolve, reject) {
//     let a = 0;
//     setTimeout(()=>{
//     if(a==0){
//         resolve(()=>{console.log("Resolved from promise")})}
//     else{
//         reject("reject")
//     }
//     },1000)
    
//   });

// promise.then(
// function(value){
//     value()
// },
// function(error){
//     console.log(error,".then")
// }).catch((error)=>{console.log(error,".catch")})
// .finally(()=>{console.log("promise is settled")})
// )
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("Whoops!"), 1000);
//   });
  
//   // reject runs the second function in .then
//   promise.then(
//     result => console.log(result), // doesn't run
//     error => console.log(error) // shows "Error: Whoops!" after 1 second
//   );    


//Multi Line String
// console.log(`aaaaa
// sdadasasdsa`)

//Expression Interpolation
// var a = 5;
// var b = 10;
// console.log(`Fifteen is ${a+b} and not ${2*a+b}`)
// var a = "hello";
// console.log(`greeting ${a}`)

//Tagged template literals

// function tag(string, ...values){
//     console.log(string)
//     console.log(values)
//     return "JS Nuggets"
// }

// tag`hello ${a+b} world ${a*b}`
// console.log(tag`hello ${a+b} world ${a*b}`)


// Spread and rest operator
//add the element of an exixting array into a new array
// var arr1 = [1,'d',1.009099]
// var arr2 = ['h','i',['er',234]]
// var arr3 = ['a','b',...arr1,'f','g',...arr2,'k','l']
// console.log(arr3)



//pass element of an array as arguments to a function
// function addthreenumber(x,y,z){
//     console.log(x+y+z)
// }

// var arr = [2,2,9,[1]]
// addthreenumber(...arr)


//copy arrays
// var arr = [1,2,3]
// var arr2 = [...arr]
// arr2.push(4)
// console.log(arr)
// console.log(arr2)

//concatenate arrays
// var arr1 = [0,1,2]
// var arr2 = [3,4,5]
// // arr1.concat(arr2)
// arr1 = [...arr1,'yo!!!',...arr2]
// console.log(arr1)


// REST : condense multiple elements into an array
// function multiply(multiplier,multiple2, ...theArgs){
//     return theArgs.map(function(element){
//         return multiplier*element+multiple2
//     });
// }
// var arr = multiply(2,1,1,2,3)
// console.log(arr)


//Destructuring assignment is used to unpack values from an array,
// or properties from objects, into distinct variable

// let arr = [3,5,4,3,2,4,2,3,4]
// let [a,b] = arr
// console.log(a,b)
// let [a,,b,...rest] = arr
// console.log(a,b,rest)
//Destructing in objects
// let {a,b} = {a:1,b:4}
// console.log(a,b)

// destructure and spread on object for making key value pairs

// let arr1=[3,2,1]
// let obj1 = {...arr1}
// console.log(obj1)

let obj2 = {
    name : "me",
    company: "abs",
    address: "up"
}

console.log({...obj2,name:'u'})
console.log({name:'u',...obj2})
