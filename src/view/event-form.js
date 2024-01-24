import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

//создать блок формы создания/редактирования точки маршрута
function createEventFormTemplate() {
  return (
    `<li class="trip-events__item">
        <form class="event event--edit" action="#" method="post"></form>
    </li>`
  );
}

//класс для визуального представления формы создания/редактирования точки маршрута
export default class EventForm extends AbstractStatefulView {
  #onFormSubmit = null;

  constructor({onFormSubmit}) {
    super();
    this.#onFormSubmit = onFormSubmit;
    this._restoreHandlers();
    this._setState({'isDisabled': false});
  }

  get template() {
    return createEventFormTemplate();
  }

  _restoreHandlers() {
    this.element.querySelector('.event--edit').addEventListener('submit', this.#eventFormSubmitHandler);
  }

  //событие закрыть форму
  #eventFormSubmitHandler = (event) => {
    event.preventDefault();
  };
}
