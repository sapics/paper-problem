const paper = require("paper-jsdom-canvas");

test("paper problem demo", () => {
  paper.setup([1024, 1024])
  new paper.Path("M 10 10 H 90 V 90 H 10 L 10 10")
})
