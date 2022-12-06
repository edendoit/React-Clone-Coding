import React, { createRef } from "react";
const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: "eden11",
    value: "",
    reulst: "",
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "딩동댕",
        word: this.state.value,
        value: "",
      });
      this.input.current.focus();
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
      this.input.current.focus();
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };
  input = createRef();

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.input}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>입력</button>
        </form>
        <div>{result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
