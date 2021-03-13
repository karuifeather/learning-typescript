import { View } from './View';

export class UserForm extends View {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAge,
      'click:.set-name': this.onSetName,
    };
  }

  onSetName = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  onSetAge = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <h2>Name: ${this.model.get('name')}</h2>
      <h2>Age: ${this.model.get('age')}</h2>
      <input/>
      <button class="set-name">Change Name</button>
      <button class="set-age">Set Random Age</button>
    </div>
    `;
  }
}
