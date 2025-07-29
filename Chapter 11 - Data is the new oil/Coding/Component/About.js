import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");

    this.state = {
      name: "dummy",
      location: "dummy",
      user: "dummy",
    }
  }

  // this will be called when the component is renderded completely
  async componentDidMount() {
    console.log("parent componentDidMount called");
    const API = "https://api.github.com/users/rohanhrk";
    const response = await fetch(API);
    const JSON = await response.json();
    // console.log(JSON);
    this.setState(JSON);
  }

  // this will be called when state variable is updating
  componentDidUpdate() {
    console.log("Parent componentDidUpdate called");
  }

  render() {
    console.log("Parent render called");
    const {name, location, login, avatar_url} = this.state;

    return (
      <div className="about-container">
        <UserClass
          url={avatar_url}
          name={name}
          address={location}
          user={login}
        />
      </div>
    );
  }
}

export default About;
