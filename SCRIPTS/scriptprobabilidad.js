function calcularProbabilidad() {
  // Obtener valores de los inputs
  const resultadosFavorables = document.getElementById('casos-favorables').value;
  const resultadosPosibles = document.getElementById('casos-totales').value;

  // Validar que sean números positivos y no vacíos
  if (!resultadosFavorables || !resultadosPosibles || resultadosPosibles <= 0 || isNaN(resultadosFavorables) || isNaN(resultadosPosibles)) {
    alert("Por favor, ingrese valores numéricos válidos.");
    return;
  }

  // Calcular la probabilidad
  const probabilidad = resultadosFavorables / resultadosPosibles;

  // Mostrar el resultado en la caja correspondiente
  const resultadoCaja = document.getElementById('resultado');
  resultadoCaja.innerHTML = `
    <p>La probabilidad de que ocurra un evento con ${resultadosFavorables} resultados favorables y ${resultadosPosibles} resultados posibles es:</p>
    <p><strong>P(E) = ${resultadosFavorables} / ${resultadosPosibles} = ${probabilidad}</strong></p>
    <p>Por lo tanto, la probabilidad es <strong>${probabilidad}</strong>.</p>
  `;
}
