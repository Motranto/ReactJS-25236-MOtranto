import React from 'react';

const MapaGoogle = () => {
    // Código del iframe obtenido de Google Maps:
    const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.38817862661145!2d-58.504830189049265!3d-34.548216250899614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6decbbf1191%3A0xadbb4512241ad407!2sIdeal%20Jeans%20Frixion!5e0!3m2!1ses-419!2sar!4v1760390677071!5m2!1ses-419!2sar";
    
    return (
        <div className="mapa-container" style={{ textAlign: 'center' }}>
            <iframe
                // 1. Atributos estándar
                title="Ubicación de la tienda"
                width="60%"
                height="250"
                style={{ border: 0 }}

                // 2. Fuente del mapa
                src={iframeSrc}
            
                // 3. Atributos que requieren camelCase
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen={true} // 'allowfullscreen' en HTML se convierte a 'allowFullScreen' en JSX
            ></iframe>
        </div>
    );
}

export default MapaGoogle;