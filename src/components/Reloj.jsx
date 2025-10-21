import React, { useState, useEffect } from "react";

const Reloj = () => {
    // 1. Definimos las opciones para toLocaleTimeString()
    // hour: '2-digit' o 'numeric'
    // minute: '2-digit' o 'numeric'
    const formatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        // Omitimos 'second' intencionalmente
        hour12: false // Puedes cambiar a true si quieres formato AM/PM
    };

    // Inicializamos el estado sin segundos
    const [time, setTime] = useState(new Date().toLocaleTimeString('es-AR', formatOptions));

    useEffect(() => {
        const timer = setInterval(() => {
            // Actualizamos el estado usando el nuevo formato
            setTime(new Date().toLocaleTimeString('es-AR', formatOptions));
        }, 60000);         
        return () => clearInterval(timer);
    }, []);

    return time;
};

export default Reloj;