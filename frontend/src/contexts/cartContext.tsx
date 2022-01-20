import { createContext, ReactNode, useContext, useState } from "react";

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
interface CartContextData {
  cartItem: SetCart[];
  addToCart: (item: SetCart) => void;
  removeFromCart: (itemToRemove: SetCart) => void;
  clearCart: () => void;
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
  const [cartItem, setCartItem] = useState<SetCart[]>([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
  ]);

  const addToCart = (item: SetCart) => {
    console.log("ok");
    setCartItem([...cartItem, item]);
  };
  const removeFromCart = (itemToRemove: SetCart) => {
    setCartItem(cartItem.filter((item) => item.id !== itemToRemove.id));
  };
  const clearCart = () => {
    setCartItem([]);
  };
  return (
    <CartContext.Provider
      value={{ cartItem, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
