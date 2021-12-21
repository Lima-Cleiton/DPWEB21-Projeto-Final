
var valorTotal
var total = 0

function adicionarPizza(valor, checkbox){
    

    if(checkbox.checked == false){
        total = Number(total - valor)
        valorTotal = total
        
        document.querySelector('#total').innerHTML = `Total R$ ${total.toFixed(2)}`
    }else{
        total = Number(total + valor)
        valorTotal = total

        document.querySelector('#total').innerHTML = `Total R$ ${total.toFixed(2)}`
    }
}

function enviarWhatsapp(){
    var saboresSelecionados = []
    var x = 0

    let inputs = document.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].checked){
            saboresSelecionados[x] = inputs[i].value
            x++
        }
    }

    if(saboresSelecionados.length !== 0){
        let frase = `Olá, vim pelo site e gostaria de fazer um pedido! Desejo os sabores: ${saboresSelecionados.toString()}. Com o valor de: ${valorTotal}`
        
        let urlWpp = `https://api.whatsapp.com/send?phone=5511946080861&text=${frase}`
        window.open(urlWpp)
    }else{
        let frase = `Olá, vim pelo site e gostaria de fazer um pedido!`

        let urlWpp = `https://api.whatsapp.com/send?phone=5511946080861&text=${frase}`
        window.open(urlWpp)
    }
}




function menuPizza(){
    document.getElementById("selecionado1").style.color = "#e4e4e4"
    document.getElementById("selecionado1").style.backgroundColor = "#C10E0E"
    document.getElementById("selecionado1").style.borderRadius = "15%"
    document.getElementById("selecionado1").style.padding = "5px"
    document.getElementById("forlumarioPizza").style.display = "block"
}
