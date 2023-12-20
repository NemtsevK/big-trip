import { mockDestinations } from '../mock/destinations';
import { mockOffers } from '../mock/offers';
import { getRandomPoints } from '../mock/points';

export default class PointModel {
  #points = [];
  #offers = [];
  #destinations = [];

  //инициализация тестовых данных
  init() {
    this.#points = getRandomPoints();
    this.#offers = mockOffers;
    this.#destinations = mockDestinations;
  }

  //получить массив точек маршрута
  getPoints() {
    return this.#points;
  }

  //получить массив дополнительных предложений
  getOffers() {
    return this.#offers;
  }

  //получить массив пунктов назначения
  getDestinations() {
    return this.#destinations;
  }
}
