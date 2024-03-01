// Métodos de String

let text_1 = "Hoy es viernes";

console.log(`el string tiene ${text_1.length} caracteres`);



/**para acceder a un caracter en especial esta el atributo charAt() y obtenemos
 * el caracter por la posicion, sirve con at() o tomandolo con un array
 */
console.log(text_1.charAt(2));
console.log(text_1.charAt(4));
console.log(text_1.at(4));
console.log(text_1.at(-5));

console.log(text_1[4]);

let text_2 = text_1.slice(0, 4);
let text_3 = text_1.slice(4, 14);
let text_4 = text_1.slice(4);

console.log(text_1);
console.log(text_2);
console.log(text_3);
console.log(text_4);

let text_5 = text_1.substr(6);
console.log(text_5);

let text_6 = text_1.toUpperCase();
let text_7 = text_1.toLowerCase();

console.log(text_6);
console.log(text_7);

let text_8 = text_1.toLocaleUpperCase();
let text_9 = text_1.toLocaleLowerCase();

console.log(text_8);
console.log(text_9);



let txt1 = "buenos";
let txt2 = "dias";

let saludo = txt1.concat(" ", txt2);
console.log(saludo);


let usuario = "             Maria del mar          "

console.log(usuario.trimStart());
console.log(usuario.trimEnd());



console.log("Hola ".repeat(3));


console.log(text_1);
console.log(text_1.replace("viernes", "jueves"));


let text_10 = "Me gusta mucho mucho mucho JS";
console.log(text_10.replace("mucho", "poco"));

console.log(text_10.replaceAll("mucho", "poco"));


let nombre_completo = "Peter Pan";
console.log(nombre_completo);
let nombre_completo_Array = nombre_completo.split(" ");
console.log(nombre_completo_Array);
let nombre_final = nombre_completo_Array[1] + ", " + nombre_completo_Array[0];
console.log(nombre_final);



/**Ejercicio: */

let cliente1 = "   poppins, mary   ";
let cliente2 = "  mouse, mickey  ";

/**hacer una funcion para que todos los clientes sean por ejemplo Mary Poppins */

//1. Quitamos espacios
cliente1 = cliente1.trim();

//2. lo pasamos a Array
cliente1 = cliente1.split(", ");

//3. Separo los elementos
cliente_nombre = cliente1[0];
cliente_apellido = cliente1[1];

//4. Pongo el primer nombre en mayuscula
cliente_nombre =
  cliente_nombre.charAt(0).toUpperCase() + cliente_nombre.slice(1);
cliente_apellido =
  cliente_apellido.charAt(0).toUpperCase() + cliente_apellido.slice(1);

//5. juntamos todo
console.log(cliente_apellido + " " + cliente_nombre);

console.log(cliente_nombre);
console.log(cliente_apellido);

/***********************FUNCION ORGANIZAR NOMBRES *******************************************/

let cliente3 = "  de los anillos, el señor  ";

function arreglar_nombre() {
  //1. Quitamos espacios
  cliente3 = cliente3.trim();

  //2. lo volvemos array
  cliente3 = cliente3.split(" ");
console.log(cliente3);
  //3. For para que recorra cada elemento y lo cambie a mayusculas

  let cliente4 = "";

  for (let i = 0; i < cliente3.length; i++) {
    let temp = cliente3[i]
      .charAt(0)
      .toUpperCase()
      .concat("", cliente3[i].slice(1));
    cliente4 = cliente4.concat(" ", temp);
  }
  console.log(cliente4);

  //4. Lo convierto en array para ordenarlo
  cliente4 = cliente4.split(",")

  //5. lo ordeno
  cliente4 = cliente4[1].concat(" ",cliente4[0])

  //6. Quito espacios

  cliente4 = cliente4.trim()

  return cliente4;
}

console.log(arreglar_nombre("cliente3"));
/****************************  ORGANIZAR  FECHA *************************************/
let fecha = "29-02-2024" //hay que obtener 2024-02-29

function fecha_ok(){
    //1. Lo paso a array
    fecha = fecha.split("-")

    //2. lo organizo
    let fechaOK = fecha[2] + "-"+ fecha[1]+"-" + fecha[0]

    return fechaOK;
}

console.log(fecha_ok(fecha));


