


const datosPasajero = () => {
    const nombre = prompt("Ingrese su nombre")
    const apellido = prompt("Ingrese su apellido")
    alert(`Bienvenido ${nombre} ${apellido}`)
    const hora = Number(prompt("Ingrese su hora de ingreso")) 
    const vuelo = prompt(`Ingrese su destino por favor:
                                Madrid
                                China
                                Argentina`) 

  

    if(!isNaN(hora)){
        verificarVuelo(vuelo,hora)
    }                   
}    

const verificarVuelo = (destino, horaVuelo) => {
    if(destino=="Madrid" && horaVuelo===14)
    {
        alert("Ha llegado a tiempo para su vuelo")
    }
    else if(destino=="China" && horaVuelo===18)
    {
        alert("Ha llegado a tiempo para su vuelo")
    }
    else if(destino=="Argentina" && horaVuelo===8)
    {
        alert("Ha llegado a tiempo para su vuelo")
    }
    else{
        alert("Su avion ya despego")
    }
            
}


datosPasajero()
