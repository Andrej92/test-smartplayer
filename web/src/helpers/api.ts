import { constants } from './constants';

export const api = {
  fetchImages: (page: number) => {
    return fetch(
      `https://pixabay.com/api/?key=${constants.API_KEY}&q=yellow+flowers&image_type=photo&page=${page}&per_page=${constants.pagination.PER_PAGE}`
    );
  }
}