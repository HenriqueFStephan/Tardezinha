let nBebidas = document.getElementById('nBebidas');
const forms = document.querySelectorAll('.frameInput');
let nEstruturas = document.getElementById('nEstruturas');
const formsE = document.querySelectorAll('.frameInputE');
let nAtracoes = document.getElementById('nAtracoes');
const formsA = document.querySelectorAll('.frameInputA');
let nOutros = document.getElementById('nOutros');
const formsO = document.querySelectorAll('.frameInputO');
const intro1 = document.getElementById('intro1');
let ticketMedio1;
let numeroPessoas1;
const intro2 = document.getElementById('intro2');
let ticketMedio2;
let lucroPrevisto1;
const intro3 = document.getElementById('intro3');
let lucroPrevisto2;
let numeroPessoas2;

intro1.addEventListener('click', function(){
    ticketMedio1 = prompt('Ticket Médio');
    numeroPessoas1 = prompt('Número de Pessoas');
})

intro2.addEventListener('click', function(){
    ticketMedio2 = prompt('Ticket Médio');
    lucroPrevisto1 = prompt('Lucro Previsto');
})

intro3.addEventListener('click', function(){
    lucroPrevisto2 = prompt('Lucro Previsto');
    numeroPessoas2 = prompt('Número de Pessoas');
})

nBebidas.addEventListener('change', function(){
    let numBebidas = document.getElementById('nBebidas').value;
    forms[0].innerHTML = '';
    forms[1].innerHTML = '';
    forms[2].innerHTML = '';
    for (let j = 0; j < numBebidas; j++){
        for (let i = 0; i <forms.length; i++){
            let inputBody = document.createElement('div');
            inputBody.setAttribute('class', 'inputBody');
            forms[i].appendChild(inputBody);
            if (i == 0){
                let input = document.createElement('input');
                let label = document.createElement('label');
                input.setAttribute('class', 'input');
                input.setAttribute('id', `bebida${j+1}`);
                input.setAttribute('type', `input`);
                input.setAttribute('placeholder', `Bebida ${j+1}`);
                label.setAttribute('class', 'form');
                label.setAttribute('for', `bebida${j+1}`);
                label.textContent = `Bebida ${j + 1}`
                inputBody.appendChild(input);
                inputBody.appendChild(label);
            }
            else if (i == 1){
                let input = document.createElement('input');
                let label = document.createElement('label');
                input.setAttribute('class', 'input');
                input.setAttribute('id', `C/P${j+1}`);
                input.setAttribute('type', `input`);
                input.setAttribute('placeholder', `C/P ${j+1}`);
                label.setAttribute('class', 'form');
                label.setAttribute('for', `C/P${j+1}`);
                label.textContent = `C/P ${j + 1}`
                inputBody.appendChild(input);
                inputBody.appendChild(label);
            }
            else{
                let input = document.createElement('input');
                let label = document.createElement('label');
                input.setAttribute('class', 'input');
                input.setAttribute('id', `P/L${j+1}`);
                input.setAttribute('type', `input`);
                input.setAttribute('placeholder', `P/L ${j+1}`);
                label.setAttribute('class', 'form');
                label.setAttribute('for', `P/L${j+1}`);
                label.textContent = `P/L ${j + 1}`
                inputBody.appendChild(input);
                inputBody.appendChild(label);
            }
        }
    }
});

