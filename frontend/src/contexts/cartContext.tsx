import React, { createContext, ReactNode, useContext, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface SetCart {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
interface TotalCart {
  totalCart: number;
}
interface CartContextData {
  cartItem: SetCart[];
  addToCart: (item: SetCart) => void;
  removeFromCart: (itemToRemove: SetCart) => void;
  clearCart: () => void;
  setCartItem: React.Dispatch<React.SetStateAction<SetCart[]>>;
}
const CartContext = createContext<CartContextData>({} as CartContextData);

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useAuth must be used whitin an AuthPRovider");
  }
  return context;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItem, setCartItem] = useState<SetCart[]>([]);
  const [qtd, setQtd] = useState(1);
  const addToCart = (item: SetCart) => {
    if (item !== cartItem.find((itemF) => itemF === item)) {
      setCartItem([...cartItem, item]);
    } else {
      // handleUp();
    }
  };
  // const handleUp = () => {
  //   setQtd(qtd + 1);
  // };
  // const handleDown = () => {
  //   setQtd(qtd - 1);
  // };
  const removeFromCart = (itemToRemove: SetCart) => {
    setCartItem(cartItem.filter((item) => item.id !== itemToRemove.id));
  };
  const clearCart = () => {
    setCartItem([]);
  };
  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
