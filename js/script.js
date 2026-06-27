
const valorMetro = 550
const dadosForm = document.querySelector('#formulario')
const quadra = document.querySelector('#quadra')
const lote = document.querySelector('#lote')
const comprimento = document.querySelector('#comprimento')
const largura = document.querySelector('#largura')
const resultado = document.querySelector('#info')
const total = document.querySelector('#total')
const tipo = document.querySelector('#tipo')

//let indexForm = []
//???? Como usar arrays aqui? Talvez para pegar elementos do DOM seria uma boa, mas como...

//const tiposTerreno = ['pequeno', 'medio', 'grande']
let numForm = 0

dadosForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

   //ainda não sei o que isso faz

    let m2 = (comprimento.value * largura.value)
    let valorTotal = (valorMetro * m2)

    function adicional(perCent)
    {return valorTotal * perCent}

    let valorAdd = 0

    if (valorTotal <= 20000){
        valorAdd = 'Isento'
    }
    else if(valorTotal > 20000 && valorTotal <= 100000){
        valorAdd = 'Aplicado 5%, logo: R$' + adicional(0.05).toFixed(2)
    }
    else if(valorTotal > 100000 && valorTotal <= 500000){
        valorAdd = 'Aplicado 10%, logo: R$' + adicional(0.10).toFixed(2)
    }
    else if(valorTotal > 500000 && valorTotal <= 1000000){
        valorAdd = 'Aplicado 15%, logo: R$' + adicional(0.15).toFixed(2)
    }
    else if (valorTotal > 1000000){
        valorAdd =  'Aplicado 20%, logo: R$' + adicional(0.20).toFixed(2)
    }
    else{
        valorAdd = '???'
    }


    numForm++
   
    total.innerHTML = `<br> Total de entradas: ${numForm}`
    resultado.innerHTML += `Número de entrada: ${numForm} <br> Quadra ${quadra.value} - Lote ${lote.value} | Comprimento = ${comprimento.value} metros | Largura = ${largura.value} metros | Valor total = R$${valorTotal} reais <br> Valor Adicional -> ${valorAdd} <br> <br> <hr>`

    

    lote.value = ''
    quadra.value = ''
    comprimento.value = ''
    largura.value = ''




})

// Logo, falta estrutura de repetição e arrays, como aplicar isso???

//no mínimo criar um código básico, depois ver se consegue aplicar arrow function além do addEventListener

//estou pensando em adicionar números a cada resposta do formulário, e uma função array contando cada entry, e uma div dizendo quantos dados foram preenchidoos, depois quando melhorar minhas habilidades, adicionar um quick link de algo assim: "pule para o formulario entry number x"

/*
    Valor do lote                     Valor adicional

    Até R$ 20.000,00                       Isento

    Entre R$ 20.000,00 até R$ 100.000,00    5%

    Entre R$ 100.000,00 até R$ 500.000,00   10%

    Entre R$ 500.000,00 até R$1.000.000,00  15%

    Acima de R$ 1.000.000,00                20%

    console.log(m2)
    console.log(valorTotal)
    console.log(lote.value)
    console.log(quadra.value)
    console.log(comprimento.value)
    console.log(largura.value)
    console.log((valorAdd))
    
    exemplo array e repetição

    transporte = ['Bicicleta', 'Carro', 'Moto', 'Ônibus', 'Avião', 'Tototo']

    //são apenas 'strings'

    //bicicleta = index 0; tototo = index 5 (começa do zero sempre)

    for (i = 0; i < transporte.length; i++) {
    console.log(transporte[i])
    }





    */

    //fazer algo simples, array para 3 tipos de terreno, repetição para checar se é pequeno, medio, grande