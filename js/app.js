const productos = {
    quesillo: { precio: 5000, imagen: '../images/quesillo-tajado.png' },
    yogurt_griego: { precio: 7000, imagen: '../images/yogurt-griego.png' },
    yogurt_semidescremado: { precio: 6500, imagen: '../images/yogurt-semidescremado.png' },
    leche_descremada: { precio: 4500, imagen: '../images/leche-descremada.png' },
    queso_parmesano: { precio: 8000, imagen: '../images/queso-parmesano.png' },
    leche_entera: { precio: 4000, imagen: '../images/leche-entera.png' }
};

let totalCompra = 0;
let facturaProductos = [];

function cambiarProducto() {
    const seleccion = document.getElementById('opciones').value;
    const producto = productos[seleccion];

    document.getElementById('producto-seleccionado').value = seleccion.replace('_', ' ').toUpperCase();
    document.getElementById('imagen-producto').src = producto.imagen;
    actualizarTotal();
}

function actualizarTotal() {
    const seleccion = document.getElementById('opciones').value;
    const cantidad = document.getElementById('cantidad').value;
    const producto = productos[seleccion];

    const total = producto.precio * cantidad;
    document.getElementById('total-precio').innerText = `$${total}`;
}

function comprarProducto() {
    const seleccion = document.getElementById('opciones').value;
    const cantidad = document.getElementById('cantidad').value;
    const producto = productos[seleccion];

    const subtotal = producto.precio * cantidad;
    totalCompra += subtotal;

    facturaProductos.push({ nombre: seleccion.replace('_', ' ').toUpperCase(), cantidad, subtotal });
    renderizarFactura();
}

function renderizarFactura() {
    const facturaBody = document.getElementById('factura-body');
    facturaBody.innerHTML = ''; 
    facturaProductos.forEach((producto, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.subtotal}</td>
            <td><button onclick="borrarProducto(${index})">Borrar</button></td>
        `;
        facturaBody.appendChild(row);
    });

    document.getElementById('total-compra').innerText = `TOTAL: $${totalCompra}`;
}

function borrarProducto(index) {
    const producto = facturaProductos[index];
    totalCompra -= producto.subtotal;
    facturaProductos.splice(index, 1);
    renderizarFactura();
}

function borrarTodo() {
    facturaProductos = [];
    totalCompra = 0;
    renderizarFactura();
}
function comprarProducto() {
    const seleccion = document.getElementById('opciones').value;
    const cantidad = document.getElementById('cantidad').value;
    const producto = productos[seleccion];

    const subtotal = producto.precio * cantidad;
    totalCompra += subtotal;

    facturaProductos.push({ nombre: seleccion.replace('_', ' ').toUpperCase(), cantidad, subtotal });
    renderizarFactura();

    document.getElementById('producto-seleccionado').value = '';
    document.getElementById('cantidad').value = 1;
    document.getElementById('opciones').value = '';
}

function borrarTodo() {
    facturaProductos = [];
    totalCompra = 0;
    renderizarFactura();

    
    document.getElementById('producto-seleccionado').value = '';
    document.getElementById('cantidad').value = 1;
    document.getElementById('opciones').value = '';
}

function comprarProducto() {
    const seleccion = document.getElementById('opciones').value;
    const cantidad = document.getElementById('cantidad').value;

    if (cantidad < 1) {
        alert("La cantidad debe ser mayor a 0.");
        return; 
    }

    const producto = productos[seleccion];
    const subtotal = producto.precio * cantidad;
    totalCompra += subtotal;

    
    facturaProductos.push({ nombre: seleccion.replace('_', ' ').toUpperCase(), cantidad, subtotal });
    renderizarFactura();

    
    document.getElementById('producto-seleccionado').value = '';
    document.getElementById('cantidad').value = 1;
    document.getElementById('opciones').value = '';
}
