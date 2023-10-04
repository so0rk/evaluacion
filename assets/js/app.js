// Pedir al usuario un número mayor que 5
let numeroUsuario = parseInt(prompt("Por favor, ingresa un número mayor que 5:"));


// Verificar si el número es mayor que 5
if (isNaN(numeroUsuario) || numeroUsuario <= 5) {
    alert("El número ingresado no es válido. Debe ser mayor que 5.");
} else {
    // Generar un array con valores aleatorios de 3 cifras
    let arrayAleatorio = [];
    for (let i = 0; i < numeroUsuario; i++) {
        let valorAleatorio = Math.floor(Math.random() * 900) + 100; // Genera un número aleatorio de 3 cifras
        arrayAleatorio.push(valorAleatorio);
    }

    // Mostrar el array original
    console.log("Array Original:");
    console.log(arrayAleatorio);

    // Mostrar el array ordenado descendente
    console.log("Array Ordenado Descendente:");
    let arrayDescendente = [...arrayAleatorio]; // Clonar el array original
    arrayDescendente.sort((a, b) => b - a); // Ordenar en orden descendente
    console.log(arrayDescendente);

    // Mostrar el array ordenado ascendente
    console.log("Array Ordenado Ascendente:");
    let arrayAscendente = [...arrayAleatorio]; // Clonar el array original
    arrayAscendente.sort((a, b) => a - b); // Ordenar en orden ascendente
    console.log(arrayAscendente);
}



// crear una funcion q me devuelva un saludo de despedida

function saludoDespedida(nombre) {
    return "Hasta luego!"+ nombre;
}

console.log(saludoDespedida('mauricio'));