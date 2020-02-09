import React, { useState, useEffect } from 'react';
import { constants } from 'helpers/constants';
import { imagesService } from 'services/imagesService';

export const useImagesFacade = () => {
  let [images, putImages] = useState<IImage[]>([]);
  let [loading, setLoading] = useState<boolean>(false);
  let [error, setError] = useState<boolean>(false);

  const fetchImages = (page: number = constants.pagination.START_PAGE) => {
    setLoading(true);
    imagesService.fetchImages(page)
  }

  useEffect(() => {
    const subscribtion = imagesService.getImages().subscribe(
      (data) => {
        if (data.length) {
          setError(false);
          setLoading(false);
          putImages(prevImages => ([...prevImages, ...data]))
        }
      },
      (error) => {
        setError(true);
        setLoading(false);
      },
    );

    return () => {
      subscribtion.unsubscribe();
    };
  }, []);

  return {images, loading, error, fetchImages};
}