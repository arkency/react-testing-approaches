import React from 'react/addons';
import { InvitedPerson } from 'components/InvitationList';

describe("Testing InvitedPerson - with static DOM checking and Simulate", () => {
  beforeEach(function() {
    let { TestUtils, TestUtils: { Simulate } } = React.addons;

    this.examplePerson = { id: 1, name: "Waldo" };
    this.component = TestUtils.renderIntoDocument(<InvitedPerson person={this.examplePerson} />);

    this.renderedDOM   = () => React.findDOMNode(this.component);
    this.personNameDOM = () => React.findDOMNode(this.component.refs.name);
    this.linkDOM       = () => React.findDOMNode(this.component.refs.notSureLink);
    this.Simulate      = Simulate;
  });

  it("is a list element", function() {
    expect(this.renderedDOM().tagName).toEqual('LI');
  });

  it("has invited-person CSS class", function() {
    let listElementClasses = [].slice.call(this.renderedDOM().classList);

    expect(listElementClasses.length).toEqual(1);
    expect(listElementClasses).toContain('invited-person');
  });

  it("displays a person name", function() {
    expect(this.personNameDOM().textContent).toEqual(this.examplePerson.name);
  });
  
  it("by default assumes the user is sure about this person", function() {
    let link = this.linkDOM();
    expect(this.component.state.notSure).toBeFalsy();
    expect(link.textContent).toEqual(this.component.props.notSureMessage.false);
  });

  it("allows you to toggle confidence about this person", function() {
    let link = this.linkDOM();
    this.Simulate.click(link);

    expect(this.component.state.notSure).toBeTruthy();
    expect(link.textContent).toEqual(this.component.props.notSureMessage.true);
 
    this.Simulate.click(link);
    expect(this.component.state.notSure).toBeFalsy();
    expect(link.textContent).toEqual(this.component.props.notSureMessage.false);
  });

  it("has an additional CSS class when an user is not sure", function() {
    let link = this.linkDOM();
    this.Simulate.click(link);
    
    let listElementClasses = [].slice.call(this.renderedDOM().classList);

    expect(listElementClasses.length).toEqual(2);
    expect(listElementClasses).toContain('invited-person');
    expect(listElementClasses).toContain('not-sure');

  });
});
