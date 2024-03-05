import style from './User.module.css';
import Logo from '../../assets/Logo.svg';
import { AiOutlineDown } from "react-icons/ai";
import { CiHome } from "react-icons/ci";
import { useState } from 'react';
import { CiSquareRemove } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";

export const User = () => {

  const [modal, setModal] = useState(false)
  const [classModal, setClassModal] = useState(style.container);

  const openModal = () => {
    setModal(true);
    setClassModal(`${style.rightOpen} ${style.containerModal}`);
  }

  const closeModal = () => {
    setModal(false);
    setClassModal(`${style.right} ${style.container}`)
  }

  return (
    <div className={classModal}>
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
            <CiHome className={style.icon} />
            <h1>Inicio</h1>
          </div>
        </div>
        {!modal &&
          <div className={style.right}>
            <div className={style.rightUpside}>
              <h1>IMPORTE SEU PDF</h1>
              <input type="file" accept=".pdf" />
              <p>Seu PDF foi carregado!</p>
              <button>Enviar</button>
            </div>
            <div className={style.rightUpdown}>
              <button onClick={openModal}>Declaração</button>
            </div>
          </div>
        }
        {modal &&
          <div className={style.rightOpen}>
            <div className={style.modal}>
              <div className={style.modalIcon}>
                <CiSquareRemove 
                className={style.icon} 
                onClick={closeModal}
                />
              </div>
              <div className={style.modalInput}>
                <input type="month" />
              </div>
              <div className={style.modalDatas}>
                <div className={style.month}>
                  <div className={style.nameMonth}>
                    <h2>Janeiro</h2>
                    <CiSaveDown2 className={style.icon} />
                  </div>
                  <div className={style.nameMonth}>
                    <h2>Fevereiro</h2>
                    <CiSaveDown2 className={style.icon} />
                  </div>
                  <div className={style.nameMonth}>
                    <h2>Março</h2>
                    <CiSaveDown2 className={style.icon} />
                  </div>
                  <div className={style.nameMonth}>
                    <h2>Abril</h2>
                    <CiSaveDown2 className={style.icon} />
                  </div>
                  <div className={style.nameMonth}>
                    <h2>Maio</h2>
                    <CiSaveDown2 className={style.icon} />
                  </div>
                  <div className={style.nameMonth}>
                    <h2>Junho</h2>
                    <CiSaveDown2 className={style.icon} />
                  </div>
                </div>
                <div className={style.month}>
                  <div className={style.nameMonth}>
                    <h2>Julho</h2>
                    <CiSaveDown2 className={style.icon} />
                  </div>
                  <div className={style.nameMonth}>
                    <h2>Agosto</h2>
                    <CiSaveDown2 className={style.icon} />
                  </div>
                  <div className={style.nameMonth}>
                    <h2>Setembro</h2>
                    <CiSaveDown2 className={style.icon} />
                  </div>
                  <div className={style.nameMonth}>
                    <h2>Outubro</h2>
                    <CiSaveDown2 className={style.icon} />
                  </div>
                  <div className={style.nameMonth}>
                    <h2>Novembro</h2>
                    <CiSaveDown2 className={style.icon} />
                  </div>
                  <div className={style.nameMonth}>
                    <h2>Dezembro</h2>
                    <CiSaveDown2 className={style.icon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}