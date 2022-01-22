import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface CartProviderProps {
  children: ReactNode;
}

interface SetCart {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  qtd: number;
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
  const addToCart = (item: SetCart) => {
    if (item !== cartItem.find((itemF) => itemF === item)) {
      item.qtd = 1;
      setCartItem([...cartItem, item]);
    } else {
      item.qtd += 1;
    }
  };
  useEffect(() => {
    setCartItem(cartItem);
  }, [cartItem]);

  const removeFromCart = (itemToRemove: SetCart) => {
    itemToRemove.qtd -= 1;

    if (itemToRemove.qtd < 1) {
      setCartItem(cartItem.filter((item) => item.id !== itemToRemove.id));
    }
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
