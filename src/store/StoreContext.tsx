import React from 'react';

type CartItem = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

type Option = {
  id: string;
  label: string;
  path: string;
};
type Supermarkets = {
  id: number,
  name: string
  image: string
}
// { "id": 1, "name": "Supermarket 1", "image": "path/to/image1.jpg" },
const StoreContext = React.createContext({

  superMarkets: [] as any,
  handleMarkets: (market: string) => {},

});

export default StoreContext;
