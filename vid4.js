let marks=[97,78,45,98,35]
console.log(marks)
console.log(marks.length)
console.log(typeof marks)
let heroes=["ironman","tonystrak","captain","thor","loki"];
// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }

for(let el of heroes){
    console.log(el)
}
let m=[85,97,44,37,76,60]
let sum=0;
for(let el of m){
    sum+=el
}
let avg=sum/6;
console.log(avg)
let item=[250,645,300,900,50]
for(let i=0;i<item.length;i++){
    let offer=item[i]/10
    item[i]=item[i]-offer;
}
for(let val of item){
    console.log(val)
}
//Arrays method
let  fooditem=["burger","sugar","wheat","rice"]
fooditem.push("tea","masala")
console.log(fooditem)
//pop end se delete
//fooditem.tostring convertarray into string
let car=["mercedes","waxwogon","maruti"]
let res=fooditem.concat(car)
console.log(res)
let r=fooditem.slice(1,4)
console.log(r)
//splice()add remove replace
let n=[5,8,6,3]
n.splice(1,1,0)
console.log(n)
// questions
let company =["bloomberg","microsoft","uber","google","IBM","netflix"]
// remove first company
company.shift("bloomberg")
// delete first mei
company.splice(2,1,"ola")
company.push("amazon")
//unshift end mei add