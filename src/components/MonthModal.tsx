import style from '../pages/User/User.module.css';
import { CiSaveDown2 } from "react-icons/ci";

export const MonthModal = () => {
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  return (
    <>
      {meses.map((mes, index) => (
        <div className={style.nameMonth} key={index}>
          <h2>{mes}</h2>
          <CiSaveDown2 className={style.icon} />
        </div>
      ))}
    </>
  )
}