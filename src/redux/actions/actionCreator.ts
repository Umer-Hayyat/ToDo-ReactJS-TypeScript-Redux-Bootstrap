import iAction from "./iAction";

const createAction = <T extends string, P extends any>(
  type: T,
  payload: P
): iAction<T, P> => ({ type, payload });

export default createAction;
