import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { abc: "asas" };
    console.log(" child consrt");
  }

  componentDidMount() {
    console.log("child componentDidMount");
    this.setState({ abc: "ads" });
  }
  render() {
    console.log(" child render");
    return (
      <div className="user-card">
        <h2>Name:{this.props.name}</h2>
        <h2>Location:{this.props.location}</h2>
        <h4>Contact:{this.props.contacts}</h4>
      </div>
    );
  }
}

export default UserClass;
