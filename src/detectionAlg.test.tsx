import { head, addNode, detectLoop, clearNodes } from "./detectionAlg";

describe("detectLoop", () => {
  beforeEach(() => {
    clearNodes();
  });

  it("detects a repeating node", () => {
    addNode("First");
    addNode("Second");
    addNode("Third");
    addNode("Fourth");
    addNode("Fifth");
    head.next.next.next = head.next;
    expect(detectLoop()).toBe("Third");
  });

  it("detects if there isn't any repeating nodes", () => {
    addNode("First");
    addNode("Second");
    addNode("Third");
    addNode("Fourth");
    addNode("Fifth");
    expect(detectLoop()).toBe(false);
  });

  it("handles null data.", () => {
    addNode("First");
    addNode("Second");
    addNode("Third");
    addNode(null);
    addNode(null);
    head.next.next.next = head.next;
    expect(detectLoop()).toBe("Third");
  });

  it("handles null head.", () => {
    expect(detectLoop()).toBe(false);
  });
});
