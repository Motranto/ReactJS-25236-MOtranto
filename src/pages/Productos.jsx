import { useState } from 'react';

import ProductosFilter from '../components/ProductosFilter';
import Carrito from '../components/Carrito';

const Productos = ({category=""}) => {  // Recibimos 'category' (categoría) mediante destructuring de props
    const [carrito, setCarrito] = useState([]);
    const [search, setSearch] = useState("");

    // Usamos el spread operator (...) para copiar el array existente 
    // y añadir el nuevo producto.
    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);   
    };
    
    // Usamos filter() para crear un nuevo array que excluye el elemento con el índice dado.
    const eliminarDelCarrito = (indiceAEliminar) => {
        setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
    };

    // Para vaciar el carrito completamente
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    return(
        <>
            <label>Búsqueda:  </label>
            <input
                size="50" 
                type="text"
                placeholder="Ingrese texto a buscar..."
                onChange={(e) => setSearch(e.target.value)}
            />
            <hr/>
            {/*Si recibimos el props de category lo usamos pasa filtrar los productos a mostrar*/}
            {category.length !== 0 ? (
                <ProductosFilter agregarProducto={agregarAlCarrito} filtro={search.toLowerCase()} filtroCategory={category}/>
            ) : (
                <ProductosFilter agregarProducto={agregarAlCarrito} filtro={search.toLowerCase()}/>
            )}
            <hr/>
            {/*mostramos el carrito*/}
            <Carrito 
                productosEnCarrito={carrito}
                eliminarProductoCarrito={eliminarDelCarrito}
                vaciarCarrito={vaciarCarrito}
            />
        </>
    );
}

export default Productos;