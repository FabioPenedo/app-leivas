import { Usertest } from '../helpers/Usertest';
import { useState } from 'react';
import style from '../pages/Employee/Employee.module.css';

export const UserList = () => {
  const [selectedKey, setSelectedKey] = useState<number | null>(null);

  const handleSelect = (key: number) => {
    setSelectedKey(key === selectedKey ? null : key);
  }

  return (
    <>
      {Usertest.map((item, index) => (
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
    </>
  )
}