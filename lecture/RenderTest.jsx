import React, { PureComponent } from "react";

// ii) 렌더링 자주 안됨. state 바꼈는지 안바꼈는지로 보고 판단
// 객체나 참조 구조가 있을 때는 표현하기 어려움
// state에 객체 구조를 안쓰는게 좋음. (setState시 새로 렌더링 하기 때문)
class Test extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   // 원하는 것만 렌더링
  // }

  // 정밀한 동작 시행할 때
  // constructor(props) {
  //   super(props);

  //   const filtered = this.props.filter(() => {
  //     //...
  //   });
  //   this.state = {
  //     result: this.props.result,
  //     filter: filtered,
  //   };
  // }
  state = {
    counter: 0,
    array: [],
    result: this.props.result,
  };

  // i) import {Component} from 'react'; 를 했을 때
  //
  //   shouldComponentUpdate(nextProps, nextState, nextContext) {
  //     if (this.state.counter !== nextState.counter) {
  //       return true;
  //     }
  //     return false;
  //   }
  onClick = () => {
    this.setState({
      array: [...this.state.array, 1], // 값을 바꿔준거를 pureComponent가 알아차려야 함
    });
  };

  render() {
    console.log("렌더링", this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default Test;
