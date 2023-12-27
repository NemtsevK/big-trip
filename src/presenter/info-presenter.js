import {RenderPosition, render} from '../framework/render';
import InfoView from '../view/info-view';

export default class InfoPresenter {
  #infoContainer = null;
  #tripModel = {};

  constructor({infoContainer, tripModel}) {
    this.#infoContainer = infoContainer;
    this.#tripModel = tripModel;
  }

  init() {
    render(new InfoView({
      points: this.#tripModel.points,
      offers: this.#tripModel.offers,
      destinations: this.#tripModel.destinations,
    }), this.#infoContainer, RenderPosition.AFTERBEGIN);
  }
}
