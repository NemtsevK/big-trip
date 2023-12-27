import {render, replace} from '../framework/render';
import SortListView from '../view/sort-list-view';
import PointListView from '../view/point-list-view';
import PointView from '../view/point-view';
import PointEditView from '../view/point-edit-view';

//класс для взаимодействия данных и интерфейса списка точек маршрута
export default class TripPresenter {
  #tripPoints = [];
  #tripOffers = [];
  #tripDestinations = [];

  #tripContainer = null;
  #tripModel = null;

  #pointListComponent = new PointListView();
  #sortListComponent = new SortListView();

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
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point,
      offers,
      destinations,
      onButtonEditClick: () => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEditComponent = new PointEditView({
      point,
      offers,
      destinations,
      onButtonRollupClick: () => {
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onFormSubmit: () => {
        replaceFormToCard();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceCardToForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToCard() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#pointListComponent.element);
  }

  #renderTrip() {
    render(this.#sortListComponent, this.#tripContainer);
    render(this.#pointListComponent, this.#tripContainer);

    this.#tripPoints.forEach((point) => {
      this.#renderPoint({
        point,
        offers: this.#tripOffers,
        destinations: this.#tripDestinations
      });
    });
  }
}
