import {POINT_COUNT} from '../const';
import {getRandomArrayElement, getRandomInteger} from '../utils';

//список точек маршрута
export const mockPoints = [
  {
    id: 'p-01',
    basePrice: getRandomInteger(10, 1000),
    dateFrom: '2023-03-18T10:30:00.000Z',
    dateTo: '2023-03-18T11:00:00.000Z',
    destination: 'd-1',
    isFavorite: !!getRandomInteger(0, 1),
    offers: ['of-1', 'of-2'],
    type: 'taxi'
  },
  {
    id: 'p-02',
    basePrice: getRandomInteger(10, 1000),
    dateFrom: '2023-03-18T12:25:00.000Z',
    dateTo: '2023-03-18T13:35:00.000Z',
    destination: 'd-2',
    isFavorite: !!getRandomInteger(0, 1),
    offers: ['of-10', 'of-13'],
    type: 'flight'
  },
  {
    id: 'p-03',
    basePrice: getRandomInteger(10, 1000),
    dateFrom: '2023-03-18T14:30:00.000Z',
    dateTo: '2023-03-18T16:05:00.000Z',
    destination: 'd-2',
    isFavorite: !!getRandomInteger(0, 1),
    offers: ['of-25'],
    type: 'drive'
  },
  {
    id: 'p-04',
    basePrice: getRandomInteger(10, 1000),
    dateFrom: '2023-03-18T16:20:00.000Z',
    dateTo: '2023-03-18T17:00:00.000Z',
    destination: 'd-2',
    isFavorite: !!getRandomInteger(0, 1),
    offers: ['of-17', 'of-18', 'of-20'],
    type: 'check-in'
  },
  {
    id: 'p-05',
    basePrice: getRandomInteger(10, 1000),
    dateFrom: '2023-03-19T13:00:00.000Z',
    dateTo: '2023-03-19T14:20:00.000Z',
    destination: 'd-2',
    isFavorite: !!getRandomInteger(0, 1),
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'p-07',
    basePrice: getRandomInteger(10, 1000),
    dateFrom: '2023-03-19T16:00:00.000Z',
    dateTo: '2023-03-19T17:00:00.000Z',
    destination: 'd-2',
    isFavorite: !!getRandomInteger(0, 1),
    offers: ['of-26'],
    type: 'drive'
  },
  {
    id: 'p-08',
    basePrice: getRandomInteger(10, 1000),
    dateFrom: '2023-03-19T18:00:00.000Z',
    dateTo: '2023-03-19T19:00:00.000Z',
    destination: 'd-3',
    isFavorite: !!getRandomInteger(0, 1),
    offers: ['of-10', 'of-12', 'of-14', 'of-15'],
    type: 'flight'
  },
  {
    id: 'p-09',
    basePrice: getRandomInteger(10, 1000),
    dateFrom: '2023-03-20T08:25:00.000Z',
    dateTo: '2023-03-20T09:25:00.000Z',
    destination: 'd-3',
    isFavorite: !!getRandomInteger(0, 1),
    offers: ['of-25', 'of-26'],
    type: 'drive'
  },
  {
    id: 'p-10',
    basePrice: getRandomInteger(10, 1000),
    dateFrom: '2023-03-20T08:25:00.000Z',
    dateTo: '2023-03-20T09:25:00.000Z',
    destination: 'd-3',
    isFavorite: !!getRandomInteger(0, 1),
    offers: [],
    type: 'sightseeing'
  },
];

//генерация случайного набора точек маршрута
function getRandomPoints() {
  const pointsRandom = Array.from({length: 0});

  while (pointsRandom.length < POINT_COUNT) {
    const item = getRandomArrayElement(mockPoints);

    if (!pointsRandom.includes(item)) {
      pointsRandom.push(item);
    }
  }

  return pointsRandom;
}

export {getRandomPoints};
