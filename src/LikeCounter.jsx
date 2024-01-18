import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import likeCounterReducer from "./Reducer";
import { incrementLike, decrementLike } from "./Actions";

const store = createStore(likeCounterReducer);

const LikeCounter = () => {
  const likeCount = useSelector((state) => state.likeCount);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementLike());
  };

  const handleDecrement = () => {
    dispatch(decrementLike());
  };

  return (
    <div>
      <h1>Like Counter: {likeCount}</h1>
      <button onClick={handleIncrement}>Like</button>
      <button onClick={handleDecrement}>Unlike</button>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Like Counter App</h1>
        <LikeCounter />
      </div>
    </Provider>
  );
};

export default App;
