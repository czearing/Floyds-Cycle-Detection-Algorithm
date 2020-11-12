import * as React from "react";
import { Fabric } from "@fluentui/react";
import "./styles.css";

export default function App() {
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
