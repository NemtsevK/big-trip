import {render} from '../framework/render';
import {FiltersType} from '../const';
import SortListView from '../view/sort-list-view';
import PointListView from '../view/point-list-view';
import SystemMessageView from '../view/system-message-view';
import PointPresenter from './point-presenter';
import {updateItem} from '../utils/common';

//класс для взаимодействия данных и интерфейса списка точек маршрута
export default class TripPresenter {
  #tripPoints = [];
  #tripOffers = [];
  #tripDestinations = [];

  #tripContainer = null;
  #tripModel = null;
  #systemMessageComponent = null;

  #pointListComponent = new PointListView();
  #sortListComponent = new SortListView();
  #pointPresenters = new Map();

  constructor({tripContainer, tripModel}) {
    this.#tripContainer = tripContainer;
    this.#tripModel = tripModel;
  }

  init() {
    this.#tripPoints = [...this.#tripModel.points];
    this.#tripOffers = [...this.#tripModel.offers];
    this.#tripDestinations = [...this.#tripModel.destinations];

    this.#renderTrip();
  }

  #renderPoint({point, offers, destinations}) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#pointListComponent.element,
      onPointChange: this.#pointChangeHandle,
      onModeChange: this.#modeChangeHandle
    });

    pointPresenter.init(point, offers, destinations);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #pointChangeHandle = (updatedPoint) => {
    this.#tripPoints = updateItem(this.#tripPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint, this.#tripOffers, this.#tripDestinations);
  };

  #modeChangeHandle = () => {
    this.#pointPresenters.forEach((pointPresenter) => pointPresenter.resetView());
  };

  #renderSort() {
    render(this.#sortListComponent, this.#tripContainer);
  }

  #renderSystemMessage({message}) {
    this.#systemMessageComponent = new SystemMessageView({messageType: message});
    render(this.#systemMessageComponent, this.#tripContainer);
  }

  #renderPointsList() {
    render(this.#pointListComponent, this.#tripContainer);

    this.#tripPoints.forEach((point) => {
      this.#renderPoint({
        point,
        offers: this.#tripOffers,
        destinations: this.#tripDestinations
      });
    });
  }

  #renderTrip() {
    if (this.#tripPoints.length === 0) {
      this.#renderSystemMessage({message: FiltersType.EVERYTHING});
      return;
    }

    this.#renderSort();
    this.#renderPointsList();
  }
}
