// Función anónima para guardar el usuario
const guardarUsuario = function () {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const direccion = document.getElementById("direccion").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!nombre || !apellidos || !direccion || !email || !password) {
    alert("POR FAVOR, COMPLETE TODOS LOS CAMPOS.");
    return;
  }

  // Guardar en Local Storage
  localStorage.setItem("email", email);
  localStorage.setItem("contraseña", password);

  // Mostrar mensaje dinámico
  document.open();
  document.write(`
    <h1>Usuario registrado exitosamente</h1>
    <p>Bienvenido, ${nombre} ${apellidos}. Redirigiéndote al inicio...</p>
  `);
  document.close();

  // Redirigir después de unos segundos
  setTimeout(() => {
    window.location.href = "/index.html";
  }, 3000);
};

// Función anónima para inicio de sesión
const InicioSesion = function () {
  const loginEmail = document.getElementById("username").value;
  const loginPassword = document.getElementById("password").value;

  // Recuperar datos del Local Storage
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("contraseña");

  // Validar las credenciales
  if (storedEmail === loginEmail && storedPassword === loginPassword) {
    document.open();
    document.write(`
      <h1>Inicio de sesión exitoso</h1>
      <p>Bienvenido de nuevo. Redirigiéndote al menú principal...</p>
    `);
    document.close();

    setTimeout(() => {
      window.location.href = "/PAGINAS/menuprincipal.html";
    }, 3000);
  } else if (loginEmail === "" || loginPassword === "") {
    alert("Por favor ingrese su email y/o contraseña.");
  } else {
    alert("Email o contraseña incorrectos.");
  }
};
