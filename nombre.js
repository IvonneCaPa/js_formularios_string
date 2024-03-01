let cliente1 = "   poppins, mary   ";
let cliente2 = "  mouse, mickey  ";
let cliente3 = "  de los anillos, el señor  "
let cliente4 = "  spiderman  ";


function arreglar_nombre(nombre) {
    //1. Quitamos espacios
    nombre = nombre.trim();

    //2. lo volvemos array
    nombre = nombre.split(" ");

    //3. For para que recorra cada elemento y cambiar la primera letra a mayuscula
    let array = "";

    for (let i = 0; i < nombre.length; i++) {
        let temp = nombre[i].charAt(0).toUpperCase().concat("", nombre[i].slice(1));
        // array = array.concat(" ", temp);
        array = array.concat(" ", temp)
    }
    //4. Lo convierto en array para ordenarlo
    array = array.split(",")

    //5. Le digo que si tiene mas de un elemento el array que me lo organice
    if(array.length > 1){
        array = array[1] + " " + array[0]  
        return array.trim()
        // si sólo tiene un elemento que lo muestre
    } else{
        return array[0].trim()
    }
}

console.log(arreglar_nombre(cliente1));
console.log(arreglar_nombre(cliente2));
console.log(arreglar_nombre(cliente3));
console.log(arreglar_nombre(cliente4));

