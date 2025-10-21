import styles from './Footer.module.css'; 
import Reloj from "./Reloj";
import MapaGoogle from './MapaGoogle';

const Footer = () => {
    return (
        <>
        <footer>
            <hr/>
            <h3 className={styles.footerTextoG}>Donde estamos</h3>
            <p className={styles.footerTexto}> Laprida 3808 Villa Martelli, Pcia. de Buenos Aires</p>
            <MapaGoogle/>
            <p className={styles.footerTexto}> Ideal Clothes. Todos los derechos reservados. </p>
            <p className={styles.footerTexto}> Hora Actual: <Reloj/></p>

        </footer>
        </>
    );
}

export default Footer;
