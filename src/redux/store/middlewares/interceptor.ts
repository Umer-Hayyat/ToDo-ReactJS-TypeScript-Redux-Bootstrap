import { Dispatch } from "redux";
import * as actions from "../../actions/actions";
import iAction from "../../actions/iAction";

const interceptor = () => {
  return (next: Dispatch) => (action: iAction<string, any>) => {
    let returnValue: any = null;

    if (action.type === actions.OPEN_TODO) {
      return new Promise<iAction<string, any>>((resolve) => {
        setTimeout(() => {
          console.log("Adding 2 Seconds Wait");
          resolve(action);
        }, 200);
      }).then((action: iAction<string, any>) => {
        const addTaskAction: iAction<string, any> = {
          type: actions.ADD_TODO,
          payload: action.payload,
        };
        returnValue = next(addTaskAction);
      });
    }

    return returnValue;
  };
};
export default interceptor;
