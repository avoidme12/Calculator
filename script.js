const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const resultElement = document.getElementById('result');
const mnoz = document.getElementById('mnoz')
const delenie = document.getElementById('dele')
let action = '+'

console.log('чё смотришь?');

function printResult(result){
    if(result < 0){
        resultElement.style.color = 'red';
        resultElement.style.fontWeight = 500
    }
    else{
        resultElement.style.color = 'green';
        resultElement.style.fontWeight = 500
    }
    resultElement.textContent = result;
}

minus.onclick = function(){
    action = '-'
}

plus.onclick = function(){
    action = '+'
}

mnoz.onclick = function(){
    action = '*'
}

delenie.onclick = function(){
    action = '/'
}

function numWithAction(inp1, inp2, actionSymbol){
    console.log('sfdgu9isfj')
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);

    if(actionSymbol === '+'){
       return num1 + num2;
    }
    else if(actionSymbol === '-'){
        return num1 - num2
    }
    else if(actionSymbol === '*'){
        return num1 * num2
    }
    else if(actionSymbol === '/'){
        return num1 / num2
    }
}


submitBtn.onclick = function(){
    const result = numWithAction(input1, input2, action);
    printResult(result);
}

