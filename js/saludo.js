// Obtener los elementos de 'Registrarse' e 'Iniciar Sesión'
const registerItem = document.getElementById('registerItem');
const loginItem = document.getElementById('loginItem');

// Obtener el nombre del usuario del localStorage
const userName = localStorage.getItem('userName');

// Mostrar el mensaje de bienvenida
const welcomeMessage = document.getElementById('welcomeMessage');


if (userName.length > 1) {
    welcomeMessage.textContent = `Bienvenido, ${userName} !!`;
    // Ocultar los elementos de 'Registrarse' e 'Iniciar Sesión'
    registerItem.style.display = 'none';
    loginItem.style.display = 'none';
}