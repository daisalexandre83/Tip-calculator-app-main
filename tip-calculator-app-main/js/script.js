let value = document.getElementById("input-value").value;
let numberPeople = document.getElementById("value-number-people").value;

let percentage5 = document.getElementById("value5").value;
let percentage10 = document.getElementById("value10").value;
let percentage15 = document.getElementById("value15").value;
let percentage25 = document.getElementById("value25").value;
let percentage50 = document.getElementById("value50").value;

function choosePercent(){

 if (percentage5) {
    let valuePercentage5 = value -(5/100);
    let lessValue5 = valuePercentage5 / numberPeople;
    console.log("oi");
 } else if(percentage10) {
    let valuePercentage10 = value -(10/100);
    let lessValue10 = valuePercentage10 / numberPeople;
     console.log("oi");
 }else if (percentage15) {
    let valuePercentage15 = value -(15/100);
    let lessValue15 = valuePercentage15 / numberPeople;
     console.log("oi");
 }else if (percentage25) {
   let valuePercentage25 = value -(25/100);
   let lessValue25 = valuePercentage25/numberPeople;
    console.log("oi");
 }else if (percentage50) {
   let valuePercentage50 = value -(50/100);
   let lessValue150 = valuePercentage50 / numberPeople;
    console.log("oi");
 }
}