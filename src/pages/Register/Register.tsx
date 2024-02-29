import style from './Register.module.css';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <h1 className={style.h1}>Cadastro</h1>
        <form action="" method='post' className={style.form}>
          <input type="text" name='name' required placeholder='Nome' className={style.input} />
          <input type="email" name='email' required placeholder='Email' className={style.input} />
          <input type="tel" name="tel" required placeholder='Celular (ex: 31911223344)' className={style.input} />
          <input type="password" name='password' required placeholder='Senha' className={style.input} />
          <input type="submit" value="Cadastrar" className={`${style.inputSubmit}`} />
        </form>
        <Link to="/"><button>Entrar</button></Link>
      </div>
    </div>
  )
}