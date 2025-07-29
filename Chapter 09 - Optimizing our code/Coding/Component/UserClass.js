import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // This is used to call parents constuctor -> It is mendatory to call parent constructor before calling child constructor

    // initialize state variable inside the this.state object (which contains all the state of a component)
    this.state = {
      count1: 0,
      count2: 0,
    };

    console.log(this.props.name + " child constructor called");
  }

  componentDidMount() {
    console.log(this.props.name + " child componentDidMount called");
  }

  render() {
    console.log(this.props.name + " child render called");
    const { url, name, address, user } = this.props;
    return (
      <div className="user-card">
        <img src={url}></img>
        <h1>Name: {name}</h1>
        <h1>Address: {address}</h1>
        <h1>Username: {user}</h1>
      </div>
    );
  }
}

export default UserClass;
