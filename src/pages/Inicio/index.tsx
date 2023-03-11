import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossoCantin from 'assets/nosso_cantin.jpg';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'Types/Prato';

export default function Inicio() {
  let pratosRecomendados = [ ...cardapio ];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { ...prato}, replace: true});
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Os queridinhos da casa
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button 
              className={styles.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(item)}
            >
              Ver mais
            </button>
          </div>
        ))}      
      </div>
      <h3 className={stylesTema.titulo}>Nosso cantin</h3>
      <div className={styles.nossoCantin}>
        <img src={nossoCantin} alt="Nosso cantin" />
        <div className={styles.nossoCantin__endereco}>
          Rua Joao Damasceno 24 <br/> São Luís - MA
        </div>
      </div>
    </section>
  );
}