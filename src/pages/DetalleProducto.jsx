import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating"
import './DetalleProducto.css';

const DetalleProducto = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    const URL = `https://fakestoreapi.com/products/${id}`;

    useEffect(() => {
        fetch(URL)
            .then(respuesta => respuesta.json())
            .then(dato => setProducto(dato));
        },[id]);

    if(!producto){
        return <p className="cargando-mensaje">Cargando ......</p>
    }
    return(
        // Contenedor principal
        <div className="detalle-producto-container">
            
            {/* Columna de la Imagen */}
            <div className="detalle-imagen-columna">
                <h2 className="det-producto-id">Producto Nro {id}</h2>
                <img 
                    src={producto.image} 
                    alt={producto.title} 
                    className="det-producto-imagen-grande" 
                />
            </div>
            
            {/* Columna de la Información */}
            <div className="detalle-info-columna">
                <h3 className="det-producto-titulo">{producto.title}</h3>
                <div className="det-producto-rating">
                    <StarRating rating = {producto.rating.rate} /> 
                </div>
                <p className="det-producto-descripcion">{producto.description}</p>
                <h2 className="det-producto-precio">$ {producto.price.toFixed(2)}</h2>
            </div>
        </div>
    );
}

export default DetalleProducto;