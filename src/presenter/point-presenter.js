import {render} from '../render';
import FormEditView from '../view/form-edit-view';
import PointListView from '../view/point-list-view';
import PointView from '../view/point-view';

export default class PointPresenter {
  pointListComponent = new PointListView();

  constructor({pointListContainer}) {
    this.pointListContainer = pointListContainer;
  }

  init() {
    render(this.pointListComponent, this.pointListContainer);
    render(new FormEditView(), this.pointListComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointListComponent.getElement());
    }
  }
}


