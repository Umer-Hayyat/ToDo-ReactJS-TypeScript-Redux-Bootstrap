import iAction from "../actions/iAction";
import * as actions from "../actions/actions";
import iStore from "../store/iStore";
import initialState from "../store/initialState";
import listTasks from "./slices/listTasks";
import addTask from "./slices/addTask";

const taskReducer = (
  state: iStore = initialState,
  action: iAction<string, any>
) => {
  switch (action.type) {
    case actions.LIST_TODO:
      return listTasks(state, action.payload);
    case actions.ADD_TODO:
      return addTask(state, action.payload);
    default:
      return state;
  }
};

export default taskReducer;
