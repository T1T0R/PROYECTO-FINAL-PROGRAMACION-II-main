class Usuario {
  // Método estático para guardar el usuario
  static guardarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const direccion = document.getElementById("direccion").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!nombre || !apellidos || !direccion || !email || !password) {
      alert("POR FAVOR, COMPLETE TODOS LOS CAMPOS.");
      return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("contraseña", password);

    alert("Usuario registrado exitosamente");
    window.location.href = "/index.html";
  }

  // Método estático para inicio de sesión
  static InicioSesion() {
    const loginEmail = document.getElementById("username").value;
    const loginPassword = document.getElementById("password").value;

    // Recuperar datos del Local Storage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("contraseña");

    // Validar las credenciales
    if (storedEmail === loginEmail && storedPassword === loginPassword) {
      alert("Inicio de sesión exitoso.");
      window.location.href = '/PAGINAS/menuprincipal.html';
    } else if (loginEmail === "" || loginPassword === "") {
      alert("Por favor ingrese su email y/o contraseña.");
    } else {
      alert("Email o contraseña incorrectos.");
    }
  }
}
