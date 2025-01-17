import React, { FunctionComponent, useState } from 'react'
import styles from './GalleryModal.module.scss';

export interface IGalleryModalComponent { 
  src: string,
  imgName: string,
  imgWidth: number,
  imgHeight: number,
}

export const GalleryModal: FunctionComponent<IGalleryModalComponent> = ({
  src, 
  imgName, 
  imgWidth, 
  imgHeight 
}) => {
  const [isImgPainted, setImageState] = useState<boolean>(false);

  const handleLoadEvent = () => {
    setImageState(true)
  }

  return (
    <div className={styles.GalleryModal}>
      <img src={src} alt={imgName} title={imgName} onLoad={handleLoadEvent}/>
    </div>
  )
}