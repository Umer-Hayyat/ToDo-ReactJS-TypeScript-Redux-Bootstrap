import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/taskReducer";
import logger from "./middlewares/logger";
import interceptor from "./middlewares/interceptor";

const store = createStore(
  rootReducer,
  applyMiddleware(logger, interceptor, thunk)
);
export const storeState = store.getState();
export default store;
