import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      comments: "",
      topics: "",
    };
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleComments = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };
  handleSelect = (e) => {
    this.setState({
      topics: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`${this.state.name} ${this.state.comments} ${this.state.topics}`);
  };
  render() {
    const { name, comments, topics } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>name</label>
          <input type="text" value={name} onChange={this.handleName} />
        </div>
        <div>
          <label>name</label>
          <textarea
            type="text"
            value={comments}
            onChange={this.handleComments}
          />
        </div>
        <div>
          <select value={topics} onChange={this.handleSelect}>
            <option>HTML</option>
            <option>CSS</option>
            <option>JAvascript</option>
            <option>ReactJs</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
