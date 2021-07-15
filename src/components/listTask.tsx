import React from "react";
import { useSelector } from "react-redux";
import iTask from "../types/interfaces/iTask";
import { storeState } from "../redux/store/reduxStore";
import InputModal from "./modal";

const ListTasks = (): JSX.Element => {
  const [modalShow, setModalShow] = React.useState(false);

  const listTasks: iTask[] = useSelector((state: typeof storeState) => {
    return state.tasks;
  });

  return (
    <div>
      <button
        type="button"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => setModalShow(true)}
        className="btn btn-primary mb-2"
      >
        Open Task
      </button>
      <InputModal show={modalShow} onHide={() => setModalShow(false)} />
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>CreatedOn</th>
            <th>DueDate</th>
            <th>AssignedTo</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {listTasks?.map((x) => (
            <tr key={`${x.CreatedOn.getDate()}-${Math.floor(Math.random() * 100000) + 1}`}>
              <td>{x.CreatedOn.toUTCString()}</td>
              <td>{x.DueDate.toUTCString()}</td>
              <td>{x.AssignedTo}</td>
              <td>{x.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTasks;
