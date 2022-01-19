// import { createContext, ReactNode, useState } from "react";

// interface Products {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   img: string;
// }
// interface ProductsProviderProps {
//   children: ReactNode;
// }
// interface ProductContextData {
//   products: Products[];
// }
// const ProductContext = createContext<ProductContextData>(
//   {} as ProductContextData
// );
// export const ProductsProvider = ({ children }: ProductsProviderProps) => {
//   const [products, setProducts] = useState<Products[]>([
//     {
//       id: 1,
//       name: "Hamburguer",
//       category: "Sanduíches",
//       price: 14.0,
//       img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
//     },
//     {
//       id: 2,
//       name: "X-Burguer",
//       category: "Sanduíches",
//       price: 16.0,
//       img: "https://i.ibb.co/djbw6LV/x-burgue.png",
//     },
//     {
//       id: 3,
//       name: "Big Kenzie",
//       category: "Sanduíches",
//       price: 18.0,
//       img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
//     },
//     {
//       id: 4,
//       name: "Fanta Guaraná",
//       category: "Bebidas",
//       price: 5.0,
//       img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
//     },
//     {
//       id: 5,
//       name: "Coca",
//       category: "Bebidas",
//       price: 5.0,
//       img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
//     },
//     {
//       id: 6,
//       name: "MilkShake",
//       category: "Bebidas",
//       price: 5.0,
//       img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
//     },
//   ]);

//   return (
//     <ProductContext.Provider value={{ products, setProducts }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };
export const ok = () => {};
