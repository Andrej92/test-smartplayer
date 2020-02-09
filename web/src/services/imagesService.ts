import { BehaviorSubject, from } from 'rxjs';
import { constants } from 'helpers/constants';
import { api } from 'helpers/api';

const subject = new BehaviorSubject<IImage[]>([]);

export const imagesService = {

    getImages: () => subject.asObservable(),
    fetchImages: (page = constants.pagination.START_PAGE) => {
      api
        .fetchImages(page)
        .then(response => response.json())
        .then(data => subject.next(data.hits))
        .catch(error => subject.error(error))
    },
};