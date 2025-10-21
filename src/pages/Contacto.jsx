import React, { useState } from 'react';

import './Contacto.css'; 

const Contacto = () => {
    // 1. Inicializar el estado para cada campo
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        comentarios: '',
    });
    
    // 2. Manejar el cambio de los inputs
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    // 3. Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setFormData({
            nombre: '',
            apellido: '',
            email: '',
            comentarios: '',
        });
        
        alert('¡Gracias por contactarnos!');
    };
    
    return (
        // Aplicamos la clase principal
        <div className="formulario-contacto-container"> 
            <h2>Formulario de Contacto</h2>
            <p>Dejanos tus datos y comentarios que te responderemos a la brevedad!</p>
            <form onSubmit={handleSubmit}>
            
            {/* Campo Nombre */}
            <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre" 
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
            </div>
    
            {/* Campo Apellido */}
            <div className="form-group">
                <label htmlFor="apellido">Apellido:</label>
                <input
                    type="text"
                    id="apellido"
                    name="apellido" 
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                />
            </div>
    
            {/* Campo Email */}
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
    
            {/* Campo Comentarios */}
            <div className="form-group">
                <label htmlFor="comentarios">Comentarios:</label>
                <textarea
                    id="comentarios"
                    name="comentarios"
                    value={formData.comentarios}
                    onChange={handleChange}
                    rows="4"
                ></textarea>
            </div>
    
            {/* Botón de Envío */}
            <button type="submit" className="boton-enviar">
                Enviar
            </button>
            </form>
        </div>
    );
}

export default Contacto;