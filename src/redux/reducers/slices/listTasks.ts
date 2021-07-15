import iTask from "../../../types/interfaces/iTask";
import iStore from "../../store/iStore";
import initialState from "../../store/initialState";

const listTasks = (state: iStore = initialState, task: iTask) => ({
  ...state,
});
export default listTasks;
