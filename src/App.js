import React from "react";
import "./style.css";
import { useState } from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

function reducer(currentState, action) {
  // 기본 state 설정
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }

  // 리엑트 불변성의 원칙을 고수하여 원본을 복사하여 사용한다.
  const newState = { ...currentState };
  // Onclick 이벤트로 action.type이 PLUS인 경우 실행
  if (action.type === "PLUS") {
    newState.number += 1;
  }
  if (action.type === "MINUS") {
    newState.number -= 1;
  }
  return newState;
}

const store = createStore(reducer);

function App() {
  const [number, setNumber] = useState(1);

  const jsx = `Provider store={store}`;

  return (
    <fieldset>
      <legend>
        <h1>{jsx}</h1>
      </legend>

      <Provider store={store}>
        <div id="container">
          <h1>Root </h1>
          <div className="grid">
            <Left1 number={number}></Left1>
            <Right1></Right1>
          </div>
        </div>
      </Provider>
    </fieldset>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1 : </h1>
      <Left2></Left2>
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}

function Left3(props) {
  // useSelector 는 함수를 인자로 받는다.
  function funcNumber(state) {
    return state.number; // number state를 쓰겠다~
  }

  const number = useSelector((state) => state.number);

  return (
    <div>
      <h1>Left3 :{number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}

function Right3(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      />
      <input
        type="button"
        value="-"
        onClick={() => {
          dispatch({ type: "MINUS" });
        }}
      />
    </div>
  );
}

export default App;
