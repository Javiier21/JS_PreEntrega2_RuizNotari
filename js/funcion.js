const costoProducto1 = 100;
const costoProducto2 = 200;
const costoServicio1 = 50;

const productos = [
    { tipo: "Producto 1", costo: costoProducto1 },
    { tipo: "Producto 2", costo: costoProducto2 },
    { tipo: "Servicio 1", costo: costoServicio1 }
];

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function simularCompra() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const tipoItem = document.getElementById('tipoItem').value;

    const productoSeleccionado = productos.find(producto => producto.tipo === `Producto ${tipoItem}`);
    
    if (!productoSeleccionado) {
        alert("Opción inválida.");
        return;
    }

    const resultado = multiplicar(productoSeleccionado.costo, cantidad);
    let costoTotal = resultado;

    if (cantidad >= 10) {
        costoTotal *= 0.9;  // Aplicar descuento del 10% para más de 10 unidades
    }

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
        <div class="mt-3">
            <strong>Detalle de la compra:</strong><br>
            Tipo: ${productoSeleccionado.tipo}<br>
            Cantidad: ${cantidad}<br>
            Costo unitario: $${productoSeleccionado.costo}<br>
            Costo total: $${resultado.toFixed(2)}<br>
            Costo total con descuento (si aplica): $${costoTotal.toFixed(2)}
        </div>
    `;
}
