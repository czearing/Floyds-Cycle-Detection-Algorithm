/**
 * The head of the linked list.
 */
export let head: any = null;

/**
 * Creates a node for a linked list.
 *
 * @param data
 */
const node = (data: any) => ({
  data,
  next: null
});

/**
 * Resets head to null.
 */
export const clearNodes = () => {
  head = null;
};

/**
 * Adds a node to a linked list:
 * 1. Creates a node and appends the data param.
 * 2. Sets the node's next value to the current head.
 * 3. Set the head to the new node.
 *
 * @param data
 */
export const addNode = (data: any) => {
  const item = node(data);
  item.next = head;
  head = item;
};

/**
 * Detects if there is a loop in a list by:
 * 1. Initializes a slow and fast pointer eqaul to head.
 * 2. Traverse the list as long as slow, fast, and fast.next don't equal null.
 * 3. Increment slow to slow.next and fast to fast.next.next.
 * 4. If slow matches fast then there is a loop else no loop.
 */
export const detectLoop = () => {
  let slow = head;
  let fast = head;
  while (slow != null && fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return slow.data;
    }
  }
  return false;
};
