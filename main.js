
inicio()

function inicio(){
    const inicio = prompt(`Elija una opcion por favor:
                                    Inicio
                                    Fin`) 

    while(inicio!=="Fin")
    {
        datosPasajero()  
    }

} 

function datosPasajero() {
    const nombre = prompt("Ingrese su nombre")
    const apellido = prompt("Ingrese su apellido")
    alert(`Bienvenido ${nombre} ${apellido}`)
    const hora = Number(prompt("Introduzcas su hora de ingreso")) 
    let vuelo = prompt(`Ingrese su destino por favor:
                                Madrid
                                China
                                Argentina`) 
                             
    if(vuelo == "Madrid"){
        verificarVueloM(hora)
    }
    else if( vuelo == "China"){
        verificarVueloC(hora)
    }  
    else if( vuelo == "Argentina"){
        verificarVueloA(hora)
    }
    else if(!isNaN(hora))
    {
        alert("Ingrese los caracteres correctos")
    }
    else{
        alert("ERROR. Destino incorrecto")
    }             
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


