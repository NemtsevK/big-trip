import TripPresenter from './presenter/trip-presenter.js';
import PointModel from './model/points-model.js';

const header = document.querySelector('.page-header');
const infoContainer = header.querySelector('.trip-main');
const headerFilterElement = header.querySelector('.trip-controls__filters');

const main = document.querySelector('.page-main');
const tripContainer = main.querySelector('.trip-events');

const pointModel = new PointModel();

pointModel.init();

const tripPresenter = new TripPresenter({
  infoContainer: infoContainer,
  filterContainer: headerFilterElement,
  tripContainer: tripContainer,
  pointModel
});

tripPresenter.init();
