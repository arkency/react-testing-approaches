import React from 'react/addons';
import { InvitedPerson, InvitationList } from 'components/InvitationList';

describe("Invitation List - testing with shallow rendering", () => {
  beforeEach(function() {
    this.examplePeople = [
      { id: 1, name: "Waldo" },
      { id: 2, name: "Hercules" }
    ];

    let { TestUtils } = React.addons;

    this.TestUtils = TestUtils;
    this.renderer = TestUtils.createRenderer();
    this.renderer.render(<InvitationList initiallyInvited={this.examplePeople} />);
  });

  it("renders a list in a box with proper CSS classes and people within it", function() {
    let result = this.renderer.getRenderOutput(),
        personOneID = `person_${this.examplePeople[0].id}`,
        personTwoID = `person_${this.examplePeople[1].id}`;

    expect(result.type).toEqual('div');
    expect(result.props.className).toEqual("invitation-list-container");

    expect(result.props.children).toEqual(
      <ul className="invitation-list" ref='list'>
        <InvitedPerson key={personOneID} ref={personOneID} person={this.examplePeople[0]} />
        <InvitedPerson key={personTwoID} ref={personTwoID} person={this.examplePeople[1]} />
      </ul>
    );
  }); 
});
