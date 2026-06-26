
const valorMetro = 550
const dadosForm = document.querySelector('#formulario')
const quadra = document.querySelector('#quadra')
const lote = document.querySelector('#lote')
const comprimento = document.querySelector('#comprimento')
const largura = document.querySelector('#largura')
const resultado = document.querySelector('#info')


dadosForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

   //ainda não sei o que isso faz


    let m2 = (comprimento.value * largura.value)
    let valorTotal = (valorMetro * m2)
    
    /*
    Valor do lote                     Valor adicional

    Até R$ 20.000,00                       Isento

    Entre R$ 20.000,00 até R$ 100.000,00    5%

    Entre R$ 100.000,00 até R$ 500.000,00   10%

    Entre R$ 500.000,00 até R$1.000.000,00  15%

    Acima de R$ 1.000.000,00                20%
    */
  
    let valorAdd = 0

    if (valorTotal <= 20000){
        valorAdd = 'Isento'
    }
    else if(valorTotal > 20000 && valorTotal <= 100000){
        valorAdd = 'R$' + valorTotal * 0.05
    }
    else if(valorTotal > 100000 && valorTotal <= 500000){
        valorAdd = 'R$' + valorTotal * 0.10
    }
    else if(valorTotal > 500000 && valorTotal <= 1000000){
        valorAdd = 'R$' + valorTotal * 0.15
    }
    else if(valorTotal > 1000000){
        valorAdd =  'Aplicado 20%, logo : R$' + valorTotal * 0.20
    }
    else{
        valorAdd = '???'
    }

    resultado.innerHTML += `Quadra ${quadra.value} - Lote ${lote.value} Comprimento = ${comprimento.value} Largura = ${largura.value} Valor total = R$${valorTotal} reais Valor Adicional: ${valorAdd} reais <br>`

    console.log(m2)
    console.log(valorTotal)
    console.log(lote.value)
    console.log(quadra.value)
    console.log(comprimento.value)
    console.log(largura.value)
    console.log((valorAdd))
    

    lote.value = ''
    quadra.value = ''
    comprimento.value = ''
    largura.value = ''
})


//no mínimo criar um código básico, depois ver se consegue aplicar arrow function além do addEventListener