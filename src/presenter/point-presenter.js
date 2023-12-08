import {render, RenderPosition} from '../render';
import InfoView from '../view/info-view';
import FilterView from '../view/filter-view';
import SortView from '../view/sort-view';
import PointListView from '../view/point-list-view';
import PointView from '../view/point-view';
import FormAddView from '../view/form-add-view';
import FormEditView from '../view/form-edit-view';

const COUNT_POINTS = 3;

export default class PointPresenter {
  pointListComponent = new PointListView();

  constructor({header, controls, main}) {
    this.header = header;
    this.controls = controls;
    this.main = main;
  }

  //инициализация презентера
  init() {
    render(new InfoView(), this.header, RenderPosition.AFTERBEGIN);
    render(new FilterView(), this.controls);
    render(new SortView(), this.main);
    render(this.pointListComponent, this.main);
    render(new FormEditView(), this.pointListComponent.getElement());

    for (let i = 0; i < COUNT_POINTS; i++) {
      render(new PointView(), this.pointListComponent.getElement());
    }

    render(new FormAddView(), this.pointListComponent.getElement());
  }
}


