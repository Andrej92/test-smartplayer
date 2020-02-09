import React, { FunctionComponent, useState, memo } from 'react';
import ReactDOM from 'react-dom';
import { Modal, GalleryModal } from 'components';
import styles from './GalleryItem.module.scss';

export interface IGalleryItemComponent {
  image: IImage
}

const GalleryItem: FunctionComponent<IGalleryItemComponent> = ({ image }) => {
  const [isShowModal, toggleModalState] = useState(false);
  const {id, webformatURL, webformatWidth, webformatHeight} = image;
  const imageStyles = {
    background: `url(${webformatURL}) center center no-repeat`,
    backgroundSize: 'cover'
  }
  const name = `Изображение с айди ${id}`;
  const portalContainer = document.getElementById('modal-portal') as HTMLElement;

  const showModal = () => {
    toggleModalState(true)
  }

  const closeModal = () => {
    toggleModalState(false)
  }

  return(
    <div className={styles.GalleryItem}>
      <div 
        className={styles.GalleryItem__image}
        style={imageStyles}
        onClick={showModal}
      >
      </div>
      { isShowModal 
        ? (ReactDOM.createPortal(
          <Modal title={name} width={webformatWidth} onClose={closeModal}>
            <GalleryModal
              imgName={name} 
              imgWidth={webformatWidth}
              imgHeight={webformatHeight}
              src={webformatURL} 
            />
          </Modal>,
          portalContainer
        )) : null }
    </div>
  )
}

export const MemoGalleryItem = memo(GalleryItem);