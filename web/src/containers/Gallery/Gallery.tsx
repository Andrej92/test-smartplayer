import React, { FunctionComponent, useEffect, useRef } from 'react'
import styles from './Gallery.module.scss';
import { GalleryList, Loader } from 'components';
import { useImagesFacade, useScrollPagination } from 'hooks';

export const Gallery: FunctionComponent = () => {
  const {images, loading, error, fetchImages} = useImagesFacade();
  const {
    page,
    isPaginationInit,
    initPagination,
    unlockPagination
} = useScrollPagination();
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetchImages(page);
  }, [page])

  useEffect(() => {
    if (images.length && !isPaginationInit) {
      initPagination(ref)
    }

    if (images.length) {
      unlockPagination()
    }


  }, [images])
  

  return (
    <div className={styles.Gallery} ref={ref}>
      <GalleryList images={images} />
      { loading && <Loader /> }
      { error && 'Что-то пошло не так'}
    </div>
  )
}