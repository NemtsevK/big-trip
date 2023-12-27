import {render} from '../framework/render.js';
import FilterView from '../view/filter-view.js';

export default class FilterPresenter {
  #filterContainer = null;
  #filters = [];

  constructor({filterContainer, filters}) {
    this.#filterContainer = filterContainer;
    this.#filters = filters;
  }

  init() {
    render(new FilterView({filters: this.#filters}), this.#filterContainer);
  }
}
