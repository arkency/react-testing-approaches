 import React from 'react/addons';
import SpecialityOfTheHouse from 'components/SpecialityOfTheHouse';

describe("Speciality of the House - using testing through Simulate technique", () => {
  beforeEach(function() {
    let { TestUtils, TestUtils: { Simulate } } = React.addons;

    this.component = TestUtils.renderIntoDocument(<SpecialityOfTheHouse />);
    this.selectDOM = () => React.findDOMNode(this.component);
    this.dishesDOM = () => this.selectDOM().children;

    this.selectedDishDOM = () => {
      let selectedDishDOM = undefined;
      let dishesDOM = this.dishesDOM();
      for(let index = 0; index < dishesDOM.length; ++index) {
        if(dishesDOM[index].selected) {
          selectedDishDOM = dishesDOM[index];
          break;
        }
      }

      return selectedDishDOM;
    };

    this.availableDishes = () => {
      let dishes = [];

      // [].slice.call converts everything iterable into a *real* array.
      // Only real Arrays got forEach method!
      [].slice.call(this.dishesDOM()).forEach(function(dishDOM) {
        let { textContent, value } = dishDOM;
        dishes.push({ value, name: textContent });
      });

      return dishes;
    }; 

    this.Simulate = Simulate;
  });

  it("renders a select box", function() { 
    expect(this.selectDOM().tagName).toEqual("SELECT");
  });

  it("has fried bacon selected by default", function() {
    let selected = this.selectedDishDOM();

    expect(selected).toBeDefined();
    expect(selected.textContent).toEqual("Fried Bacon");
    expect(selected.value).toEqual('fried-bacon');
  });

  it("has all restraurant's best dishes", function() {
    let dishesPresented = this.availableDishes();

    expect(dishesPresented.length).toEqual(3);
    expect(dishesPresented).toContain({ name: "Fried Bacon", value: "fried-bacon" });
    expect(dishesPresented).toContain({ name: "Fish & Chips", value: "fish-and-chips" });
    expect(dishesPresented).toContain({ name: "Potato Salad", value: "potato-salad" });
  }); 

  it("allows chaning speciality of the house by the user", function() {
    this.Simulate.change(this.selectDOM(), { target: (this.dishesDOM())[1] });

    expect(this.component.state.selectedSpeciality).toEqual("fish-and-chips");
    expect(this.selectedDishDOM().value).toEqual("fish-and-chips");
    
    this.Simulate.change(this.selectDOM(), { target: (this.dishesDOM())[2] });

    expect(this.component.state.selectedSpeciality).toEqual("potato-salad");
    expect(this.selectedDishDOM().value).toEqual("potato-salad");
  });
});
