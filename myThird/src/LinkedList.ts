class LinkNode {
  next: LinkNode | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: LinkNode | null = null;

  add(data: number): LinkNode {
    const newNode = new LinkNode(data);

    if (!this.head) {
      this.head = newNode;
      return newNode;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = newNode;
    return newNode;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let counter = 1;
    let tail = this.head;

    while (tail.next) {
      counter++;
      tail = tail.next;
    }

    return counter;
  }

  at(index: number): LinkNode {
    if (!this.head) {
      throw new Error('Index is out of bounds');
    }

    let counter = 0;
    let tail: LinkNode | null = this.head;

    while (tail) {
      if (counter === index) {
        return tail;
      }

      counter++;
      tail = tail.next;
    }

    throw new Error('Index is out of bounds');
  }
}
