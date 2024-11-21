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

  window.location.href='../index.html';
  
  // Redirigir después de unos segundos
  setTimeout(() => {
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
    window.location.href='/PAGINAS/menuprincipal.html';
    setTimeout(() => {
    }, 3000);
  } else if (loginEmail === "" || loginPassword === "") {
    alert("Por favor ingrese su email y/o contraseña.");
  } else {
    alert("Email o contraseña incorrectos.");
  }
};
