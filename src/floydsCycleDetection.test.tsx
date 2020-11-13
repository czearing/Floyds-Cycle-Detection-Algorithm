import {
  head,
  addNode,
  floydsCycleDetection,
  clearNodes
} from "./floydsCycleDetection";

describe("floydsCycleDetection", () => {
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
    expect(floydsCycleDetection()).toBe(true);
  });

  it("detects if there isn't any repeating nodes", () => {
    addNode("First");
    addNode("Second");
    addNode("Third");
    addNode("Fourth");
    addNode("Fifth");
    expect(floydsCycleDetection()).toBe(false);
  });

  it("handles null data.", () => {
    addNode("First");
    addNode("Second");
    addNode("Third");
    addNode(null);
    addNode(null);
    head.next.next.next = head.next;
    expect(floydsCycleDetection()).toBe(true);
  });

  it("handles null head.", () => {
    expect(floydsCycleDetection()).toBe(false);
  });
});
