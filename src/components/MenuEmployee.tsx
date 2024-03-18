import { useState } from 'react'
import style from '../pages/Employee/Employee.module.css'
import { CiSettings } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { Dispatch, SetStateAction } from 'react';

type Prop = {
  changeMenu: Dispatch<SetStateAction<number>>
}

export const MenuEmployee = ({ changeMenu }: Prop) => {
  const [selectedMenu, setSelectedMenu] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setSelectedMenu(index === selectedMenu ? null : index);
    changeMenu(index)
  };

  return (
    <>
      <div
        className={`${style.menu} ${selectedMenu === 0 ? style.current : ''}`}
        onClick={() => handleClick(0)}
      >
        <CiGrid41 className={style.icon} />
        <h1>Ínicio</h1>
      </div>
      <div
        className={`${style.menu} ${selectedMenu === 1 ? style.current : ''}`}
        onClick={() => handleClick(1)}
      >
        <CiSettings className={style.icon} />
        <h1>Configuração</h1>
      </div>
    </>
  )
}