function calculate(percentage) {
    const bill = parseFloat(document.getElementById("bill").value);
    const people = parseInt(document.getElementById("value-number-people").value);

    const tipOutput = document.getElementById("tipPerPerson");
    const totalOutput = document.getElementById("totalPerson");

    if(!bill || !people || people <= 0){
        alert("Por favor,preencha o valor da conta e a quantidade de pessoas")
        return
    }

    const totalTip = bill *(percentage /100);

    const tipPerPerson = totalTip / people;

    const totalPerson = (bill + totalTip) / people;

    tipOutput.value = tipPerPerson.toFixed(2);
    totalOutput.value = totalPerPerson.toFixed(2);
}

function reset(){
    document.getElementById("bill").value="";
    document.getElementById("value-number-people").value="";
    document.getElementById("tipPerPerson").value="";
    document.getElementById("totalPerson").value="";
}

// // 1. Criamos a função principal que os botões chamam
// function calculate(percentage) {
//     // 2. Pegamos os elementos de ENTRADA (Input)
//     // Importante: Pegar o .value DENTRO da função para ler o que foi digitado AGORA
//     const bill = parseFloat(document.getElementById("bill").value);
//     const people = parseInt(document.getElementById("value-number-people").value);

//     // 3. Pegamos os elementos de SAÍDA (Onde o resultado vai aparecer)
//     const tipOutput = document.getElementById("tipPerPerson");
//     const totalOutput = document.getElementById("totalPerson");

//     // 4. Validação: Se não houver valor ou pessoas, não faz nada (evita erro de cálculo)
//     if (!bill || !people || people <= 0) {
//         alert("Por favor, preencha o valor da conta e a quantidade de pessoas!");
//         return;
//     }

//     // --- LÓGICA MATEMÁTICA ---
    
//     // Cálculo da Gorjeta Total
//     const totalTip = bill * (percentage / 100);
    
//     // Saída 1: Porcentagem (Gorjeta) dividida por pessoas
//     const tipPerPerson = totalTip / people;
    
//     // Saída 2: (Valor da conta + Gorjeta total) dividido por pessoas
//     const totalPerPerson = (bill + totalTip) / people;

//     // 5. MOSTRAR NA TELA
//     // .toFixed(2) serve para deixar com duas casas decimais (ex: 1.50)
//     tipOutput.value = tipPerPerson.toFixed(2);
//     totalOutput.value = totalPerPerson.toFixed(2);
// }

// // Função para o botão Reset
// function reset() {
//     document.getElementById("bill").value = "";
//     document.getElementById("value-number-people").value = "";
//     document.getElementById("tipPerPerson").value = "";
//     document.getElementById("totalPerson").value = "";
// }