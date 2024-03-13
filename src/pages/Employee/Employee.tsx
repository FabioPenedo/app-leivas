import style from './Employee.module.css';
import logo from '../../assets/Logo.svg';
import { AiOutlineDown } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { CiImport } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { UserList } from '../../components/UserList';
import { useState } from 'react';
import { Usertest, User } from '../../helpers/Usertest';
import { MenuEmployee } from '../../components/MenuEmployee';


export const Employee = () => {

  const [search, setSearch] = useState('')
  const [filteredResults, setFilteredResults] = useState<User[]>(Usertest)

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
            <AiOutlineDown />
          </div>
        </div>
      </div>
      <div className={style.upDown}>
        <div className={style.left}>
          <MenuEmployee />
        </div>
        <div className={style.right}>
          <div className={style.rightUpdown}>
            <div className={style.rightIcons}>
              <CiEdit className={style.icon} />
              <CiImport className={style.icon} />
              <CiCirclePlus className={style.icon} />
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
        </div>
      </div>
    </div>
  )
}
