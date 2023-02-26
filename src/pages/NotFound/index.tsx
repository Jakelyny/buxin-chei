import styles from './NotFound.module.scss'; 
import logo from 'assets/police.gif';
import classNames from 'classnames';
import stylesTema from 'styles/Tema.module.scss';

export default function NotFound() {
  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <img src={logo} alt="Não encontrado" />
      <h2>Ops.. Não há nada para se ver aqui amigo...</h2>
    </div>
  );
}