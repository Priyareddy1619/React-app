import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CartValue = () => {
  const { expenses, Location } = useContext(AppContext);
  
  if (!expenses || !Location) {
    console.log("Expenses or Location not found");
    return null;
  }

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.unitprice * item.quantity);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>
        Cart Value: {Location}
        {totalExpenses}
      </span>
    </div>
  );
};

export default CartValue;

