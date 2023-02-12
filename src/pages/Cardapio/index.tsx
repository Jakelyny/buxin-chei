import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Buscador from "./Buscador";
import { useState } from "react";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
            Impossível não sair de buxin chei
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
      </section>
    </main>
  )
}