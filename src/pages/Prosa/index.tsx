import styles from './Prosa.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import prosa from 'assets/prosa.jpg';

export default function Sobre() {
  return (
    <section>
      <div className={styles.prosa}>
        <h3 className={stylesTema.titulo}>Uma prosa</h3>
        <img src={prosa} alt="Nosso cantin" />
        <div className={styles.prosa__texto}>
          <h3>Ai! Se sêsse!...</h3>
          <p>
            Se um dia nós se gostasse;<br/>
            Se um dia nós se queresse;<br/>
            Se nós dois se impariásse;<br/>
            Se juntinho nós dois vivesse!<br/><br/>

            Se juntinho nós dois morasse<br/>
            Se juntinho nós dois drumisse;<br/>
            Se juntinho nós dois morresse;<br/>
            Se pro céu nós assubisse?<br/><br/>

            Mas porém, se acontecesse<br/>
            qui São Pêdo não abrisse<br/>
            as portas do céu e fosse,<br/>
            te dizê quarqué toulíce?<br/><br/>

            E se eu me arriminasse<br/>
            e cum tu insistisse,<br/>
            prá qui eu me arrezorvesse<br/>
            e a minha faca puxasse,<br/>
            e o buxo do céu furasse?...<br/><br/>

            Tarvez qui nós dois ficasse<br/>
            tarvez qui nós dois caísse<br/>
            e o céu furado arriasse<br/>
            e as virge tôdas fugisse!!!
          </p>
          <i> - Poeta Zé da Luz - </i>
        </div>
      </div>
    </section>
  );
}