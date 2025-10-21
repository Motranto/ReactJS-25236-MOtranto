import { Link } from "react-router-dom";
import styles from './Navbar.module.css'; 
// Se pide para la pre-entrega
const NavBar = () => {
  return(
    <nav>
      <ul className={styles.lista}>
        <li className={styles.item}>
          <Link to="/"       className={styles.link}>Inicio</Link>
          <Link to="/damas"   className={styles.link}>Damas</Link>
          <Link to="/caballeros"   className={styles.link}>Caballeros</Link>
          <Link to="/joyas"   className={styles.link}>Joyería</Link>
          <Link to="/electronica"   className={styles.link}>Electrónica</Link>
          <Link to="/contacto" className={styles.link}>Contacto</Link>
        </li>
      </ul>
    </nav>
    
  );
}

export default NavBar;