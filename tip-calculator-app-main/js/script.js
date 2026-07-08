const peopleInput = document.getElementById("value-number-people");
const errorMessage = document.getElementById("error-message");
const tipResult = document.getElementById("tipPerPerson");
const totalResult = document.getElementById("totalPerson");

peopleInput.addEventListener("input", () =>{
const peopleValue = parseInt(peopleInput.value);

    if (peopleValue === 0) {
        errorMessage.style.display = "block";
        peopleInput.classList.add("input-error");
    } else {
        errorMessage.style.display = "none";
        peopleInput.classList.remove("input-error");
    }
});


function calculate(percentage) {
    const bill = parseFloat(document.getElementById("bill").value);
    const people = parseInt(peopleInput.value);

    

    // if(!bill || !people || people <= 0){
    //     alert("Por favor,preencha o valor da conta e a quantidade de pessoas")
    //     return
    // }

    if (isNaN(bill) || isNaN(people) || people <= 0) {
       if (people === 0) {
        errorMessage.style.display = "block";
        peopleInput.classList.add("input-error");
       }
       return;
    }

    const totalTip = bill *(percentage /100);
    const tipPerPerson = totalTip / people;
    const totalPerPerson = (bill + totalTip) / people;

    tipResult.value = "$" + tipPerPerson.toFixed(2);
    totalResult.value = "$" + totalPerPerson.toFixed(2);
}

function reset(){
    document.getElementById("bill").value="";
    peopleInput.value = "";
    tipResult.value = "$0.00";
    totalResult.value = "$0.00";

    customPercentageInput.value="";

    errorMessage.style.display="none";
    peopleInput.classList.remove("input-error");
}

const customPercentageInput = document.getElementById("custom-percentage");

customPercentageInput.addEventListener("input", () =>{
    const customValue = parseFloat(customPercentageInput.value);

    if (!isNaN(customValue) && customValue > 0) {
        calculate(customValue);
    }
});

