import { createContext, useReducer } from 'react';

const initialState = {
  expenses: [],
  Location: ''
};

const AppContext = createContext(initialState);

const appReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUANTITY':
      const updatedqty = action.payload;
      return {
        ...state,
        quantity: updatedqty,
      };
    case 'CHG_LOCATION':
      return {
        ...state,
        Location: action.payload,
      };
    case 'RED_QUANTITY':
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.name === action.payload.name
            ? { ...expense, quantity: expense.quantity - action.payload.quantity }
            : expense
        ),
      };
    case 'ADD_QUANTITY':
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.name === action.payload.name
            ? { ...expense, quantity: expense.quantity + action.payload.quantity }
            : expense
        ),
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.name !== action.payload.name),
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
