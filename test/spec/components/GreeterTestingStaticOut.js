import Greeter from 'components/Greeter';
import React   from 'react/addons';

describe("Greeter component - the static output approach", () => {
  beforeEach(function() { 
    let {TestUtils} = React.addons;

    this.component = TestUtils.renderIntoDocument(<Greeter initialName="my first test" />);
    this.renderedDOM = () => React.findDOMNode(this.component);
  });

  it("renders a paragraph which greets someone", function() { 
    let renderedParagraphs = this.renderedDOM().querySelectorAll("p");

    expect(this.renderedDOM().children.length).toEqual(1);
    expect(renderedParagraphs.length).toEqual(1);
    expect(renderedParagraphs[0].textContent).toEqual("Hello, my first test!");
  });

  it("wraps a paragraph with a <div> with a proper class name", function() {
    let rootElement = this.renderedDOM();

    expect(rootElement.tagName).toEqual("DIV");
    expect(rootElement.classList.length).toEqual(1);
    expect(rootElement.classList[0]).toEqual("greeter");
  });

  it("changes greeting person after setting state", function() {
    let renderedParagraph = this.renderedDOM().querySelectorAll("p")[0];

    expect(renderedParagraph.textContent).toEqual("Hello, my first test!");
    this.component.setState({ name: "World" });
    expect(renderedParagraph.textContent).toEqual("Hello, World!");
  });
});
