import React from "react";

function Greet({ name, heroName, children }) {
  //   console.log(props.name);
  return (
    <div>
      <h1>
        greet {name} a.w.a {heroName}
      </h1>
      <div> {children}</div>
    </div>
  );
}

// const Greet = () => <h1>welcome Shashi</h1>;
// export const Greet = () => <h1>Greet from</h1>;

export default Greet;
