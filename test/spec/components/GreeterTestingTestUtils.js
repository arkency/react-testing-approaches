import React from 'react/addons';
import Greeter from 'components/Greeter';

describe("Greeter component - TestUtils approach", () => {
  beforeEach(function() {
    let { TestUtils } = React.addons;

    this.component = TestUtils.renderIntoDocument(<Greeter initialName="my first test" />);

    this.TestUtils = TestUtils;
  });

  it("renders a paragraph which greets someone", function() { 
    let paragraph = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "p");
    expect(paragraph.props.children.join('')).toEqual("Hello, my first test!");
  });

  it("wraps a paragraph with a <div> with a proper class name", function() {
    let wrapDiv = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "div");

    expect(wrapDiv.props.className).toEqual("greeter");
  });

  it("changes greeting person after setting state", function() {
    let paragraph = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "p");

    expect(paragraph.props.children.join('')).toEqual("Hello, my first test!");
    this.component.setState({ name: "World" });
    expect(paragraph.props.children.join('')).toEqual("Hello, World!");
  });
});
