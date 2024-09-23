import styles from './menu.module.css';
import AccordionUsage from './acordion';
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
        <nav className={styles.navbar}>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                </div>
                {/* Contenido del menú que se muestra/oculta según el estado */}
                
                {isMenuOpen && (
                    <div className={styles.dropdownContent}>
                    <AccordionUsage />
                    </div>
                    
                )}
                
            </nav>
            <div> <h1 className={styles.title}>MegaStore</h1>
            </div>
        </header>

        <main className={styles.mainContent}> 
            
        </main>

        <footer className={styles.footer}>
            <p>Copyright ©20245Bits+Ema</p>
        </footer> 
    </div>
    );
};

export default Menu
