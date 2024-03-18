import style from './Employee.module.css';
import logo from '../../assets/Logo.svg';
import { UserList } from '../../components/UserList';
import { useState } from 'react';
import { Usertest, User } from '../../helpers/Usertest';
import { MenuEmployee } from '../../components/MenuEmployee';
import { ButtonDownloadImport } from '../../components/ButtonDownloadImport';


export const Employee = () => {

  const [search, setSearch] = useState('')
  const [filteredResults, setFilteredResults] = useState<User[]>(Usertest)
  const [changeMenu, setChangeMenu] = useState<number>(0);

  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    const filteredResults = Usertest.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()));
    setFilteredResults(filteredResults);
  }


  return (
    <div className={style.container}>
      <div className={style.upSide}>
        <img src={logo} alt="" />
        <div className={style.settings}>
          <div className={style.user}>
            <h1>Fábio Penedo</h1>
            <p>Fúncionario</p>
          </div>
        </div>
      </div>
      <div className={style.upDown}>
        <div className={style.left}>
          <MenuEmployee changeMenu={setChangeMenu} />
        </div>

        <div className={style.right}>
          {changeMenu === 0 &&
            <>
              <div className={style.rightUpdown}>
                <div className={style.rightButtons}>
                  <ButtonDownloadImport />
                </div>
                <input type="number" min="1900" max="2100" placeholder="Ano" />
                <input
                  type="search"
                  onChange={handleOnChangeSearch}
                  value={search}
                  placeholder='Pesquise o nome'
                  className={style.search} />
              </div>
              <div className={style.rightUpside}>
                <UserList filteredResults={filteredResults} />
              </div>
            </>
          }
          {changeMenu === 1 &&
            <div className={style.editMenu}>
              <div className={style.box}>
                <form action="" method='post' className={style.form}>
                  <input type="text" name='name' required placeholder='Nome' className={style.input} />
                  <input type="email" name='email' required placeholder='Email' className={style.input} />
                  <input type="password" name='password' required placeholder='Senha' className={style.input} />
                  <input type="submit" value="Atualizar" className={`${style.inputSubmit}`} />
                </form>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
