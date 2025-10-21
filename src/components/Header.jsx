import Navbar from './Navbar';
import styles from './Header.module.css'; 

const Header = () => {
    return (
        <>
            <header className={styles.encabezado}>
                <div>
                    <h1 className={styles.encabezadoH1}>Ideal "Clothes to Wear"</h1>
                    <h3 className={styles.encabezadoH3}>Donde vestirse es un placer</h3>
                    <div className={styles.comision}>
                        <p>Comision 25236 ReactJS / <span className={styles.name}>OTRANTO Marcelo Daniel</span></p>
                    </div>
                </div>
            </header>
            <div>
                <Navbar/>
            </div>
            <hr/>
        </>
    );
};

export default Header;