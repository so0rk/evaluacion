let cantidad = parseInt(prompt("Ingrese un valor numerico mayor a 5: "));


const arrayAleatorio = [];

for (let i = 0; i < cantidad; i++) {
    let valorAleatorio = Math.floor(Math.random() * 900) + 100;
    arrayAleatorio.push(valorAleatorio);
}

console.log(arrayAleatorio);