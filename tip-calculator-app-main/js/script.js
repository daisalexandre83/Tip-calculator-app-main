function calculate(percentage) {
    const bill = parseFloat(document.getElementById("bill").value);
    const people = parseInt(document.getElementById("value-number-people").value);

    const tipOutput = document.getElementById("tipPerPerson");
    const totalOutput = document.getElementById("totalPerson");

    // if(!bill || !people || people <= 0){
    //     alert("Por favor,preencha o valor da conta e a quantidade de pessoas")
    //     return
    // }

    if (isNaN(bill) || isNaN(people) || people <= 0) {
        alert("Por favor,insira valores válidos.");
        return;
    }

    const totalTip = bill *(percentage /100);

    const tipPerPerson = totalTip / people;

    const totalPerPerson = (bill + totalTip) / people;

    tipOutput.value = tipPerPerson.toFixed(2);
    totalOutput.value = totalPerPerson.toFixed(2);
}

function reset(){
    document.getElementById("bill").value="";
    document.getElementById("value-number-people").value="";
    document.getElementById("tipPerPerson").value="";
    document.getElementById("totalPerson").value="";
}

