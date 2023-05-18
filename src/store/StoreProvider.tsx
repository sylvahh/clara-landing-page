import React, { useContext,  createContext, useReducer, useEffect } from "react";
import { getItem, getStoreById, makeApiRequest, storeItem } from "../utilities";
import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


interface StoreProviderProps {
  children: React.ReactNode;
}

type StoreAction = { type: any; payload: any };

interface IStoreContext {
  localmarket: Array<any>;
  supermarket: Array<any>;
  getMarketId: (id: string, city: string) => Promise<void> 
  marketList: any[]
  isLoading: boolean
  
  // getStoresById: (id:string) => any[]
}

const initialState: IStoreContext =  {
  localmarket: [],
  supermarket: [],
  getMarketId: async(id, city) => {} ,
  marketList: [],
  isLoading: false
  // getStoresById: getStoreById
};

const reducer = (state:IStoreContext, action:StoreAction) => {
  switch (action.type) {
    case "FETCH_DATA": {
      const { localmarketData, supermarketData } = action.payload;
      return {
        ...state,
        localmarket: localmarketData.data.local_market,
        supermarket: supermarketData.data.supermarket,
        // isLoading: false
      };
    }
    case "UPDATE_LIST": {
      const stores = action.payload;
      return {
        ...state,
        marketList: stores,
      //  isLoading: false
      };
      }
    default:
      return state;
  }
};

const StoreContext = createContext<IStoreContext>(initialState);

const StoreProvider = ({ children }:StoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const Navigate = useNavigate()
  // const history = useHistory();

  const fetchData = async () => {
    try {
      state.isLoading = true
      const localMarket_req = await makeApiRequest("/local-markets", 'GET');
    const supermarket_req = await makeApiRequest("/supermarkets", 'GET');
    
    const localmarketData = localMarket_req
    const supermarketData =  supermarket_req
      
    dispatch({ type: "FETCH_DATA", payload: { localmarketData, supermarketData } });
      
    } catch (error) {
      throw error
    }
    
  };

  const getMarketId = async (id: string, city: string) => {
    try {
      state.isLoading = true
      const stores = await getStoreById(id);
      if (stores) {
        console.log('stores', state.isLoading);
        storeItem('id', id)
        storeItem('city', city)
        dispatch({ type: "UPDATE_LIST", payload: stores });
        // state.marketList &&  Navigate(name)
      }
    } catch (error) {
      console.warn(error);
    }
  };
  
  

  useEffect(() => {
    fetchData();
    const marketId = getItem('id')
    const marketCity = getItem('city')
    if (!state.marketList.length && marketId && marketCity) {
      getMarketId(marketId, marketCity)
    }
  }, [state.marketList]);

  const storeContextValue = {
    localmarket: state.localmarket,
    supermarket: state.supermarket,
    getMarketId: getMarketId,
    marketList: state.marketList,
  isLoading: state.isLoading

    // getStoresById: getStoresById,
  };

  return (
    <StoreContext.Provider value={storeContextValue}>
      {children}
    </StoreContext.Provider>
  );
};
const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };
