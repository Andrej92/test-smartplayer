import React, { useState, useEffect, RefObject } from 'react';
import { constants } from 'helpers/constants';

export const useScrollPagination = () => {
  const [page, setPage] = useState<number>(constants.pagination.START_PAGE);
  const [isLockPagination, togglePaginationState] = useState<boolean>(false)
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  const initPagination = (ref: RefObject<HTMLDivElement>) => {
    setElement(ref.current)
  }

  const unlockPagination = () => {
    togglePaginationState(false);
  }

  const lockPagination = () => {
    togglePaginationState(true);
  }

  const getScrollDistance = (element: HTMLDivElement) => {
    return element.scrollHeight - (element.offsetHeight + element.scrollTop);
  }

  const handleScrollEvent = (e: Event) => { 
    if (isLockPagination) return;

    if (element && getScrollDistance(element) < constants.pagination.THRESHHOLD) {
      lockPagination();
      setPage((prevPage) => (prevPage + constants.pagination.STEP));
    }
  };

  useEffect(() => {
    element?.addEventListener('scroll', handleScrollEvent);
    return () => {
      element?.removeEventListener('scroll', handleScrollEvent)
    };
  }, [element])

  return {
    page,
    isPaginationInit: !!element,
    initPagination,
    lockPagination,
    unlockPagination
  };
}