let value = document.getElementById("input-value").value;
let numberPeople = document.getElementById("value-number-people").value;

let percentage5 = document.getElementById("value5").value;
let percentage10 = document.getElementById("value10").value;
let percentage15 = document.getElementById("value15").value;
let percentage25 = document.getElementById("value25").value;
let percentage50 = document.getElementById("value50").value;


function choosePercent5(){
  let valuePercentage5 = value -(5/100);
    let lessValue5 = valuePercentage5 / numberPeople;

    let valuePercentage5Sum = value +(5/100);
    let valueBiggerPercentage5 =  valuePercentage5Sum / numberPeople;

    console.log('oi');
}

choosePercent5()

function choosePercent10() {
   let valuePercentage10 = value -(10/100);
    let lessValue10 = valuePercentage10 / numberPeople;

    let valuePercentage10Sum = value +(10/100);
    let valueBiggerPercentage10 =  valuePercentage10Sum / numberPeople;
}

choosePercent10()

function choosePercent15() {
   let valuePercentage15 = value -(15/100);
    let lessValue15 = valuePercentage15 / numberPeople;

    let valuePercentage15Sum = value +(15/100);
    let valueBiggerPercentage15 =  valuePercentage15Sum / numberPeople;
}

choosePercent15()

function choosePercent25() {
   let valuePercentage25 = value -(25/100);
   let lessValue25 = valuePercentage25/numberPeople;

   let valuePercentage25Sum = value +(25/100);
   let valueBiggerPercentage25 =  valuePercentage25Sum / numberPeople;

}

choosePercent25()

function choosePercent50() {
   let valuePercentage50 = value -(50/100);
   let lessValue150 = valuePercentage50 / numberPeople;

   let valuePercentage50Sum = value +(50/100);
    let valueBiggerPercentage50 =  valuePercentage50Sum / numberPeople;
}

choosePercent50()


     
function reset() {
   
}