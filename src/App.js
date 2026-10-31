import React, { Component } from "react";
// import myFun from "./components/Greet";
// import { Greet } from "./components/Greet";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import CounterFun from "./components/CounterFun";
// import FunEvent from "./components/FunEvent";
// import ClassEvent from "./components/ClassEvent";
// import ParentComp from "./components/ParentComp";
// import FunParentComp from "./components/FunParentComp";
// import ConditionalRendering from "./components/ConditionalRendering";
// import ConditionFun from "./components/ConditionFun";
// import NamelList from "./components/NamelList";
// import Stylesheet from "./components/Stylesheet";
// import Inline from "./components/Inline";
// import Hello from "./components/Hello";
// import "./shashiStyle.css";
// import styles from "./shashiStyle.module.css";
// import Form from "./components/Form";
// import FormFun from "./components/FormFun";
import ComponentA from "./components/ComponentA";
// import "./shashiStyle.css";
// import styles from "./shashiStyle.module.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentA />
        {/* <Form /> */}
        {/* <FormFun /> */}
        {/* <div className="error">error</div>
        <div className={styles.success}>success</div>
        <Inline />
        <Stylesheet name="primary" />
        <NamelList /> */}
        {/* <ConditionFun /> */}
        {/* <ConditionalRendering /> */}
        {/* <ParentComp /> */}
        {/* <FunParentComp /> */}
        {/* <FunEvent /> */}
        {/* <ClassEvent /> */}
        {/* <CounterFun /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <h1> hello world</h1> */}
        {/* <Greet name="shashi" heroName="batman">
          <p>this is paragraph</p>
        </Greet>
        <Greet name="kumar" heroName="superman">
          <button>click</button>
        </Greet>
        <Greet name="ghata" heroName="hitman" />

        <Welcome name="shashi" heroName="hitman">
          <p>this is paragraph</p>
        </Welcome>
        <Welcome name="kumar" heroName="superman">
          <button>click</button>
        </Welcome>
        <Welcome name="ghata" heroName="batman" /> */}
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
