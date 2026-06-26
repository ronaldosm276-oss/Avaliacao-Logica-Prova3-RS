
const valorMetro = 550
const dadosForm = document.querySelector('#formulario')
const lote = document.querySelector('#lote')
const quadra = document.querySelector('#quadra')
const comprimento = document.querySelector('#comprimento')
const largura = document.querySelector('#largura')


dadosForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
   
    let m2 = (comprimento.value * largura.value)
    let valorTotal = (valorMetro * m2)
    
  
    console.log(m2)
    console.log(valorTotal)
    console.log(lote.value)
    console.log(quadra.value)
    console.log(comprimento.value)
    console.log(largura.value)

})