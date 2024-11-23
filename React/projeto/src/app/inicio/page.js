import styles from "../inicio/inicio.module.css";

export default function Inicio() {
    return(
        <main>
            <h1 className={styles.inicio}>Inicio</h1>
            <img src="/image/imagem1.jpg" alt="Imagem da Home" className={styles.pageImage} />
            <p className={styles.paragrafo}>Minha primeira página</p>
        </main>
    )
}