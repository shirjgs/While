// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

// Inicializar una cadena para almacenar las palabras
var palabras = "";

// Solicitar al usuario ingresar letras o palabras hasta que no ingrese nada
var entradaUsuario;
do {
  entradaUsuario = prompt("Ingrese una letra o palabra (deje en blanco para terminar):");

  // Concatenar la entrada del usuario a la cadena de palabras
  palabras += entradaUsuario + " ";

} while (entradaUsuario !== "");

// Eliminar el espacio adicional al final
palabras = palabras.trim();

// Mostrar la concatenación de todas las palabras capturadas en consola
console.log("Palabras capturadas:");
console.log(palabras);
