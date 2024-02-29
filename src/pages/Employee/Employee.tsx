import style from './Employee.module.css';
import logo from '../../assets/Logo.svg';
import { AiOutlineDown } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiImport } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";


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
            <h1>Home</h1>
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
            <input type="month" />
            <input type="search" placeholder='Pesquise o nome' className={style.search} />
          </div>
          <div className={style.rightUpside}>
            <div className={style.upSideInfo}>
              <p>1</p>
              <p>Fabio penedo</p>
              <p>fabioteste@gmail.com</p>
              <p>31 09050505</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}