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
 *
 * Removes loop by:
 * 1. Initializing a pointer as head
 * 2. While the pointers.next don't match, traverse.
 * 3. Now that the pointers match set, pointer.next to null.
 */
export const floydsCycleDetection = () => {
  if (head) {
    let slow = head;
    let fast = head;
    while (slow.next != null && fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        // There is a loop let's remove it:
        slow = head;
        while (slow.next !== fast.next) {
          slow = slow.next;
          fast = fast.next;
        }
        fast.next = null;
        return true;
      }
    }
  }
  return false;
};
