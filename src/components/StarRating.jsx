import React from 'react';

// Este componente recibe una prop llamada "rating" (un número de 1 a 5)
const StarRating = ({ rating }) => {
    const totalStars = 5;

    return (
        <div>
        {/* 1. Creamos un array de 5 elementos vacíos: [...Array(totalStars)]
            2. Usamos .map() para recorrerlo y renderizar una estrella en cada vuelta.
        */}
        {[...Array(totalStars)].map((star, index) => {
            const starValue = index + 1; // Le damos a cada estrella un valor (1, 2, 3, 4, 5)

            // Aquí está la lógica clave con el operador ternario:
            // Si el valor de la estrella es menor o igual al rating,
            // renderiza una estrella llena (★), si no, una vacía (☆).
            return (
            <span key={starValue} style={{ fontSize: '20px', color: '#ffc107' }}>
                {starValue <= rating ? '★' : '☆'}
            </span>
            );
        })}
        </div>
    );
};

export default StarRating;