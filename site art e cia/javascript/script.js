//////////////botao///////////////
let bum = document.querySelector('#um')
let bdois = document.querySelector('#dois')
let btreis = document.querySelector('#treis')
let bquatro = document.querySelector('#quatro')
let fp = document.querySelector('#finalizarpedido')
///////////////////comprar/////////////////
let p1 = ("     batata  33333$")
let p2 = ("  acai 50$")
let p3 = ("     pizza 15$")
let p4 = ("       sorvete 20$")
let link = ("https://api.whatsapp.com/send?phone=553171648372&text= *obrigado por fazer a compra em nosso site , agradecemos sua preferecia* segue a baixo seu pedido ")
let valor_final = 0
let ultimadiv = document.querySelector("#ultimadiv")
let linkdisponivel = document.createElement("p")




function adicionarop1() {
    valor_final = valor_final + 17
    link = link + p1
    linkdisponivel.innerHTML = `<a href="${link}"> enviar pedido </a>`
    ultimadiv.appendChild(linkdisponivel)
   }
   function adicionarop2() {
    valor_final = valor_final + 17
    link = link + p2
    linkdisponivel.innerHTML = `<a href="${link}"> enviar pedido </a>`
    ultimadiv.appendChild(linkdisponivel)
   }
   function adicionarop3() {
    valor_final = valor_final + 17
    link = link + p3
    linkdisponivel.innerHTML = `<a href="${link}"> enviar pedido </a>`
    ultimadiv.appendChild(linkdisponivel)
   }
   function adicionarop4() {
       valor_final = valor_final + 17
    link = link + p4
    linkdisponivel.innerHTML = `<a href="${link}"> enviar pedido </a>`
    ultimadiv.appendChild(linkdisponivel)
   }
   function finalizar_pedido() {
       link = link + "valor"
       link = link + valor_final



       
   }
fp.addEventListener('click' ,finalizar_pedido)
bum.addEventListener('click' , adicionarop1)
bdois.addEventListener('click' , adicionarop2)
btreis.addEventListener('click' , adicionarop3)
bquatro.addEventListener('click' , adicionarop4)

//////////////////div////////////////////
