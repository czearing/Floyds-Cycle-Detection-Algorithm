import * as React from "react";
import { ThemeProvider } from "@fluentui/react";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1 className="header">Floyds Cycle Detection Algorithm</h1>
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
            src="https://www.techiedelight.com/wp-content/uploads/Cycle-linked-list.png"
          />
          <h4>Time Complexity: O(n)</h4>
          <h4>Auxiliary Space: O(1)</h4>
        </div>
      </div>
    </ThemeProvider>
  );
}
