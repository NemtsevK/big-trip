import {render, replace} from '../framework/render';
import SortView from '../view/sort-view';
import PointListView from '../view/point-list-view';
import PointView from '../view/point-view';
import EditPointView from '../view/edit-point-view';

export default class TripPresenter {
  #tripPoints = [];
  #tripOffers = [];
  #tripDestinations = [];

  #tripContainer = null;
  #tripModel = {};

  #pointListView = new PointListView();
  #sortListView = new SortView();

  constructor({tripContainer, tripModel}) {
    this.#tripContainer = tripContainer;
    this.#tripModel = tripModel;
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
      onEditClick: () => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEditComponent = new EditPointView({
      point,
      offers,
      destinations,
      onRollupButtonClick: () => {
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

    render(pointComponent, this.#pointListView.element);
  }

  #renderTrip() {
    render(this.#sortListView, this.#tripContainer);
    render(this.#pointListView, this.#tripContainer);

    this.#tripPoints.forEach((point) => {
      this.#renderPoint({
        point,
        offers: this.#tripOffers,
        destinations: this.#tripDestinations
      });
    });
  }

  init() {
    this.#tripPoints = [...this.#tripModel.points];
    this.#tripOffers = [...this.#tripModel.offers];
    this.#tripDestinations = [...this.#tripModel.destinations];

    this.#renderTrip();
  }
}
