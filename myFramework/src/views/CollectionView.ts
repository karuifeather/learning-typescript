import { Collection } from '../models/Collection';

export abstract class CollectView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, parentItem: Element): void;

  render() {
    this.parent.innerHTML = '';

    const template = document.createElement('template');

    for (let model of this.collection.models) {
      const parentItem = document.createElement('div');
      this.renderItem(model, parentItem);
      template.content.append(parentItem);
    }

    this.parent.append(template.content);
  }
}
