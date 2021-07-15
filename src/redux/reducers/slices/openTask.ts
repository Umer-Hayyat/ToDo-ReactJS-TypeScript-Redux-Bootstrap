import iTask from "../../../types/interfaces/iTask";
import iStore from "../../store/iStore";
import initialState from "../../store/initialState";

const openTask = (state: iStore = initialState, task: iTask) => ({
  ...state,
  tasks: [task, ...state.tasks] as iTask[],
});

export default openTask;
