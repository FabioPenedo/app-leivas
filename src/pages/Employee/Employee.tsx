import style from './Employee.module.css';
import logo from '../../assets/Logo.svg';
import { AiOutlineDown } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiImport } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { UserList } from '../../components/UserList';

export const Employee = () => {
  return (
    <div className={style.container}>
      <div className={style.upSide}>
        <img src={logo} alt="" />
        <div className={style.settings}>
          <div className={style.user}>
            <h1>Fábio Penedo</h1>
            <p>Fúncionario</p>
            <AiOutlineDown />
          </div>
        </div>
      </div>
      <div className={style.upDown}>
        <div className={style.left}>
          <div className={style.menu}>
            <CiHome className={style.icon} />
            <h1>ínicio</h1>
          </div>
          <div className={`${style.menu} ${style.current}`}>
            <CiUser className={style.icon} />
            <h1>Lista</h1>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.rightUpdown}>
            <div className={style.rightIcons}>
              <CiEdit className={style.icon} />
              <CiImport className={style.icon} />
              <CiCirclePlus className={style.icon} />
            </div>
            <input type="number" min="1900" max="2100" placeholder="Ano" />
            <input type="search" placeholder='Pesquise o nome' className={style.search} />
          </div>
          <div className={style.rightUpside}>
            <UserList />
            <div className={style.previousAndNext}>
              <button className={style.previous}>Anterior</button>
              <button>Próximo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
