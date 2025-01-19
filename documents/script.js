function showAlert() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('customAlert').style.display = 'block';
}

function closeAlert() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('customAlert').style.display = 'none';
}

// Mostrar el alert automáticamente cuando se carga la página
window.onload = showAlert;

document.getElementById('currentYear').textContent = new Date().getFullYear();

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const currentItem = button.parentElement;
        const isActive = currentItem.classList.contains('active');

        // Cerrar todos los acordeones
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });

        // Abrir el actual si no estaba activo
        if (!isActive) {
            currentItem.classList.add('active');
        }
    });
});

// Cerrar al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.accordion-item')) {
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });
    }
});
