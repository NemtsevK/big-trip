import {render} from './render.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import PointPresenter from './presenter/point-presenter.js';

const pageMain = document.querySelector('.page-main');
const tripEvents = pageMain.querySelector('.trip-events');

const pointPresenter = new PointPresenter({pointListContainer: tripEvents});

render(new FilterView(), tripEvents);
render(new SortView(), tripEvents);

pointPresenter.init();
