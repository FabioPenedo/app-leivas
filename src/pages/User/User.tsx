import style from './User.module.css';
import Logo from '../../assets/Logo.svg';
import { AiOutlineDown } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CiImport } from "react-icons/ci";

export const User = () => {
  return (
    <div className={style.container}>
      <div className={style.upSide}>
        <img src={Logo} alt="" />
        <div className={style.settings}>
          <div className={style.user}>
            <h1>Fábio Penedo</h1>
            <p>Usuario</p>
            <AiOutlineDown />
          </div>
        </div>
      </div>
      <div className={style.upDown}>
        <div className={style.left}>
          <div className={`${style.menu} ${style.current}`}>
            <CiHome className={style.icon}/>
            <h1>Home</h1>
          </div>
          <div className={style.menu}>
            <CiUser className={style.icon}/>
            <h1>Lista</h1>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.rightUpside}>
            <h1>IMPORTE SEU PDF</h1>
            <CiImport className={style.rightImport} />
            <p>Seu PDF foi carregado!</p>
            <button>Enviar</button>
          </div>
          <div className={style.rightUpdown}>
            <button>Declaração</button>
          </div>
        </div>
      </div>
    </div>
  )
}