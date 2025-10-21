import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './ProductosFilter.css';


const ProductosFilter = ({agregarProducto, filtro="", filtroCategory=""}) => {  // Recibimos 'filtro' mediante destructuring de props

    // Estado para guardar todos los productos obtenidos de la API
    const [productos, setProductos] = useState([]);
    // Estado para manejar el estado de carga (loading)
    const [cargando, setCargando] = useState(true);
    // Estado para manejar cualquier error que pueda ocurrir
    const [error, setError] = useState(null);

    // Conexión a la API de FakeStore
    const API_URL = 'https://fakestoreapi.com/products';

    // Llamada a la API 
    useEffect(() => {
        fetch(API_URL)
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setProductos(datos);
            })
            .catch((error) => {
                setError('Error: '+ error.message);
            })
            .finally(() => {
                setCargando(false);
            })
    },[]);

     // Filtrar los productos usando la prop 'filtro'
    const productosFiltradosTitle = productos.filter(producto => {
        if (!filtro) return true; // Si no hay filtro, mostramos todo.
        // Convertir la descripción a minúsculas para hacer una búsqueda insensible a mayúsculas
        return producto.title.toLowerCase().includes(filtro);
    });

     // Filtrar los productos usando la prop 'filtroCategory'
    const productosFiltrados = productosFiltradosTitle.filter(producto => {
        if (!filtroCategory) return true; // Si no hay filtro, mostramos todo.
        // Convertir la descripción a minúsculas para hacer una búsqueda insensible a mayúsculas
        return producto.category.toLowerCase().startsWith(filtroCategory);
    });

    // Mostrar estados de carga y error
    if (cargando) {
        return <div>Cargando productos...</div>;
    }
    if (error) {
        return <div>Error al cargar los productos: {error}</div>;
    }

    let filtroString="";
    switch (filtroCategory) {
        case 'men':
            filtroString = 'Caballeros';
            break;
        case 'women':
            filtroString = 'Damas';
            break;
        case 'jewelery':
            filtroString = 'Joyería';
            break;
        case 'electronics':
            filtroString = 'Electrónica';
            break;
        default:
            // Se ejecuta si ninguno de los casos anteriores coincide
            filtroString = '';
            break;
    }

    // Mostrar la lista de productos filtrados
    return (
    <div>
        <h2>Productos {filtroString}</h2>
        {filtro.length !== 0 ? (
            <h5>Filtrados por "{filtro}" en la Descripción</h5>
            ) : (
            <h5>Todos los productos</h5>
        )}
    
        {productosFiltrados.length === 0 ? (
            <p className="mensaje-vacio">No se encontraron productos con "{filtro}" en la descripción.</p>
        ) : (
            <ul className="lista-productos"> {/* <- CLASE CLAVE: grid container */}
                {productosFiltrados.map((producto) => (
                    <li key={producto.id} className="producto-tarjeta"> {/* <- CLASE CLAVE: product card */}
                        <img src={producto.image} height={80} width={80} alt={producto.title}/>
                        
                        <div className="contenido-producto">
                            <span className="producto-titulo">{producto.title}</span> 
                            <span className="producto-precio">$ {producto.price.toFixed(2)}</span>
                        </div>

                        <div className="acciones-producto">
                            <button className="boton-agregar" onClick={() => agregarProducto(producto)}>Agregar</button>
                            <Link to={`/productos/${producto.id}`} className="enlace-detalles">Detalles</Link>
                        </div>
                    </li>
                ))}
            </ul>
        )}
    </div>
    );
}

export default ProductosFilter;
