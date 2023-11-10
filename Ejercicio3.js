//3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

// Inicializar un arreglo para almacenar los números
var numeros = [];

// Solicitar al usuario ingresar números hasta que ingrese 0
var numeroUsuario;
do {
  numeroUsuario = parseFloat(prompt("Ingrese un número (o 0 para terminar):"));

  // Validar si la entrada es un número válido
  if (!isNaN(numeroUsuario)) {
    numeros.push(numeroUsuario);
  } else {
    console.log("Por favor, ingrese un número válido.");
  }

} while (numeroUsuario !== 0);

// Mostrar la lista de números capturados en consola
console.log("Números capturados:");
console.log(numeros);
