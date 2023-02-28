import styles from './NotFound.module.scss'; 
import logo from 'assets/police.gif';
import classNames from 'classnames';
import { BsFillReplyAllFill } from 'react-icons/bs';
import stylesTema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <img src={logo} alt="Não encontrado" />
      <h2>Ops.. Não há nada para se ver aqui amigo...</h2>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>
          <BsFillReplyAllFill size={20} />
          {' Voltar'}
        </button>
      </div>
    </div>
  );
}