import * as React from "react";
import { Fabric } from "@fluentui/react";
import "./styles.css";

export default function App() {
  /**
   * The head of the linked list.
   */
  let head: any = null;

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
   * Adds a node to a linked list:
   * 1. Creates a node and appends the data param.
   * 2. Sets the node's next value to the current head.
   * 3. Set the head to the new node.
   *
   * @param data
   */
  const addNode = (data: any) => {
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
  const detectLoop = () => {
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

  addNode("First");
  addNode("Second");
  addNode("Third");
  addNode("Fourth");
  addNode("Fifth");
  head.next.next.next = head.next;
  console.log(detectLoop());

  return (
    <Fabric>
      <div className="App">
        <h1 className="head">Floyds Cycle Detection Algorithm</h1>
        <div className="content">
          <h4> Used to detect if there is a existing loop in a list by:</h4>
          <p>1. Initializes a slow and fast pointer eqaul to head.</p>
          <p>
            2. Traverse the list as long as slow, fast, and fast.next don't
            equal null.
          </p>
          <p>3. Increment slow to slow.next and fast to fast.next.next.</p>
          <p>4. If slow matches fast then there is a loop else no loop.</p>
          <img
            className="image"
            alt="Diagram"
            src="https://lh3.googleusercontent.com/proxy/AroLS1lMfabjEY0xZWHzutAQDSPw4dC-L4nT4KWgIZ5h43GJfl_EQpNu0_YFP5fizpen2kwaZ1JKzr4uhiJUBZIlnRdTnmr53Ug"
          />
          <h4>Time Complexity: O(n)</h4>
          <h4>Auxiliary Space: O(1)</h4>
        </div>
      </div>
    </Fabric>
  );
}
