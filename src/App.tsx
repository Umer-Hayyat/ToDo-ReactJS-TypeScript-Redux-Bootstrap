import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store/reduxStore";

import ListTasks from "./components/listTask";

function App() {
  return (
    <Provider store={store}>
      <ListTasks />
    </Provider>
  );
}

export default App;
