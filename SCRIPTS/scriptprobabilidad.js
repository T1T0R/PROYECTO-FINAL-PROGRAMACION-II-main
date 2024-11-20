// Función para realizar el cálculo de la probabilidad
function calcularProbabilidad() {
    // Definir el número de resultados favorables y el número total de resultados posibles
    const resultadosFavorables = 5; // Ejemplo: 5 resultados favorables
    const resultadosPosibles = 10; // Ejemplo: 10 resultados posibles
  
    // Calcular la probabilidad utilizando la fórmula
    const probabilidad = resultadosFavorables / resultadosPosibles;
  
    // Mostrar el resultado en la caja correspondiente
    const resultadoCaja = document.getElementById('resultado');
    resultadoCaja.innerHTML = `
      <p>La probabilidad de que ocurra un evento con ${resultadosFavorables} resultados favorables y ${resultadosPosibles} resultados posibles es:</p>
      <p><strong>P(E) = ${resultadosFavorables} / ${resultadosPosibles} = ${probabilidad}</strong></p>
      <p>Por lo tanto, la probabilidad es <strong>${probabilidad}</strong>.</p>
    `;
  }
  
  // Llamar a la función para realizar el cálculo cuando la página cargue
  window.onload = calcularProbabilidad;
  