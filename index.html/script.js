// Datos de los productos con imágenes diferentes
const productosData = [
    { nombre: "Mouse Vertical 5D", descripcion: "Mouse con movimientos más fáciles", precio: "$12.99", imagen: "Imagenes-Logo-Distrijaret/mouse-PhotoRoom.png-PhotoRoom.png" },
    { nombre: "Producto 2", descripcion: "Descripción del Producto 2.", precio: "$29.99", imagen: "Imagenes-Logo-Distrijaret/mouse-PhotoRoom.png-PhotoRoom.png" },
    { nombre: "Producto 3", descripcion: "Descripción del Producto 3.", precio: "$39.99", imagen: "Imagenes-Logo-Distrijaret/mouse-PhotoRoom.png-PhotoRoom.png" },
    { nombre: "Producto 4", descripcion: "Descripción del Producto 4.", precio: "$49.99", imagen: "Imagenes-Logo-Distrijaret/mouse-PhotoRoom.png-PhotoRoom.png" },
    { nombre: "Mouse Vertical 5D", descripcion: "Mouse con movimientos más fáciles", precio: "$12.99", imagen: "Imagenes-Logo-Distrijaret/mouse-PhotoRoom.png-PhotoRoom.png" },
    { nombre: "Producto 2", descripcion: "Descripción del Producto 2.", precio: "$29.99", imagen: "Imagenes-Logo-Distrijaret/mouse-PhotoRoom.png-PhotoRoom.png" },
    { nombre: "Producto 3", descripcion: "Descripción del Producto 3.", precio: "$39.99", imagen: "Imagenes-Logo-Distrijaret/mouse-PhotoRoom.png-PhotoRoom.png" },
    { nombre: "Producto 4", descripcion: "Descripción del Producto 4.", precio: "$49.99", imagen: "Imagenes-Logo-Distrijaret/mouse-PhotoRoom.png-PhotoRoom.png" },
    { nombre: "Mouse Vertical 5D", descripcion: "Mouse con movimientos más fáciles", precio: "$12.99", imagen: "Imagenes-Logo-Distrijaret/mouse-PhotoRoom.png-PhotoRoom.png" },
    { nombre: "Producto 2", descripcion: "Descripción del Producto 2.", precio: "$29.99", imagen: "Imagenes-Logo-Distrijaret/mouse-PhotoRoom.png-PhotoRoom.png" },
    { nombre: "Producto 3", descripcion: "Descripción del Producto 3.", precio: "$39.99", imagen: "Imagenes-Logo-Distrijaret/mouse-PhotoRoom.png-PhotoRoom.png" },
    { nombre: "Producto 4", descripcion: "Descripción del Producto 4.", precio: "$49.99", imagen: "Imagenes-Logo-Distrijaret/mouse-PhotoRoom.png-PhotoRoom.png" },
    { nombre: "Producto 5", descripcion: "Descripción del Producto 5.", precio: "$59.99", imagen: "Imagenes-Logo-Distrijaret/mouse-PhotoRoom.png-PhotoRoom.png" },
];

// Función para generar las estructuras de los productos
function generarProductos() {
    const listaProductos = document.getElementById("lista-productos");

    productosData.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <p class="precio">${producto.precio}</p>
                <button class="agregar-carrito" data-precio="${producto.precio}">Obtener</button>
            </div>
        `;

        listaProductos.innerHTML += productoHTML;
    });
}

// Llama a la función para generar los productos al cargar la página
window.addEventListener("load", generarProductos);
