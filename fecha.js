let fecha = "29-02-2024" //hay que obtener 2024-02-29

function arreglar_fecha(fecha){
    //1. Lo paso a array
    fecha = fecha.split("-")

    //2. lo organizo
    let fechaOK = fecha[2] + "-"+ fecha[1]+"-" + fecha[0]

    return fechaOK;
}

console.log(arreglar_fecha(fecha));



//array para dividir en partes el string inicial
let arrayFecha = fecha.split("-")
console.log(arrayFecha);

//vamos a invertir los elementos
let fechaInvertida = arrayFecha[2] + "-" + arrayFecha[1] + "-" + arrayFecha[0]
console.log(fechaInvertida);