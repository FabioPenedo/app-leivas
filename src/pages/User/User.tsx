import style from './User.module.css';
import Logo from '../../assets/Logo.svg';
import { useState } from 'react';
import { CiSquareRemove } from "react-icons/ci";
import { MenuUser } from '../../components/MenuUser';
import { MonthModal } from '../../components/MonthModal';

export const User = () => {

  const [modal, setModal] = useState(false)
  const [classModal, setClassModal] = useState(style.container);
  const [changeMenu, setChangeMenu] = useState<number>(0);

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
          </div>
        </div>
      </div>
      <div className={style.upDown}>
        <div className={style.left}>
          <MenuUser changeMenu={setChangeMenu} />
        </div>
        {!modal &&
          <div className={style.right}>
            {changeMenu === 0 &&
              <>
                <div className={style.rightUpside}>
                  <h1>IMPORTE SEU PDF</h1>
                  <input type="file" accept=".pdf" />
                  <p>Seu PDF foi carregado!</p>
                  <button>Enviar</button>
                </div>
                <div className={style.rightUpdown}>
                  <button onClick={openModal}>Declarações</button>
                </div>
              </>
            }
            {changeMenu === 1 &&
              <div className={style.editMenu}>
                <div className={style.box}>
                  <form action="" method='post' className={style.form}>
                    <input type="text" name='name' required placeholder='Nome' className={style.input} />
                    <input type="email" name='email' required placeholder='Email' className={style.input} />
                    <input type="text" name='cel' required placeholder='Celular' className={style.input} />
                    <input type="password" name='password' required placeholder='Senha' className={style.input} />
                    <input type="submit" value="Atualizar" className={`${style.inputSubmit}`} />
                  </form>
                </div>
              </div>
            }
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
                <input type="number" min="1900" max="2100" placeholder="Ano" />
              </div>
              <div className={style.modalDatas}>
                <div className={style.month}>
                  <MonthModal />
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}