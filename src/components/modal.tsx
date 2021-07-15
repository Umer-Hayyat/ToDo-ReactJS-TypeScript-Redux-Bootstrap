import { useRef } from "react";
import { useDispatch } from "react-redux";

import createAction from "../redux/actions/actionCreator";
import * as actions from "../redux/actions/actions";
import iTask from "../types/interfaces/iTask";
import { Modal, Button, Spinner } from "react-bootstrap";
import { useState } from "react";

const InputModal = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(false);
  const ieDueDate = useRef<HTMLInputElement>(null);
  const ieAssignedTo = useRef<HTMLInputElement>(null);
  const ieDescription = useRef<HTMLInputElement>(null);

  const addTask = () => {
    let defaultDate = new Date();
    let iTask: iTask = {
      CreatedOn: defaultDate,
      DueDate: ieDueDate?.current?.value
        ? new Date(ieDueDate?.current?.value)
        : defaultDate,
      AssignedTo: ieAssignedTo?.current?.value ?? "",
      Description: ieDescription?.current?.value ?? "",
    };

    const action = createAction(actions.OPEN_TODO, iTask);

    dispatch(action);
    setSpinner(false);
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div>
          <label>Due Date</label>
          <input className="w-100" ref={ieDueDate}></input>
        </div>
        <div>
          <label>Assigned To</label>
          <input className="w-100" ref={ieAssignedTo}></input>
        </div>
        <div>
          <label>Description</label>
          <input className="w-100" ref={ieDescription}></input>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            setSpinner(true);
            addTask();
          }}
          disabled={spinner}
        >
          {spinner && <Spinner animation="border" size="sm" />} Create
        </Button>

        <Button
          onClick={() => {
            setSpinner(false);
            props.onHide();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InputModal;
