import React, { FunctionComponent } from 'react'
import styles from './Modal.module.scss';

export interface IModalComponent {
  title: string,
  width?: number,
  onClose: () => void
}

export const Modal: FunctionComponent<IModalComponent> = ({ 
  title,
  width = 300, 
  children, 
  onClose
}) => {

  const modalStyles = { width };

  return(
    <div className={styles.Modal__wrapper}>
      <div className={styles.Modal} style={modalStyles}>
        <div className={styles.Modal__header}>
          { title }
          <div className={styles.Modal__close} onClick={onClose}/>
        </div>
        <div className={styles.Modal__body}>
          { children }
        </div>
      </div>
    </div>
  )
}