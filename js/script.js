
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
    
  
    console.log(m2)
    console.log(valorTotal)
    console.log(lote.value)
    console.log(quadra.value)
    console.log(comprimento.value)
    console.log(largura.value)
    
    resultado.innerHTML += `Quadra ${quadra.value} - Lote ${lote.value} Comprimento = ${comprimento.value} Largura = ${largura.value} Valor total = ${valorTotal} <br>`

    lote.value = ''
    quadra.value = ''
    comprimento.value = ''
    largura.value = ''
})


//no mínimo criar um código básico, depois ver se consegue aplicar arrow function além do addEventListener