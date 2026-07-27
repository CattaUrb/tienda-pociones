function iniciarTienda() {
  // 1. Preguntar el nombre del cliente
  const nombreCliente = prompt("¡Bienvenido a la Tienda de Pociones Mágicas! ¿Cuál es tu nombre?");

  // Verificar si presionó Cancelar al inicio
  if (nombreCliente === null) {
    alert("Gracias por visitarnos. ¡Hasta pronto!");
  } else {
    // Saludar al cliente usando template literals
    alert(`¡Hola ${nombreCliente}! Es un gusto atenderte.`);

    // 2. Mostrar el menú de 4 pociones con saltos de línea (\n)
    const seleccion = prompt(
      `Por favor, elige una poción ingresando su número (1-4):\n\n` +
      `1. Poción de Curación Intensa - $100\n` +
      `2. Poción de Invisibilidad - $250\n` +
      `3. Elixir de Fuerza de Gigante - $180\n` +
      `4. Filtro de Inteligencia Suprema - $300`
    );

    // 3. Verificar si el usuario presionó Cancelar en el menú
    if (seleccion === null) {
      alert("Gracias por visitarnos. ¡Hasta pronto!");
    } else {
      // Definir las variables donde guardaremos los datos de la elección
      let nombrePocion = "";
      let precio = 0;
      let opcionValida = true;

      // Evaluamos la opción ingresada
      if (seleccion === "1") {
        nombrePocion = "Poción de Curación Intensa";
        precio = 100;
      } else if (seleccion === "2") {
        nombrePocion = "Poción de Invisibilidad";
        precio = 250;
      } else if (seleccion === "3") {
        nombrePocion = "Elixir de Fuerza de Gigante";
        precio = 180;
      } else if (seleccion === "4") {
        nombrePocion = "Filtro de Inteligencia Suprema";
        precio = 300;
      } else {
        opcionValida = false;
      }

      // 4. Mostrar el resultado al usuario
      if (opcionValida) {
        alert(`Gracias por tu compra, ${nombreCliente}.\nElegiste: ${nombrePocion}\nPrecio: $${precio}`);
      } else {
        alert("Lo sentimos, esa poción no existe en la tienda.");
      }
    }
  }
}