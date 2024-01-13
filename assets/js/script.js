function adicionarCaracter(num){
    const valorDisplay = document.querySelector('.display').value;

    document.querySelector('.display').value = valorDisplay + num;
}

function limpaTela(){
    document.querySelector('.display').value = "";
}

function calcular(){
    const valorDisplay = document.querySelector('.display').value;

    document.querySelector('.display').value = eval(valorDisplay);
}

function inverterNumero(){
    const valorDisplay = document.querySelector('.display').value;

    document.querySelector('.display').value = valorDisplay * -1;
}

// eval -> função nativa do JavaScript que resolve operação matemática