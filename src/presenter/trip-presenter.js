import {render, RenderPosition} from '../render';
import InfoView from '../view/info-view';
import FilterView from '../view/filter-view';
import SortView from '../view/sort-view';
import PointListView from '../view/point-list-view';
import PointView from '../view/point-view';
// import AddPointView from '../view/add-point-view';
import EditPointView from '../view/edit-point-view';

export default class TripPresenter {
  pointListView = new PointListView();
  sortListView = new SortView();
  filterListView = new FilterView();

  constructor({infoContainer, filterContainer, tripContainer, pointModel}) {
    this.infoContainer = infoContainer;
    this.filterContainer = filterContainer;
    this.tripContainer = tripContainer;
    this.pointModel = pointModel;
  }

  init() {

    const points = this.pointModel.getPoints();
    const offers = this.pointModel.getOffers();
    const destinations = this.pointModel.getDestinations();
    this.tripPoint = [...points];

    render(new InfoView({
      points: points,
      offers: offers,
      destinations: destinations,
    }), this.infoContainer, RenderPosition.AFTERBEGIN);

    render(this.filterListView, this.filterContainer);
    render(this.sortListView, this.tripContainer);
    render(this.pointListView, this.tripContainer);

    render(new EditPointView({
      points: this.tripPoint[0],
      offers: offers,
      destinations: destinations
    }), this.pointListView.getElement());

    for (let i = 1; i < this.tripPoint.length; i++) {
      render(new PointView({
        points: this.tripPoint[i],
        offers: offers,
        destinations: destinations
      }), this.pointListView.getElement());
    }
  }
}
