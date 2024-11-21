function calcularBhaskara() {
    // Obtener valores de los inputs
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
  
    // Validar que sean números y que a no sea cero
    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
      alert("Por favor, ingrese valores numéricos válidos. Nota: 'a' no puede ser cero.");
      return;
    }
  
    // Calcular el discriminante
    const discriminante = Math.pow(b, 2) - 4 * a * c;
  
    // Obtener el contenedor de resultados
    const resultadoCaja = document.getElementById('resultado');
  
    // Calcular las soluciones según el discriminante
    if (discriminante > 0) {
      const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      resultadoCaja.innerHTML = `
        <p>El discriminante es positivo (<strong>${discriminante}</strong>).</p>
        <p>Las soluciones son:</p>
        <p><strong>x₁ = ${x1.toFixed(2)}</strong></p>
        <p><strong>x₂ = ${x2.toFixed(2)}</strong></p>
      `;
    } else if (discriminante === 0) {
      const x = -b / (2 * a);
      resultadoCaja.innerHTML = `
        <p>El discriminante es cero (<strong>${discriminante}</strong>).</p>
        <p>La solución única es:</p>
        <p><strong>x = ${x.toFixed(2)}</strong></p>
      `;
    } else {
      resultadoCaja.innerHTML = `
        <p>El discriminante es negativo (<strong>${discriminante}</strong>).</p>
        <p>La ecuación no tiene soluciones reales, solo soluciones complejas.</p>
      `;
    }
  }
  