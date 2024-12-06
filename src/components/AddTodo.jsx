import { useState } from "react";

function AddTodo({ handleOnClick }) {
  const [itemName, setItemName] = useState();
  const [itemDate, setItemDate] = useState();
  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };
  const handleDateChange = (event) => {
    setItemDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    handleOnClick(itemName, itemDate);
    setItemDate("");
    setItemName("");
  };
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6 ">
          <input
            type="text"
            value={itemName}
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={itemDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
