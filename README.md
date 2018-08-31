# Data Structures

## 1. Linked Lists

### Singly Linked List

- A data structure that contains a head, tail and length property.
- Consists of nodes.
- Each node has a value and a pointer to another node (or null).
- Big O:
  - Insertion - O(1)
  - Removal - O(1) from beginning, otherwise O(N)
  - Searching - O(N)
  - Access - O(N)

### Doubly Linked List

- Has connections to both parent and child in each Node.
- Takes up more memory, but faster to find items in.
- Big O:
  - Insertion - O(1)
  - Removal - O(1)
  - Searching - O(N)
  - Access - O(N)

### Stacks

- Implements Doubly Linked List
- LI/FO: Last in, first out
- Example of stacks:
  - Undo/Redo
  - Routing/History
- Add/remove at beginning (shift/unshift) if using an Array is less optimal than from end (pop/push) since index isn't affected on the other items.
- An even better solution is to use a Linked List, since it doesn't have any index at all.
- Big O:
  - Insertion O(1)
  - Removal O(1)
  - Searching O(N)
  - Access O(N)

### Queues

- Implements Singly Linked List
- FI/FO: First In, first out
- Add att end, remove at beginning.
- Big O:

## 2. Trees

- Parent/child relationships.
- One parent can have several children. There are no relationship between siblings or from child to parent.
- Everything is one-directional.
- Leaf: Child with no children
- Edge: Path between parent/child.
- Examples of trees: HTML and the DOM, Network Routing, Folders and files.
- Binary Search Tree:
  - Has maximum 2 children.
  - The child to the left is always smaller then the parent.
  - The child to the right is always bigger than the parent.
  - Big O:
    - Insertion: O(log n)
    - Searching: O(log n)

### Tree Traversal

- Breadth First Search: Traverse through each level, from parent to child, one level at a time.
- Depth First Search:
  - PreOrder: Order before checking children.
    - Can be used to export a tree structure so that it is easily reconstructed.
  - PostOrder: Order after checking children.
  - InOrder: Order between left and right children, so result is from smaller to larger.

### Binary Heaps

- Max Binary Heap: Parents are always larger than their children.
- Min Binary Heap: Parents are always smaller than their children.
- Used for things like Priority Queues and Graph Traversals.
- Big O:
  - Insertion: O(log n)
  - Removal: O(log n)

#### Priority Queues

- List of things with different priorities, such as patients in an Emergency Room.
- Can be implemented as a Heap to be more effective than for example an Array.

## 3. Hash Tables

- Stores key-value pairs.
- Like arrays, but not ordered.
- Why we use them: They're fast!
- Examples:
  - Python: Dictionaries
  - JavaScript: Objects, Maps
  - Java, Go & Scala: Maps
  - Ruby: Hashes
- Big O:
  - Insert: O(1)
  - Deletion: O(1)
  - Access: O(1)

### Hash Functions

- Should be: Fast, deterministic
- Avoiding collisions:
  - Separate Chaining - Store conflicting values together (allows for more content).
  - Linear Probing - Store at next vacant destination when conflict happens.

## 4. Graphs
