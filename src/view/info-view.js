import {createElement} from '../render.js';
import {getDestinationNames, getFullPrice, getMaxData, getMinData} from '../utils.js';

//создать заголовок из списка пунктов назначения
function createTitle(points, destinations) {
  const filterPointsByNames = getDestinationNames(destinations, points);

  if (filterPointsByNames.length > 3) {
    return `${filterPointsByNames.at(0)} &mdash;...&mdash; ${filterPointsByNames.at(-1)}`;
  }

  return filterPointsByNames.join(' &mdash; ');
}

//создать блок с общей информацией о маршруте
function createInfoTemplate(points, offers, destinations) {
  return (
    `<section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          <h1 class="trip-info__title">${createTitle(points, destinations)}</h1>

          <p class="trip-info__dates">${getMinData(points)}&nbsp;&mdash;&nbsp;${getMaxData(points)}</p>
        </div>

        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">${getFullPrice(points, offers)}</span>
        </p>
      </section>`
  );
}

//класс для взаимодействия с информацией о маршруте
export default class InfoView {
  constructor({points, offers, destinations}) {
    this.points = points;
    this.offers = offers;
    this.destinations = destinations;
  }

  getTemplate() {
    return createInfoTemplate(this.points, this.offers, this.destinations);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
