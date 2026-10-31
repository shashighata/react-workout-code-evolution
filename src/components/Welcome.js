import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, heroName, children } = this.props;
    return (
      <>
        <h1>
          welcome {name} a.w.a {heroName}
        </h1>
        {children}
      </>
    );
  }
}

export default Welcome;
