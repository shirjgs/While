//2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

// Solicitar al usuario dos números entre 1 y 50
var numeroUsuario1 = parseInt(prompt("Ingrese el primer número entre 1 y 50:"));
var numeroUsuario2 = parseInt(prompt("Ingrese el segundo número entre 1 y 50:"));

// Validar si las entradas son números válidos
if (isNaN(numeroUsuario1) || isNaN(numeroUsuario2) ||
    numeroUsuario1 < 1 || numeroUsuario1 > 50 ||
    numeroUsuario2 < 1 || numeroUsuario2 > 50) {
  console.log("Por favor, ingrese números válidos entre 1 y 50.");
} else {
  // Mostrar los números del 1 al 50 con el mensaje "¡Lotería!" para los números ingresados por el usuario
  console.log("Números del 1 al 50:");

  var i = 1;
  while (i <= 50) {
    if (i === numeroUsuario1 || i === numeroUsuario2) {
      console.log(i + " ¡Lotería!");
    } else {
      console.log(i);
    }
    i++;
  }
}
