import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

// TO instantiate the global state object:
const StoreContext = createContext();
const { Provider } = StoreContext;

// Use Context Object for Global State
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
      products: [],
      cart: [],
      cartOpen: false,
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
  };

  const useStoreContext = () => {
    return useContext(StoreContext);
  };

  export { StoreProvider, useStoreContext };