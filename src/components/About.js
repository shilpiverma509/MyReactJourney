import React, { Component } from "react";
import UserClass from "../../UserClass";
import User from "./User";
import { UserContext } from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log(" Parent Constructing");
    this.state = { abc: "123" };
  }

  componentDidMount() {
    //console.log("parent componentDidMount");
  }
  render() {
    //console.log("Parent render");
    return (
      <div>
        <h1>About me</h1>
        <div>
          LoggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
          </UserContext.Consumer>
        </div>
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
