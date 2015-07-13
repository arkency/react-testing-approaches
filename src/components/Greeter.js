import React from 'react/addons';

class Greeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.initialName };

    this.greeterText = this.greeterText.bind(this);
  }

  greeterText() {
    return (<p>Hello, {this.state.name}!</p>);
  }

  render() {
    return (<div className="greeter">
              {this.greeterText()}
            </div>);
  }
}

Greeter.defaultProps = { initialName: "World" };

export default Greeter;
