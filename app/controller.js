import {Model} from './model'
import {View} from './view'

export class Controller {
  constructor() {
    this.model = new Model()
    this.view = new View()
  }
  changeColor() {
    this.model.changeColor()
    this.view.render(this.model)
  }
  addSound() {
    this.model.addSound()
    this.view.render(this.model)
  }
}
