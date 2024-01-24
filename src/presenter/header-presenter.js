import TripCost from '../view/trip-cost.js';
import TripTitle from '../view/trip-title.js';
import TripInfo from '../view/trip-info.js';
import {render, remove, replace, RenderPosition} from '../framework/render.js';
import {DEFAULT_SORT, UpdateType} from '../const.js';
import {sortPoints} from '../utils/common.js';

export default class HeaderPresenter {
  #headerContainer = null;
  #tripModel = null;
  #tripInfoComponent = null;
  #destinations = null;
  #offers = null;

  constructor({headerContainer, tripModel}) {
    // console.log('tripModel при инициализации:', tripModel);
    this.#headerContainer = headerContainer;
    this.#tripModel = tripModel;
    // console.log('this.#tripModel:', this.#tripModel);
    this.#tripModel.addObserver(this.#handleModelChange);
  }

  #tripTitleData(points) {
    const destinationsId = points.map(({destination}) => destination);
    const destinationsCount = new Set(destinationsId);
    const firstDestinationId = destinationsId[0];
    const secondDestinationId = (destinationsCount.size === 3) ? destinationsId[1] : null;
    const lastDestinationId = destinationsId[destinationsId.length - 1];
    return {
      firstDestination: this.#destinations.find((destination) => destination.id === firstDestinationId)?.name,
      secondDestination: (secondDestinationId) ? this.#destinations.find((destination) => destination.id === secondDestinationId)?.name : null,
      lastDestination: this.#destinations.find((destination) => destination.id === lastDestinationId)?.name,
      destinationsCount: destinationsCount.size
    };
  }

  #dateFieldData(points) {
    return {
      firstDate: points[0].dateFrom,
      secondDate: points[points.length - 1].dateTo
    };
  }

  #calculateTotalPrice(points) {
    return points.reduce((sum, point) => {
      sum += point.basePrice + this.#calculateOffersPrice(point.offers, point.type);
      return sum;
    }, 0);
  }

  #calculateOffersPrice(selectedOffers, type) {
    const offers = this.#offers.find((item) => item.type === type).offers;
    return offers.reduce((sum, item) => {
      if (selectedOffers.includes(item.id)) {
        sum += item.price;
      }
      return sum;
    }, 0);
  }

  #renderHeader() {
    this.#destinations = this.#tripModel.destinations;
    this.#offers = this.#tripModel.offers;

    const points = this.#tripModel.tripPoints;
    if (points.length > 0) {
      sortPoints(DEFAULT_SORT, points);
      const destinations = this.#tripTitleData(points);
      const dates = this.#dateFieldData(points);

      const previousTripInfoComponent = this.#tripInfoComponent;

      const newTripInfoComponent = new TripInfo();
      if (previousTripInfoComponent === null) {
        render(newTripInfoComponent, this.#headerContainer, RenderPosition.AFTERBEGIN);
      } else {
        replace(newTripInfoComponent, previousTripInfoComponent);
        remove(previousTripInfoComponent);
      }
      render(new TripTitle({destinations, dates}), newTripInfoComponent.element);
      render(new TripCost(this.#calculateTotalPrice(points)), newTripInfoComponent.element);
      this.#tripInfoComponent = newTripInfoComponent;
    } else {
      remove(this.#tripInfoComponent);
      this.#tripInfoComponent = null;
    }
  }

  #handleModelChange = (updateType) => {
    if (updateType !== UpdateType.ERROR) {
      this.#renderHeader();
    }
  };
}
