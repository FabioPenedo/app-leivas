import { Usertest } from '../helpers/Usertest';
import { useState } from 'react';
import style from '../pages/Employee/Employee.module.css';

export const UserList = () => {
  const [selectedKey, setSelectedKey] = useState<number | null>(null);

  const itensPerPage = 8
  const [currentPage, setCurrentPage] = useState(0)

  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = Usertest.slice(startIndex, endIndex)

  const pagination = {
    handleNext: () => {
      if(endIndex < Usertest.length) setCurrentPage(currentPage + 1)
    },
    handlePrevious: () => {
      if(currentPage > 0) setCurrentPage(currentPage - 1)
    }
  }


  const handleSelect = (key: number) => {
    setSelectedKey(key === selectedKey ? null : key);
  }

  return (
    <>
      {currentItens.map((item, index) => (
        <div
          key={index}
          className={`${style.upSideInfo} ${index === selectedKey ? style.upSideInfoSelect : ''}`}
          onClick={() => handleSelect(index)}
        >
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.cel}</p>
        </div>
      ))}
      <div className={style.previousAndNext}>
        <button onClick={pagination.handlePrevious}>Anterior</button>
        <button onClick={pagination.handleNext}>Próximo</button>
      </div>
    </>
  )
}