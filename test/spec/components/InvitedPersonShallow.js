import React from 'react/addons';
import { InvitedPerson } from 'components/InvitationList';

describe("Testing InvitedPerson using shallow rendering", () => {
  beforeEach(function() {
    let { TestUtils } = React.addons;

    this.person = { id: 1, name: "Waldo" };
    
    this.renderer = TestUtils.createRenderer();
    this.renderer.render(<InvitedPerson person={this.person} />);

    this.TestUtils = TestUtils;
  });

  it("is a list element", function() {
    let renderedRoot = this.renderer.getRenderOutput();

    expect(renderedRoot.type).toEqual("li");
  });

  it("has invited-person CSS class", function() {
    let renderedRoot = this.renderer.getRenderOutput();

    expect(renderedRoot.props.className).toEqual("invited-person"); 
  });

  it("displays a person name", function() {
    let renderedRoot = this.renderer.getRenderOutput();

    expect(renderedRoot.props.children).toContain(<p ref='name' key='personName'>{this.person.name}</p>);
  });


  it("by default assumes the user is sure about this person", function() {
    let renderedRoot    = this.renderer.getRenderOutput();
    let notSureLinkBox  = renderedRoot.props.children[1];

    expect(notSureLinkBox.props.children.props.children).toEqual("I'm not sure about this person");
  });

  it("allows you to toggle confidence about this person", function() {
    let renderedRoot = this.renderer.getRenderOutput();
    let notSureLink = renderedRoot.props.children[1].props.children;

    notSureLink.props.onClick({ preventDefault: () => {} });

    let updatedRoot = this.renderer.getRenderOutput();
    notSureLink = updatedRoot.props.children[1].props.children;

    expect(notSureLink.props.children).toEqual("Now I'm sure!");    
  });
});


