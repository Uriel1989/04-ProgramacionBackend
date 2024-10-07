// Define una función 'suma' que toma dos argumentos y devuelve una promesa
const suma = (a, b) => {
    return new Promise((res, rej) => {   // 'res' es la función para resolver la promesa, 'rej' para rechazarla

        // Verifica si los argumentos son números
        if (typeof a != "number" || typeof b != "number") {
            // Si alguno de los argumentos no es un número, rechaza la promesa con un mensaje de error
            rej("Argumentos inválidos");
        }

        // Si ambos argumentos son válidos, resuelve la promesa con la suma de 'a' y 'b'
        res(a + b);
        // También se podría usar: res("Juan") para resolver con un valor diferente (comentar esta línea)
    });
}

// Define una función 'multiplica' que toma dos argumentos y devuelve una promesa
const multiplica = (a, b) => {
    return new Promise((res, rej) => {   // 'res' es la función para resolver la promesa, 'rej' para rechazarla

        // Verifica si los argumentos son números
        if (typeof a != "number" || typeof b != "number") {
            // Si alguno de los argumentos no es un número, rechaza la promesa con un mensaje de error
            rej("Argumentos inválidos");
        }

        // Si ambos argumentos son válidos, resuelve la promesa con el producto de 'a' y 'b'
        res(a * b);
        // También se podría usar: res("Juan") para resolver con un valor diferente (comentar esta línea)
    });
}

// Ejemplo de uso: 5 + 5
suma(5, 5)
    .then(res1 => {  // Maneja el resultado de la primera suma
        suma(res1, 5)  // Llama a suma nuevamente usando el resultado anterior (10) y 5
            .then(res2 => {  // Maneja el resultado de la segunda suma
                suma(res2, 5)  // Llama a suma nuevamente usando el resultado anterior (15) y 5
                    .then(resFinal => {  // Maneja el resultado de la tercera suma
                        console.log(resFinal, "Promise Hell");  // Imprime el resultado final (20) y un mensaje
                    });
            });
    });

// Ejemplo mejorado de encadenamiento de promesas: 5 + 5
suma(5, 5)
    .then(res1 => {
       return suma(res1, 5);  // Retorna la segunda suma para encadenar la promesa
    })
    .then(res2 => {
        return suma(res2, 5);  // Retorna la tercera suma para encadenar la promesa
    })
    .then(resFinal => {
        console.log(resFinal, "encadenamiento de promesas");  // Imprime el resultado final (20) y un mensaje
    })
    .catch(error => console.log(error)); // Maneja cualquier error que ocurra

// Ejemplo de manipulación de texto: 5 + 5
suma(5, 5)
    .then(res1 => {
        return `el resultado de 5 + 5 es ${res1}`; // Crea una cadena con el resultado
    })
    .then(res2 => {
        return res2.toUpperCase(); // Convierte la cadena a mayúsculas
    })
    .then(res3 => {
        return res3.split(" "); // Divide la cadena en un array por espacios
    })
    .then(resFinal => console.log(resFinal, "resultado en texto")); // Imprime el array resultante y un mensaje

// Ejemplo combinado: (5 * 4) + (3 * 3)
let auxiliar01 = 0; // Variable auxiliar para almacenar el resultado de la primera multiplicación
multiplica(5, 4)   // Llama a multiplica con los argumentos 5 y 4
    .then(res1 => {
        auxiliar01 = res1; // Almacena el resultado en auxiliar01
        return multiplica(3, 3); // Llama a multiplica nuevamente con los argumentos 3 y 3
    })
    .then(res2 => {
        return suma(auxiliar01, res2); // Suma los resultados almacenados en auxiliar01 y res2
    })
    .then(resFinal => console.log(resFinal, "operacion")); // Imprime el resultado final de la operación combinada
