import React from "react";

function Person({ person }) {
  //   const { name, age, address, state } = person;
  return (
    <div>
      <h1>
        {person.name} {person.age} {person.address} {person.state}
        {/* {name} {age} {address} {state} */}
      </h1>
    </div>
  );
}

export default Person;
