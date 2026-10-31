import React from "react";
import Person from "./Person";

function NamelList() {
  const fruits = ["apple", "orange", "grapes"];
  const arr = [2, 4, 5, 6];
  const arrlist = arr.map((r) => <h1>{r * 2}</h1>);
  const namelist = fruits.map((fruit) => <h1>{fruit}</h1>);
  const personList = [
    {
      id: 1,
      name: "shahsi",
      age: 30,
      address: "mysuru",
      state: "ka",
    },
    {
      id: 2,
      name: "kumar",
      age: 20,
      address: "madurai",
      state: "tamilnadu",
    },
    {
      id: 3,
      name: "shahsi",
      age: 25,
      address: "warangal",
      state: "telangana",
    },
  ];
  const result = personList.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return (
    <div>
      {/* {arrlist} */}
      {/* {namelist} */}
      {result}
    </div>
  );
}

export default NamelList;
