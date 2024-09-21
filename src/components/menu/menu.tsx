import styles from './menu.module.css';
import AccordionUsage from './acordion';
import { Accordion } from '@mui/material';
import { useState } from 'react';

const Menu = () => {
    //estado para contrlar la visibilidad del Manu desplegable
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Función para ir cambiando el estado del menú
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
    <div className={styles.container}>
        <header className={styles.header}>
            <div> <h1 className={styles.title}>MegaStore</h1>
            </div>
            <nav className={styles.navbar}>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    <div className={styles.dropdownBtn}></div>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                </div>
                {/* Contenido del menú que se muestra/oculta según el estado */}
                <div className={styles.dropdownBtn}>
                {isMenuOpen && (
                    <div className={styles.dropdownContent}>
                    <button className={styles.dropdownBtn}>Registrar</button>
                    <button className={styles.dropdownItem}>Marca</button>
                    <button className={styles.dropdownItem}>Sucursal</button>
                    <button className={styles.dropdownItem}>Color</button>
                    <button className={styles.dropdownItem}>Talle</button>
                    </div>
                )}
                </div>
            </nav>
        </header>
        <main className={styles.mainContent}> <AccordionUsage></AccordionUsage></main>
        <footer className={styles.footer}>
            <p>Copyright ©20245Bits+Ema</p>
        </footer> 
    </div>
    );
};

export default Menu
