export class Node<T> {
   value: T;
   next: Node<T> | null = null;

   constructor(value: T) {
      this.value = value;
   }
}

export class CircularLinkedList<T> {
   private head: Node<T> | null = null;
   private tail: Node<T> | null = null;

   add(value: T) {
      const newNode = new Node(value);

      if (this.head === null) {
         this.head = newNode;
         this.tail = newNode;
         this.tail.next = this.head; // Make it circular
      } else {
         this.tail!.next = newNode;
         this.tail = newNode;
         this.tail.next = this.head; // Make it circular
      }
   }

   getItems(): T[] {
      const items: T[] = [];
      if (this.head === null) return items;

      let current = this.head;
      do {
         items.push(current.value);
         current = current.next!;
      } while (current !== this.head);

      return items;
   }
}
