//5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

// Bucle para solicitar al usuario un día de la semana
while (true) {
    // Solicitar al usuario un día de la semana
    var dia = prompt("Ingrese un día de la semana (ej: lunes, martes, ..., domingo):");
  
    // Convertir la entrada del usuario a minúsculas para hacerla insensible a mayúsculas/minúsculas
    var diaMinuscula = dia.toLowerCase();
  
    // Evaluar el día ingresado y mostrar mensajes personalizados
    switch (diaMinuscula) {
      case "lunes":
        alert("¡Ánimo, es lunes!");
        break;
      case "martes":
        alert("Buen martes, ¡sigue adelante!");
        break;
      case "miércoles":
        alert("Mitad de semana, ¡vamos que se puede!");
        break;
      case "jueves":
        alert("Casi llegamos al fin de semana, ¡tú puedes!");
        break;
      case "viernes":
        alert("¡Viernes al fin, a disfrutar!");
        break;
      case "sábado":
        alert("¡Feliz sábado!");
        break;
      case "domingo":
        alert("Ve a descansar");
        // Terminar la captura de información si es domingo
        break;
      default:
        alert("Día no reconocido. Por favor, ingrese un día válido.");
    }
  
    // Terminar el bucle si es domingo
    if (diaMinuscula === "domingo") {
      break;
    }
  }
  