import { getDestinations } from '../mock/destinations';
import { getOffers } from '../mock/offers';
import { getRandomPoints } from '../mock/points';

//класс взаимодействие с тестовыми данными
export default class TripModel {
  #points = [];
  #offers = [];
  #destinations = [];

  init() {
    this.#points = getRandomPoints();
    this.#offers = getOffers();
    this.#destinations = getDestinations();
  }

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}
