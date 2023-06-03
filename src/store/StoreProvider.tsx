import React, { useContext, createContext, useReducer, useEffect, useState, useCallback } from 'react';
import { addItemToStorage, getItem, getStoreById, makeApiRequest, removeItem, storeItem, updateDuplicateItem } from '../utilities';

interface StoreProviderProps {
  children: React.ReactNode;
}

type StoreAction = { type: any; payload?: any };

interface IStoreContext {
  localmarket: Array<any>;
  supermarket: Array<any>;
  getMarketId: (id: string, storeCase: string, city?: string) => Promise<void>;
  cartUtils: (id: string, cartCase: string, updateCase?: string, quantity?: number) => Promise<void>;
  cartTotal: number;
  cartItemsCount: number;
  cartItems: any[];
  marketList: any[];
  productList: any[];
  isLoading: boolean;
  dataFetched: boolean;
  login: (data: object) => Promise<void>;
}

const initialState: IStoreContext = {
  localmarket: [],
  supermarket: [],
  getMarketId: async (id, storeCase, city) => {},
  cartUtils: async (id, cartCase, updateCase, quantity) => { },
  cartTotal: 0,
  cartItemsCount: 0,
  cartItems: [],
  marketList: [],
  productList: [],
  isLoading: false,
  dataFetched: false,
  login: async (id) => {},
};

const CartData = getItem('cartData');

const reducer = (state: IStoreContext, action: StoreAction) => {
  switch (action.type) {
    case 'LOAD_MARKETS': {
      const { localmarketData, supermarketData } = action.payload;
      return {
        ...state,
        localmarket: localmarketData.data.local_market,
        supermarket: supermarketData.data.supermarket,
        isLoading: false,
      };
    }
    case 'UPDATE_MARKET_STORES': {
      const stores = action.payload;
      return {
        ...state,
        marketList: stores,
        isLoading: false,
      };
    }

    case 'UPDATE_STORES_PRODUCTS': {
      const stores = action.payload;
      return {
        ...state,
        productList: stores,
        isLoading: false,
      };
    }
    case 'IS_LOADING': {
      const status = action.payload;
      return {
        ...state,
        isLoading: status,
      };
    }
    case 'DATA_FETCHED': {
      const status = action.payload;
      return {
        ...state,
        dataFetched: status,
      };
    }
    case 'UPDATED_CART': {
      const data = action.payload;
      let cartSum = 0;
      let quantity= 0
      data.forEach((item: { subTotal:string, quantity:number }) => {
        cartSum += Number(item.subTotal)
        quantity += item.quantity
      })
      console.log(cartSum, quantity, data)

      return {
        ...state,
        cartTotal: cartSum,
        cartItemsCount: quantity,
        cartItems:data
      };
    }

    default:
      return state;
  }
};

const StoreContext = createContext<IStoreContext>(initialState);

const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const CartData = getItem('cartData');


  const marketId = getItem('MS_id');
  const marketCity = getItem('city');
  const productId = getItem('SP_id');

  const fetchData = async () => {
    dispatch({ type: 'IS_LOADING', payload: true });
    try {
      const localMarket_req = await makeApiRequest('/local-markets', 'GET');
      const supermarket_req = await makeApiRequest('/supermarkets', 'GET');

      const localmarketData = localMarket_req;
      const supermarketData = supermarket_req;

      dispatch({ type: 'LOAD_MARKETS', payload: { localmarketData, supermarketData } });
    } catch (error) {
      throw error;
    }
  };

  const getMarketId = async (id: string, storeCase: string, city?: string) => {
    dispatch({ type: 'IS_LOADING', payload: true });
    try {
      const stores = await getStoreById(id, storeCase);
      if (stores) {
        switch (storeCase) {
          case 'MARKET_STORES':
            storeItem('MS_id', id);
            storeItem('city', city);
            dispatch({ type: 'UPDATE_MARKET_STORES', payload: stores });
            break;
          case 'STORES_PRODUCTS':
            storeItem('SP_id', id);
            dispatch({ type: 'UPDATE_STORES_PRODUCTS', payload: stores });
            break;
          default:
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const cartUtils = async (id: string, cartCase: string, updateCase?:string,) => {
    try {
      switch (cartCase) {
        case 'ADD': //add to cart
          
          // populate new cart data to session storage
          const addToStorageRes = await addItemToStorage(id, CartData );
          if (addToStorageRes) {
            dispatch({ type: 'UPDATED_CART', payload:addToStorageRes});

          }

          break;
        case 'REMOVE': // remove cart by id
          const remove_res = await removeItem(CartData,id)
          if (remove_res)
            dispatch({ type: 'UPDATED_CART', payload: remove_res });

          break;
        case 'UPDATE': // update quantity
          const update_res =updateDuplicateItem(CartData,id,updateCase) ;
          if (update_res)
            dispatch({ type: 'UPDATED_CART', payload:update_res });

          break;
        case 'REMOVE_CART': //remove all items in cart
          const removeCart_res = await makeApiRequest(`/remove`, 'GET');
          if (removeCart_res) console.log(removeCart_res);
          break;
        default:
      }
    } catch (error) {
      console.warn(error);
    }
  };
  const login = async (data: object) => {
    const res = await makeApiRequest('/login', 'POST', data);
    if (res) {
      console.log(res);
    }
  };
  useEffect(() => {
    fetchData();
    CartData && dispatch({ type: 'UPDATED_CART', payload:CartData});
    if ((!state.marketList.length || !state.productList.length) && !state.dataFetched) {
      if (marketId && marketCity) getMarketId(marketId, 'MARKET_STORES', marketCity);
      if (productId) getMarketId(productId, 'STORES_PRODUCTS');
      dispatch({ type: 'DATA_FETCHED', payload: true });
    }
  }, [state.marketList, state.productList]);

  const storeContextValue = {
    localmarket: state.localmarket,
    supermarket: state.supermarket,
    getMarketId: getMarketId,
    cartUtils: cartUtils,
    cartTotal: state.cartTotal,
    cartItemsCount: state.cartItemsCount,
    cartItems: state.cartItems,
    marketList: state.marketList,
    productList: state.productList,
    isLoading: state.isLoading,
    dataFetched: state.dataFetched,
    login: login,
  };

  return <StoreContext.Provider value={storeContextValue}>{children}</StoreContext.Provider>;
};
const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };
