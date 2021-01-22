import { combineReducers, createStore } from "redux";
import { kittensReducer } from "./kittens/KittensReducer";

const rootReducer = combineReducers({
  kittens: kittensReducer,
});

const store = createStore(rootReducer);

export default store;
