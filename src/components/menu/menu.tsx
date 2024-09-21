import styles from './menu.module.css';
import AccordionUsage from './acordion';

const Menu = () => {
    return (
    <div className={styles.container}>
        <header className={styles.header}>
            <div> <h1 className={styles.title}>MegaStore</h1>
            </div>
            <nav className={styles.navbar}>
                <div className={styles.menuIcon}>
                    <div className={styles.dropdownContent}></div>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles.dropdownBtn}>Registrar</button>
                    <div className={styles.dropdownContent}>
                    <button className={styles.dropdownItem}>Marca</button>
                    <button className={styles.dropdownItem}>Sucursal</button>
                    <button className={styles.dropdownItem}>Color</button>
                    <button className={styles.dropdownItem}>Talle</button>
                    </div>
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
