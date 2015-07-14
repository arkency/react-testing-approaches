import React from 'react/addons';
import { InvitedPerson, InvitationList } from 'components/InvitationList';

describe("Invitation List - testing with test utilities", () => {
  beforeEach(function() {
    this.examplePeople = [
      { id: 1, name: "Waldo" },
      { id: 2, name: "Hercules" }
    ];

    let { TestUtils } = React.addons;

    this.TestUtils = TestUtils;
    this.component = TestUtils.renderIntoDocument(<InvitationList initiallyInvited={this.examplePeople} />);
  });

  it("renders a list in a box with proper CSS classes", function() {
    let box = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "div");
    expect(box.props.className).toEqual("invitation-list-container");

    let list = this.TestUtils.findRenderedDOMComponentWithTag(box, "ul");
    expect(list.props.className).toEqual("invitation-list");
  });

  it("shows a list of people who are invited to an event", function() {
    let list = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "ul");
    
    expect(list.props.children.length).toEqual(2);

    list.props.children.forEach((invitedPerson, index) => {
      expect(invitedPerson.type).toEqual(InvitedPerson);
      expect(invitedPerson.key).toEqual(`person_${this.examplePeople[index].id}`);
      expect(invitedPerson.ref).toEqual(`person_${this.examplePeople[index].id}`);
      expect(invitedPerson.props.person).toEqual(this.examplePeople[index])
    });

  });
});
