import React from 'react/addons';
import { InvitationList, InvitedPerson } from 'components/InvitationList';

describe("Invitation List - testing through refs", () => {
  beforeEach(function() {
    let { TestUtils } = React.addons;

    this.examplePeople = [
      { id: 1, name: "Waldo" },
      { id: 2, name: "Hercules" }
    ];

    this.component = TestUtils.renderIntoDocument(<InvitationList initiallyInvited={this.examplePeople} />);
    this.TestUtils = TestUtils;
  });

  it("renders a list in a box with proper CSS classes", function() {
    let renderedDOM = React.findDOMNode(this.component);
    let listDOM = React.findDOMNode(this.component.refs.list);

    expect(renderedDOM.tagName).toEqual("DIV");
    expect(renderedDOM.classList.length).toEqual(1);
    expect([].slice.call(renderedDOM.classList)).toContain("invitation-list-container");

    expect(renderedDOM.children.length).toEqual(1);
    expect([].slice.call(renderedDOM.children)).toContain(listDOM);

    expect(listDOM.tagName).toEqual("UL");
    expect(listDOM.classList.length).toEqual(1);
    expect([].slice.call(listDOM.classList)).toContain('invitation-list');
  });

  it("shows a list of people who are invited to an event", function() {
    let firstPersonComponent  = this.component.refs[this.component.personUniqueID(this.examplePeople[0])];
    let secondPersonComponent = this.component.refs[this.component.personUniqueID(this.examplePeople[1])];

    let assertProperPresentationOfPerson = (component, person) => {
      expect(component).toBeDefined();
      expect(component.props.person).toEqual(person);
      expect(this.TestUtils.isCompositeComponentWithType(component, InvitedPerson)).toBeTruthy();
    };

    assertProperPresentationOfPerson(firstPersonComponent, this.examplePeople[0]);
    assertProperPresentationOfPerson(secondPersonComponent, this.examplePeople[1]);
  });
});


