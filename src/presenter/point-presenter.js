import { Mode } from '../const';
import { remove, render, replace } from '../framework/render';
import { isEscape } from '../utils/common';
import PointEditView from '../view/point-edit-view';
import PointView from '../view/point-view';

export default class PointPresenter {
  #pointListContainer = null;
  #pointComponent = null;
  #pointEditComponent = null;

  #pointChangeHandle = () => {};
  #modeChangeHandle = () => {};

  #point = null;
  #offers = [];
  #destinations = [];
  #mode = Mode.DEFAULT;

  constructor({pointListContainer, onPointChange, onModeChange}) {
    this.#pointListContainer = pointListContainer;
    this.#pointChangeHandle = onPointChange;
    this.#modeChangeHandle = onModeChange;
  }

  init (point, offers, destinations) {
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new PointView({
      point: this.#point,
      offers: this.#offers,
      destinations: this.#destinations,
      onFavoriteClick: this.#onFavoriteClick,
      onEditClick: this.#onEditClick,
    });

    this.#pointEditComponent = new PointEditView({
      point: this.#point,
      offers: this.#offers,
      destinations: this.#destinations,
      onButtonRollupClick: this.#hideCardEdit,
      onFormSubmit: this.#onFormSubmit,
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToCard();
    }
  }

  #replaceCardToForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#modeChangeHandle();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToCard() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (isEscape(evt)) {
      evt.preventDefault();
      this.#replaceFormToCard();
    }
  };

  #onFormSubmit = (point) => {
    this.#pointChangeHandle(point);
    this.#replaceFormToCard();
  };

  #hideCardEdit = () => {
    this.#replaceFormToCard();
  };

  #onEditClick = () => {
    this.#replaceCardToForm();
  };

  #onFavoriteClick = () => {
    this.#pointChangeHandle({...this.#point, isFavorite: !this.#point.isFavorite});
  };
}
