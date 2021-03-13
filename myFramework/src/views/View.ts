import { User } from '../models/User';

export abstract class View {
  constructor(public parent: Element, public model: User) {
    this.model.on('change', (): void => {
      this.render();
    });
  }

  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [event, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element: Element) => {
        element.addEventListener(event, eventsMap[eventKey]);
      });
    }
  }

  render() {
    this.parent.innerHTML = '';

    const template = document.createElement('template');
    template.innerHTML = this.template();
    this.bindEvents(template.content);

    this.parent.append(template.content);
  }
}
