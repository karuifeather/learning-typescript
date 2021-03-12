export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
    };
  }

  onHeaderHover(): void {
    console.log('H1 was hovered');
  }

  onButtonClick(): void {
    console.log('Button was clicked!!');
  }

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <input/>
      <button>Click</button>
    </div>
    `;
  }

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
    const template = document.createElement('template');
    template.innerHTML = this.template();
    this.bindEvents(template.content);

    this.parent.append(template.content);
  }
}
