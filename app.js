                    //************************************************************ */
                    //                        VARIABLES                            */
                    //************************************************************ */


// VARIABLES     TIPOS            CONTENIDO

//           --> string            una letra, una palabra, una frase, un texto; y todo eso siempre debe ir entre comillas simples o dobles da igual.

//           --> number            un numero, una cifra, y nunca el tipo number lleva comillas.

//           --> boolean           este tipo si es binario y solo acepta true o false; nada mas.

//           --> undefined         este tipo hace referencia a una variable que ha sido declarada pero no se le ha asiganado ningun valor.

//           --> null              esto significa que la variable no ha sido declarada. o sea no existe!!!.

//           --> object            variable que contiene un objeto, mas adelante veremos lo que es un objeto.

//           --> array             variable que contiene un array, mas adelante veremos lo que es un array.

 
var nombre  = "Maria";      // un console.log( nombre ) arrojara el siguiente resultado Maria.
var edad    = 25;           // un console.log( edad ) arrojara el siguiente resultado 25.
var conduce = true;         // un console.log( conduce ) arrojara el siguiente resultado true.
var sueldo;                 // un console.log( sueldo ) arrojara el siguiente resultado undefinded.
// var aguinaldo;           // un console.log( aguinaldo ) arrojara el siguiente resultado null.



// OPERADORES 

//      =    operador de asignacion         ejemplo:  a la variable nombre le asignamos el valor "Maria".

//      ==   operador de igualdad           ejemplo:  comparamos la igualdad entre los valores de la variable nombre con el valor "maria".

//      ===  operador de igualdad estricta  ejemplo:  podriamos comparar el valor y el tipo de variable al mismo tiempo para ver si son estrictamente iguales en valor y tipo.


// EJEMPLOS

// ASIGNACION
nombre = "Marcos"
console.log("ASIGNACION => " + nombre)

// COMPARACION DE VALORES

if (nombre == "marcos") {
    console.log("COMPARACION DE VALORES => coincide")
} else {
    console.log("COMPARACION DE VALORES => no coincide")
}

// COMPARACION DE VALOR Y TIPO DE VARIABLE

if (edad === "25") {
    console.log("COMPARACION DE VALOR Y TIPO DE VARIABLE => hay coincidencia estricta")
} else {
    console.log("COMPARACION DE VALOR Y TIPO DE VARIABLE => no hay coincidencia estricta")
}


// CONSIGNA: hacer que ambas comparaciones arrojen el resulado "coincide" en el caso de la primera comparacion, y "hay coincidencia estricta" en el caso de la segunda.