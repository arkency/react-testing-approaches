import React from 'react/addons';

class SpecialityOfTheHouse extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedSpeciality: 'fried-bacon' };
    this.changeSelectedSpeciality = this.changeSelectedSpeciality.bind(this);
  }

  changeSelectedSpeciality(event) {
    this.setState({ selectedSpeciality: event.target.value });
  }

  speciality(name, value) {
    return (<option key={value} value={value}>{name}</option>);
  }

  render() {
    return (<select value={this.state.selectedSpeciality}
                    onChange={this.changeSelectedSpeciality}>
              {this.speciality("Fried Bacon", "fried-bacon")}
              {this.speciality("Fish & Chips", "fish-and-chips")}
              {this.speciality("Potato Salad", "potato-salad")}
            </select>);
  } 
}

export default SpecialityOfTheHouse;
