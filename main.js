
inicio()

function inicio(){
    const inicio = prompt(`Elija una opcion por favor:
                                    INICIO
                                    FIN`).toUpperCase() 
    const fin = "FIN"                                

    while(inicio!=fin)
    {
        datosPasajero()  
    }
}
    

function datosPasajero() {
    const nombre = prompt("Ingrese su nombre")
    const apellido = prompt("Ingrese su apellido")
    alert(`Bienvenido ${nombre} ${apellido}`)
    const hora = Number(prompt("Introduzca su hora de ingreso. Se admiten unicamenten caracteres numericos")) 
    let vuelo = prompt(`Ingrese su destino por favor:
                                MADRID
                                CHINA
                                ARGENTINA`).toUpperCase()
    
 
    if(vuelo == "MADRID"){
        verificarVueloM(hora)
    }
    else if( vuelo == "CHINA"){
        verificarVueloC(hora)
    }  
    else if( vuelo == "ARGENTINA"){
        verificarVueloA(hora)
    }
    inicio()
}    

function verificarVueloM(horaVuelo){
    if(horaVuelo===14)
    {
        alert("Ha llegado a tiempo para su vuelo")
    }
    else if(horaVuelo<14)
    {
        alert("Su vuelo todavia no despego")
    }
    else if(horaVuelo>14)
    {
        alert("Su avion ya despego")
    }  
}

function verificarVueloC(horaVuelo2){
    if(horaVuelo2===18)
    {
        alert("Ha llegado a tiempo para su vuelo")
    }
    else if(horaVuelo2<18)
    {
        alert("Su vuelo todavia no despego")
    }
    else if(horaVuelo2>18)
    {
        alert("Su avion ya despego")
    }  
}

function verificarVueloA(horaVuelo3){
    if(horaVuelo3===8)
    {
        alert("Ha llegado a tiempo para su vuelo")
    }
    else if(horaVuelo3<8)
    {
        alert("Su vuelo todavia no despego")
    }
    else if(horaVuelo3>8)
    {
        alert("Su avion ya despego")
    }  
}


