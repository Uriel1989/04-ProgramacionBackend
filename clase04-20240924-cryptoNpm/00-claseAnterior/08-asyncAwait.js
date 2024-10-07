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

// Función asincrónica que realiza cálculos utilizando las funciones suma y multiplica
const calculo = async () => {
    try {
        let res1 = await multiplica(5, 4);  // Espera el resultado de 5 multiplicado por 4
        let res2 = await multiplica(3, 3);  // Espera el resultado de 3 multiplicado por 3
        let resFinal = await suma(res1, res2);  // Espera la suma de los resultados anteriores
        // console.log(resFinal, "operacion");  // Imprime el resultado final (comentado)
        return resFinal;  // Retorna el resultado final
    } catch (error) {
        console.log(`Ocurrió un error... :(`);  // Maneja cualquier error que ocurra en las operaciones anteriores
    }
}

// Función asincrónica principal que ejecuta el cálculo y muestra el resultado
const app = async () => {
    let resultado = await calculo();  // Espera el resultado de la función calculo
    console.log(resultado);  // Imprime el resultado final
}

// Llama a la función principal para ejecutar la aplicación
app();

// Función asincrónica para consultar una API usando fetch
const consultarAPI = async (url) => {
    let resultado = await fetch(url);  // Espera el resultado de la solicitud fetch al URL proporcionado
    let datos = await resultado.json();  // Convierte la respuesta a formato JSON
    return datos;  // Retorna los datos obtenidos
}

// Función asincrónica para buscar usuarios en una API específica
const buscarUsuarios = async () => {
    let usuarios = await consultarAPI("https://reqres.in/api/users?page=2");  // Llama a consultarAPI con el URL específico
    return usuarios;  // Retorna los usuarios obtenidos
}

// Función asincrónica para imprimir los usuarios obtenidos de la API
const imprimeUsuarios = async () => {
    try {
        console.log(await buscarUsuarios());  // Espera y muestra los usuarios obtenidos
    } catch (error) {
        console.log("ocurrió un error...!!!");  // Maneja cualquier error que ocurra durante la obtención de usuarios
    }
}

// Llama a la función imprimeUsuarios para ejecutar la consulta a la API y mostrar los resultados
imprimeUsuarios();


