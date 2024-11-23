import styles from "../contato/contato.module.css";

export default function Contato() {
    return(
        <main>
            <h1 className={styles.contato}>Contato</h1>
            <img src="/image/imagem3.jpg" alt="Imagem da Home" className={styles.pageImage} />
            <p className={styles.paragrafo}>Minha terceira página</p>
        </main>
    )
}