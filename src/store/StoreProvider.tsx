import React, { useContext, createContext, useReducer, useEffect } from 'react';
import { getItem, getStoreById, makeApiRequest, storeItem } from '../utilities';

interface StoreProviderProps {
  children: React.ReactNode;
}

type StoreAction = { type: any; payload: any };

interface IStoreContext {
  localmarket: Array<any>;
  supermarket: Array<any>;
  getMarketId: (id: string, storeCase: string, city?: string) => Promise<void>;
  marketList: any[];
  productList: any[];
  isLoading: boolean;
  dataFetched: boolean
}

const initialState: IStoreContext = {
  localmarket: [],
  supermarket: [],
  getMarketId: async (id, storeCase, city) => {},
  marketList: [],
  productList: [],
  isLoading: false,
  dataFetched:false
};

const reducer = (state: IStoreContext, action: StoreAction) => {
  switch (action.type) {
    case 'FETCH_DATA': {
      const { localmarketData, supermarketData } = action.payload;
      return {
        ...state,
        localmarket: localmarketData.data.local_market,
        supermarket: supermarketData.data.supermarket,
        // isLoading: false
      };
    }
    case 'UPDATE_STORE_LIST': {
      const stores = action.payload;
      return {
        ...state,
        marketList: stores,
        //  isLoading: false
      };
    }

    case 'UPDATE_PRODUCT_LIST': {
      const stores = action.payload;
      return {
        ...state,
        productList: stores,
        //  isLoading: false
      };
    }
    default:
      return state;
  }
};

const StoreContext = createContext<IStoreContext>(initialState);

const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const marketId = getItem('M_id');
  const marketCity = getItem('city');
  const productId = getItem('P_id');

  const fetchData = async () => {
    try {
      // state.isLoading = true;
      const localMarket_req = await makeApiRequest('/local-markets', 'GET');
      const supermarket_req = await makeApiRequest('/supermarkets', 'GET');

      const localmarketData = localMarket_req;
      const supermarketData = supermarket_req;

      dispatch({ type: 'FETCH_DATA', payload: { localmarketData, supermarketData } });
    } catch (error) {
      throw error;
    }
  };

  const getMarketId = async (id: string, storeCase: string, city?: string) => {
    try {
      // state.isLoading = true;

      const stores = await getStoreById(id, storeCase);
      if (stores) {
        console.log('stores', state.isLoading);
        switch (storeCase) {
          case 'MARKET_STORES':
            storeItem('M_id', id);
            storeItem('city', city);
            dispatch({ type: 'UPDATE_STORE_LIST', payload: stores });
            break;
          case 'STORES_PRODUCTS':
            storeItem('P_id', id);
            dispatch({ type: 'UPDATE_PRODUCT_LIST', payload: stores });
            break;
          default:
        }
      }
    } catch (error) {
      console.warn(error);
    }
    // finally {
    //   state.isLoading = true;
    // }
  };

  useEffect(() => {
    fetchData();

    if ((!state.marketList.length|| !state.productList.length) && !state.dataFetched ) {
      if (marketId && marketCity) getMarketId(marketId, 'MARKET_STORES', marketCity);
      if (productId) getMarketId(productId, 'STORES_PRODUCTS');
      state.dataFetched = true
    }
  }, [state.marketList, state.productList]);

  const storeContextValue = {
    localmarket: state.localmarket,
    supermarket: state.supermarket,
    getMarketId: getMarketId,
    marketList: state.marketList,
    productList: state.productList,
    isLoading: state.isLoading,
    dataFetched:state.dataFetched
  };

  return <StoreContext.Provider value={storeContextValue}>{children}</StoreContext.Provider>;
};
const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };
