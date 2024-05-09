import { createContext, useContext, useReducer } from "react";
import { initialState } from "./reducer";
import Reducer from "./reducer";

const GlobalContext = createContext();

const GlobalState = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <GlobalContext.Provider value={{ basket: state.basket, dispatch: dispatch }}>
      {children}
    </GlobalContext.Provider> 
  );
};

export default GlobalState;

export const useAuth = () => {
  return useContext(GlobalContext);
};
