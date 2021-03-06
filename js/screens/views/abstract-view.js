import getElFromTemplate from '../../getelfromtemplate';

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't create AbstractView directly`);
    }
  }

  get template() {

  }

  _render() {
    return getElFromTemplate(this.template);
  }

  bind() {

  }

  get element() {
    if (!this._elem) {
      this._elem = this._render();
      this.bind();
    }

    return this._elem;
  }

}