nEstruturas.addEventListener('change', function(){
    let numEstruturas = document.getElementById('nEstruturas').value;
    formsE[0].innerHTML = '';
    formsE[1].innerHTML = '';
    formsE[2].innerHTML = '';
    for (let j = 0; j < numEstruturas; j++){
        for (let i = 0; i <formsE.length; i++){
            let inputBody = document.createElement('div');
            inputBody.setAttribute('class', 'inputBody');
            formsE[i].appendChild(inputBody);
            if (i == 0){
                let input = document.createElement('input');
                let label = document.createElement('label');
                input.setAttribute('class', 'input');
                input.setAttribute('id', `estrutura${j+1}`);
                input.setAttribute('type', `input`);
                input.setAttribute('placeholder', `Estrutura ${j+1}`);
                label.setAttribute('class', 'form');
                label.setAttribute('for', `estrutura${j+1}`);
                label.textContent = `Estrutura ${j + 1}`
                inputBody.appendChild(input);
                inputBody.appendChild(label);
            }
            else if (i == 1){
                let input = document.createElement('input');
                let label = document.createElement('label');
                input.setAttribute('class', 'input');
                input.setAttribute('id', `quantidade${j+1}`);
                input.setAttribute('type', `input`);
                input.setAttribute('placeholder', `Quantidade ${j+1}`);
                label.setAttribute('class', 'form');
                label.setAttribute('for', `quantidade${j+1}`);
                label.textContent = `Quantidade ${j + 1}`
                inputBody.appendChild(input);
                inputBody.appendChild(label);
            }
            else{
                let input = document.createElement('input');
                let label = document.createElement('label');
                input.setAttribute('class', 'input');
                input.setAttribute('id', `valor${j+1}`);
                input.setAttribute('type', `input`);
                input.setAttribute('placeholder', `Valor ${j+1}`);
                label.setAttribute('class', 'form');
                label.setAttribute('for', `valor${j+1}`);
                label.textContent = `Valor ${j + 1}`
                inputBody.appendChild(input);
                inputBody.appendChild(label);
            }
        }
    }
});

nAtracoes.addEventListener('change', function(){
    let numAtracoes = document.getElementById('nAtracoes').value;
    formsA[0].innerHTML = '';
    formsA[1].innerHTML = '';
    for (let j = 0; j < numAtracoes; j++){
        for (let i = 0; i <formsA.length; i++){
            let inputBody = document.createElement('div');
            inputBody.setAttribute('class', 'inputBody');
            formsA[i].appendChild(inputBody);
            if (i == 0){
                let input = document.createElement('input');
                let label = document.createElement('label');
                input.setAttribute('class', 'input');
                input.setAttribute('id', `atracao${j+1}`);
                input.setAttribute('type', `input`);
                input.setAttribute('placeholder', `Atração ${j+1}`);
                label.setAttribute('class', 'form');
                label.setAttribute('for', `atracao${j+1}`);
                label.textContent = `Atração ${j + 1}`
                inputBody.appendChild(input);
                inputBody.appendChild(label);
            }
            else {
                let input = document.createElement('input');
                let label = document.createElement('label');
                input.setAttribute('class', 'input');
                input.setAttribute('id', `custo${j+1}`);
                input.setAttribute('type', `input`);
                input.setAttribute('placeholder', `Custo ${j+1}`);
                label.setAttribute('class', 'form');
                label.setAttribute('for', `custo${j+1}`);
                label.textContent = `Custo ${j + 1}`
                inputBody.appendChild(input);
                inputBody.appendChild(label);
            }
        }
    }
});

nOutros.addEventListener('change', function(){
    let numOutros = document.getElementById('nOutros').value;
    formsO[0].innerHTML = '';
    formsO[1].innerHTML = '';
    for (let j = 0; j < numOutros; j++){
        for (let i = 0; i <formsO.length; i++){
            let inputBody = document.createElement('div');
            inputBody.setAttribute('class', 'inputBody');
            formsO[i].appendChild(inputBody);
            if (i == 0){
                let input = document.createElement('input');
                let label = document.createElement('label');
                input.setAttribute('class', 'input');
                input.setAttribute('id', `outro${j+1}`);
                input.setAttribute('type', `input`);
                input.setAttribute('placeholder', `${j+1}`);
                label.setAttribute('class', 'form');
                label.setAttribute('for', `outro${j+1}`);
                label.textContent = `${j + 1}`
                inputBody.appendChild(input);
                inputBody.appendChild(label);
            }
            else {
                let input = document.createElement('input');
                let label = document.createElement('label');
                input.setAttribute('class', 'input');
                input.setAttribute('id', `preco${j+1}`);
                input.setAttribute('type', `input`);
                input.setAttribute('placeholder', `Preço ${j+1}`);
                label.setAttribute('class', 'form');
                label.setAttribute('for', `preco${j+1}`);
                label.textContent = `Preço ${j + 1}`;
                inputBody.appendChild(input);
                inputBody.appendChild(label);
            }
        }
    }
});

