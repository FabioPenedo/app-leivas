import style from './Login.module.css';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <h1 className={style.h1}>Entrar</h1>
        <form action="" method='post' className={style.form}>
          <input type="text" name='name' required placeholder='Nome' className={style.input} />
          <input type="email" name='email' required placeholder='Email' className={style.input} />
          <input type="password" name='password' required placeholder='Senha' className={style.input} />
          <input type="submit" value="Entrar" className={`${style.inputSubmit}`} />
        </form>
        <Link to="/registrar"><button>Registrar</button></Link>
      </div>
    </div>
  )
}