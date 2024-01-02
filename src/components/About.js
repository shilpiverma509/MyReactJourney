import React, { Component } from "react";
import UserClass from "../../UserClass";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);
    console.log(" Parent Constructing");
    this.state = { abc: "123" };
  }

  componentDidMount() {
    console.log("parent componentDidMount");
    this.setState =
      ({
        abc: "123445",
      },
      () => {
        console.log("skjd", this.state.abc);
      });
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About me</h1>
        <User
          name="Shilpi"
          location="gurgaon"
          contact="@shilpiverma509FromClass"
        />
      </div>
    );
  }
}

export default About;
