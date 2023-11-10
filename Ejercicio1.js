//1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

// Solicitar al usuario un número usando un bucle while
var numeroUsuario = prompt("Ingrese un número:");
var numero = parseInt(numeroUsuario);

// Validar si la entrada es un número
if (isNaN(numero)) {
  console.log("Por favor, ingrese un número válido.");
} else {
  // Mostrar los múltiplos de 5 hasta el número ingresado usando un bucle while
  console.log("Múltiplos de 5 hasta " + numero + ":");

  var i = 1;
  while (i <= numero) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
}
