import React, { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    const { name } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h1>ProfileClass</h1>
        <h2>Name: {name}</h2>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default ProfileClass;
