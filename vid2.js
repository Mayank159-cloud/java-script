// Operator and Conditional 
let a=5
let b=2
console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
console.log("a%b=",a%b)
console.log("a**b=",a**b)
// unary operator
let x=5
let y=2
x++ ;//x=x+1 post increment
y--;
console.log(x)
console.log(y)
let k=8
console.log("++k=",++k)
// console.log("k++=",k++)
console.log(k)
// assignment operator
let r=9
let u=6
console.log(r+=1) //(-=),/=,*=,%=,**=
// comparison operator
let s=4
let d=2
console.log(s>d) //==,!=,>=,<=
//logical operator 
let q=8
let z=3
cond1=q>z
cond2=q==8
console.log("cond1&&cond2=",cond1&&cond2)
// &&,||,!
//conditional statement
let age=25
if(age>18){
    console.log("You can vote")
}else{
    console.log(" cannot vote")
}
let mode="dark"
let colour
if(mode=="dark"){
    colour="black"
}else if(mode=="white"){
    colour="white"
}else{
    colour="red"
}
console.log(colour)
let x_=10
if(x_%2==0){
    console.log("even")
}else{
    console.log("odd")
}
// ternary operator
let age_a=56
let result=age_a>18?"Adult":"Not Adult"
console.log(result)
let num=prompt("Enter your number")
if(num%5==0){
    console.log("Number is divisible by 5")
}else{
    console.log('Not divisible by 5')
}
let marks=prompt("enter marks ")
if(marks>=80&&marks<=100){
    console.log("A")
}else if(marks>=70&&marks<=89){
    console.log("B")
}else if(marks>=60&&marks<=69){
    console.log("C")
}else{
    console.log("D")
}






