# Data Structures

## Singly Linked List

- A data structure that contains a head, tail and length property.
- Consists of nodes.
- Each node has a value and a pointer to another node (or null).
- Big O:
  - Insertion - O(1)
  - Removal - O(1) from beginning, otherwise O(N)
  - Searching - O(N)
  - Access - O(N)

## Doubly Linked List

- Has connections to both parent and child in each Node.
- Takes up more memory, but faster to find items in.
- Big O:
  - Insertion - O(1)
  - Removal - O(1)
  - Searching - O(N)
  - Access - O(N)

## Stacks

- LI/FO: Last in, first out
- Example of stacks:
  - Undo/Redo
  - Routing/History
- Add/remove at beginning (shift/unshift) if using an Array is less optimal than from end (pop/push) since index isn't affected on the other items.
- An even better solution is to use a Linked List, since it doesn't have any index at all.

## Queues
