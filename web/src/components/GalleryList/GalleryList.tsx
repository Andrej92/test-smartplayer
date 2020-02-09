import React, { FunctionComponent, memo } from 'react'
import styles from './GalleryList.module.scss';
import { GalleryItem }  from 'components';

export interface IGalleryListComponent {
  images: IImage[],
}

const GalleryList: FunctionComponent<IGalleryListComponent> = ({ images }) => {
  const renderImages = () => {
    return images.map((image: IImage, index) => {
      return (<GalleryItem 
        key={image.id + '' + index} 
        image={image}
      />);
    })
  }

  return ( 
    <div className={styles.GalleryList}>
      { renderImages() }
    </div>
  )
}

export const MemoGalleryList = memo(GalleryList)