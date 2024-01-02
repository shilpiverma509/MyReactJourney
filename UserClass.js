import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        avatar_url: "dummy",
      },
    };
  }

  async componentDidMount() {
    /* this is shared across all the lifecycle methods of react */
    this.timer = setInterval(() => {
      consoele.log("setInterval() called");
    }, 1);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    /* as this is shared across we can use it access the set time interval* */
    clearInterval(this.timer);
  }

  render() {
    console.log(" child render");
    const { name, location, avatar_url } = this.state.userInfo;
    //debugger;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h2>Location:{location}</h2>
        <h4>Contact:{this.props.contacts}</h4>
      </div>
    );
  }
}

export default UserClass;
