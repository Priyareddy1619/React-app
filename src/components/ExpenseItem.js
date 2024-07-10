import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaTimesCircle } from "react-icons/fa";

const ExpenseItem = ({ id, name, quantity, unitprice }) => {
  const { dispatch, Location } = useContext(AppContext);

  const handleDeleteItem = () => {
    const item = {
      name: name,
    };

    dispatch({
      type: "DELETE_ITEM",
      payload: item,
    });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>
        {Location}
        {parseInt(unitprice)}
      </td>
      <td>
        {Location}
        {parseInt(quantity) * parseInt(unitprice)}
      </td>
      <td>
        <FaTimesCircle size="2.2em" color="red" onClick={handleDeleteItem}></FaTimesCircle>
      </td>
    </tr>
  );
};

export default ExpenseItem;
