import React from 'react/addons';
import classNames from 'classnames';

class InvitedPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notSure: false };

    this.toggleConfidenceAboutPerson = this.toggleConfidenceAboutPerson.bind(this);
    this.handleClickNotSureLink = this.handleClickNotSureLink.bind(this);
    this.listElementClasses = this.listElementClasses.bind(this);
    this.renderNotSureLink  = this.renderNotSureLink.bind(this);
  } 

  listElementClasses() {
    return classNames({
      ["invited-person"]: true,
      ["not-sure"]: this.state.notSure
    });
  }

  toggleConfidenceAboutPerson() {
    this.setState({ notSure: !this.state.notSure });
  }

  handleClickNotSureLink(ev) {
    ev.preventDefault();
    this.toggleConfidenceAboutPerson();
  }

  renderNotSureLink() {
    let { notSureMessage } = this.props;

    return (
      <p key='notSureBox'>
        <a ref='notSureLink' href='#' onClick={this.handleClickNotSureLink}>
          {notSureMessage[this.state.notSure]}
        </a>
      </p>
    );
  }

  render() {
    let { person } = this.props;

    return (
      <li className={this.listElementClasses()}>
        <p ref='name' key='personName'>{person.name}</p>
        {this.renderNotSureLink()}
      </li>
    )
  }
}

InvitedPerson.defaultProps = {
  notSureMessage: {
    true: "Now I'm sure!",
    false: "I'm not sure about this person"
  } 
}

class InvitationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { invitedPeople: this.props.initiallyInvited };
  }

  personUniqueID(person) {
    return ['person', person.id].join('_');
  }

  render() {
    let invitedPeople = [];
    this.state.invitedPeople.forEach(person => {
      let id = this.personUniqueID(person);
      invitedPeople.push(<InvitedPerson ref={id} key={id} person={person} />);
    });

    return ( 
      <div className='invitation-list-container'>
        <ul ref='list' className='invitation-list'>
          {invitedPeople}
        </ul>
      </div>
    );
  }
}

InvitationList.defaultProps = { initiallyInvited: [] };

export default { InvitationList, InvitedPerson };
