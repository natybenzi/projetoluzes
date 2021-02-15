function jan(numjanela){
    var janela = document.getElementById(numjanela).style.background
    var acesa = 'yellow'
    var apagada = 'black'
    
    if(janela == apagada){
        document.getElementById(numjanela).style.background = acesa
    }else{
        document.getElementById(numjanela).style.background = apagada
    } 
}

function botao(){
    var onOff = document.getElementById('botao').style.background
    var on = 'yellow'
    var off = 'black'
    if(onOff == 'white'){
        document.getElementById('botao').style.background = 'green'
        document.getElementById('botao').innerHTML = '<strong>ON</strong>'
        for(var i = 1; i <= 12; i++){            
            document.getElementById('jan' + i.toString()).style.background = on
        }
    }else{
        document.getElementById('botao').style.background = 'white'
        document.getElementById('botao').innerHTML = '<strong>OFF</strong>'
        for(var i = 1; i <= 12; i++){            
            document.getElementById('jan' + i.toString()).style.background = off
        }
    }
    
}