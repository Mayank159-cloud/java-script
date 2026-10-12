
for(let count=1;count<=5;count++){
    console.log("mayank")
}
// calculate sum of n
let sum=0;
for(let i=0;i<=5;i++){
    sum+=i
}
console.log(sum)
let i=1
while(i<=5){
    console.log(i)
    i++
}
//for of loop used for String or array
let s="gamer"
let size=0

for(let i of s){
    console.log("i=",i)
    size++
}
console.log("string size=",size)
// for in loop 
let Student={
    Name:"Jony",
    age:15,
    cgpa:9.5,
    Branch:"CSE"
}
for(let i in Student){
    console.log(i,":",Student[i]) 
    //return key value only 
}
// print even no from 0 to 100
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log("Even no:",i)
    }
}
let gameno=25
let usernum=prompt("Guess your number:")
while(gameno!=usernum){
    usernum=prompt("guess another no :")
}
console.log("Congrats you enter right no ")
// String 
let str="HORSE"
console.log(str[3])
// template literals 
let obj={
    name:'pen',
    price:150
}
let output=`the price of ${obj.name} is ${obj.price}`
console.log(output)
let k='WATER'
console.log(k.toLowerCase())
// s. trim remove space
let res=k.slice(0,3)
console.log(res)
// k.concat(str2)
// k.replace()
// k.charAt(idx)
let user=prompt("enter your name");
console.log(`@${user}${user.length}`)