let button = document.querySelector('#button');

button.addEventListener('click', function(){
    let totalBebidas = 0 
    let totalEstruturas = 0
    let totalAtracoes = 0
    let totalOutros = 0
    let n = 0;
    let numBebidas = document.getElementById('nBebidas').value;
    let numEstruturas = document.getElementById('nEstruturas').value;
    let numAtracoes = document.getElementById('nEstruturas').value;
    let numOutros = document.getElementById('nOutros').value;
    let tab = document.getElementById('tabBody');
    let listaCabecalhoB = ['Bebida', 'Consumo por Pessoa', 'Preço por Litro'];
    for (let m = 0; m < 3; m++){
        let td = document.createElement('td');
        td.textContent = `${listaCabecalhoB[m]}`
        tab.appendChild(td);
    }
    let td = document.createElement('td');
    td.textContent = 'Total';
    tab.appendChild(td);
    let listaBebidas = ['bebida', 'C/P', 'P/L']
    for (let j = 0; j < numBebidas; j++){
        let tr = document.createElement('tr');
        tab.appendChild(tr);
        for (let i = 0; i < 3; i++){
                td = document.createElement('td');
                n = document.getElementById(`${listaBebidas[i]}`+`${j+1}`).value;
                td.textContent = `${n}`;
                tab.appendChild(td);
        }
    }
    tr = document.createElement('tr');
    tab.appendChild(tr);
    let listaCabecalhoE = ['Estrutura', 'Quantidade', 'Preço'];
    for (let m = 0; m < 3; m++){
        let td = document.createElement('td');
        td.textContent = `${listaCabecalhoE[m]}`
        tab.appendChild(td);
    }
    let listaEstrutura = ['estrutura', 'quantidade', 'valor'];
    for (let j = 0; j < numEstruturas; j++){
        let tr = document.createElement('tr');
        tab.appendChild(tr);
        for (let i = 0; i < 3; i++){
                td = document.createElement('td');
                n = document.getElementById(`${listaEstrutura[i]}`+`${j+1}`).value;
                td.textContent = `${n}`;
                tab.appendChild(td);
        }
    }
    tr = document.createElement('tr');
    tab.appendChild(tr);
    let listaCabecalhoA = ['Atração', 'Valor'];
    for (let m = 0; m < 2; m++){
        let td = document.createElement('td');
        td.textContent = `${listaCabecalhoA[m]}`
        tab.appendChild(td);
    }
    let listaAtracao = ['atracao', 'custo'];
    for (let j = 0; j < numAtracoes; j++){
        let tr = document.createElement('tr');
        tab.appendChild(tr);
        for (let i = 0; i < 2; i++){

                td = document.createElement('td');
                n = document.getElementById(`${listaAtracao[i]}`+`${j+1}`).value;
                td.textContent = `${n}`;
                tab.appendChild(td);
        }
    }
    tr = document.createElement('tr');
    tab.appendChild(tr);
    let listaCabecalhoO = ['Outro', 'Valor'];
    for (let m = 0; m < 2; m++){
        let td = document.createElement('td');
        td.textContent = `${listaCabecalhoO[m]}`
        tab.appendChild(td);
    }
    let listaOutro = ['outro', 'preco'];
    for (let j = 0; j < numOutros; j++){
        let tr = document.createElement('tr');
        tab.appendChild(tr);
        for (let i = 0; i < 2; i++){
                td = document.createElement('td');
                n = document.getElementById(`${listaOutro[i]}`+`${j+1}`).value;
                td.textContent = `${n}`;
                tab.appendChild(td);
        }
    }
    /*tr = document.createElement('tr');
    tab.appendChild(tr);
    td = document.createElement('td');
    td.textContent = 'Total';
    tab.appendChild(td);
    td = document.createElement('td');
    let total = totalAtracoes + totalBebidas + totalEstruturas + totalOutros;
    console.log(total)
    td.textContent = total;
    tab.appendChild(td);*/
});