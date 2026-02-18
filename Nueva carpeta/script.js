let carrito = [];
let contadorCarrito = 0;

document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', () => {
        const nombre = button.getAttribute('data-nombre');
        const precio = parseFloat(button.getAttribute('data-precio'));
        carrito.push({ nombre, precio });
        contadorCarrito++;
        document.getElementById('carrito-btn').textContent = `Carrito (${contadorCarrito})`;
        alert(`${nombre} agregado al carrito.`);
    });
});

document.getElementById('carrito-btn').addEventListener('click', () => {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
    } else {
        let total = carrito.reduce((sum, item) => sum + item.precio, 0);
        alert(`Productos en carrito: ${carrito.map(item => item.nombre).join(', ')}\nTotal: $${total}`);
    }
});
