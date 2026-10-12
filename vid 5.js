
function myfunction(msg){
    console.log(msg)
}
myfunction("i love javascript")
function sum(a,b){
    console.log(a+b);
}
sum(6,8)
// arrow funcr=tions
const Arrowsum=(a,b)=>{
    console.log(a+b)
}
Arrowsum(7,9)
const arrowmul=(a,b)=>{
    console.log(a*b)
}
arrowmul(9,5)
const print=()=>{
    console.log("Hello")
}
print();
function printvowels(str){
    let count=0
    for(let i=0;i<str.length;i++){

        if(str[i]=='a'||str[i]=='e' ||str[i]=='i'||str[i]=='o'|| str[i]=='u'){
            count++
        }
    }
    console.log(count)
}
printvowels("mayank")
// arr.foreach func
let arr=[1,3,5,6,3]
arr.forEach (function printval(val){
    console.log(val)
})
let arr2=[1,2,3,4,5];
arr2.forEach((val)=>{
    console.log(val*val)
})
// map 
let arr3=[78,93,25];
arr3.map((val)=>{
    console.log("val is =\t",val)
})
// filter 
 let arr4=[2,6,3,7,8,45,32];
let newarr=arr4.filter((val)=>{
    return val%2==0;
})
console.log(newarr)
