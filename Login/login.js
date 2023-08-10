// Obtenemos la referencia al input
const input = document.getElementById('input-focus');

// Agregamos un event listener para el evento 'focus'
input.addEventListener('focus', () => {
  input.classList.add('input-focus'); // Agregamos una clase al input
});

// Agregamos un event listener para el evento 'blur'
input.addEventListener('blur', () => {
  input.classList.remove('input-focus'); // Removemos la clase cuando el input pierde el enfoque
});
