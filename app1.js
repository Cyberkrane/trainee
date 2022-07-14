//CICLOS

// Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. 
// Dicha condición es evaluada antes de ejecutar la sentencia.

// condicion
// Una expresión que se evalúa antes de cada paso del bucle. Si esta condición se evalúa como verdadera, se ejecuta sentencia. 
// Cuando la condición se evalúa como false, la ejecución continúa con la sentencia posterior al bucle while.

// sentencia
// Una sentecia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro de un bucle, 
// utiliza una sentencia block { console.log(n) } para agrupar esas sentencias.



      /////////////////////////////////////////////////////////////
      //                                                         //
      //                        WHILE                            // 
      //                                                         //
      /////////////////////////////////////////////////////////////



// variables
var n = 0;
var x = 0;



while (n < 3) {   // la condicion se encuentra entre los dos parentesis ( n < 3).
  n ++;           // en esta linea el ciclo le suma 1 a n. 
  x += n;         // en esta linea el ciclo le suma n a x.
  console.log("ahora n vale: "+n)  // en esta linea el ciclo, por cada vuelta que pasa muestra por consola el nuevo valor de n.
}
// resultado esperado: 
// ahora n vale: 1
// ahora n vale: 2
// ahora n vale: 3


      /////////////////////////////////////////////////////////////
      //                                                         //
      //                     DO WHILE                            // 
      //                                                         //
      /////////////////////////////////////////////////////////////


// La sentencia (do while) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. 
// La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log("el resultado de do while es: "+result);
// resultado esperado: "12345"