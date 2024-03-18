import { useRef } from 'react';
import style from '../pages/Employee/Employee.module.css';

export const ButtonDownloadImport = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  }

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
      />

      <button className={style.buttonDownload}>Baixar</button>
      <button
        onClick={handleInputClick}
        className={style.buttonImport}
      >Importar</button>
    </>
  )
}