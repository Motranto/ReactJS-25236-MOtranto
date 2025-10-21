import './Carrito.css';

const Carrito = ({ productosEnCarrito, eliminarProductoCarrito, vaciarCarrito }) => {
    return (
        <div className="carrito-container">
            <div className="carrito-header">
                <h2>Carrito</h2>
                <button 
                    className="boton-vaciar" 
                    onClick={() => vaciarCarrito()}
                    > 
                    Vaciar Carrito {/* <- Boton para vaciar el carrito llama a la funcion vaciarCarrito() */}
                </button>
            </div>
            {productosEnCarrito.map((producto, indice) => (
                <div key={indice} className="item-carrito"> {/* <- Ítem individual */}
                    <img src={producto.image} alt={producto.title} height={80} width={80} />
                    <p> 
                        {producto.title} : <span>$ {producto.price.toFixed(2)}</span>
                    </p>
                    <button 
                        className="boton-eliminar" 
                        onClick={() => eliminarProductoCarrito(indice)}
                        >
                        Eliminar {/* <- Boton para eliminar un item del carrito llama a la funcion eliminarProductoCarrito() */}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Carrito;