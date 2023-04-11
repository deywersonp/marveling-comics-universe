import { createContext, useState, useEffect, useCallback, ReactNode } from "react";
import { CART_STORAGED } from "@/config";
import { MarvelComicProps } from "@/types/marvelComic";
import { ProductProps } from "@/types/product";

type UpdateProductAmount = {
  comicId: number;
  amount: number;
};

type CartProviderProps = {
  children: ReactNode;
};

export type CartContextData = {
  cart: ProductProps[];
  addProduct: (comic: MarvelComicProps) => void;
  updateProductAmount: ({ comicId, amount }: UpdateProductAmount) => void;
  removeProduct: (comicId: number) => void;
};

export const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductProps[]>([]);

  const addProduct = useCallback((comic: MarvelComicProps) => {
    const updatedCart: ProductProps[] = JSON.parse(JSON.stringify(cart));
    const product = updatedCart.find(product => product.comic.id === comic.id);

    if (!!product) {
      updateProductAmount({
        comicId: product.comic.id,
        amount: product.amount + 1
      });
      return;
    };

    updatedCart.push({ comic, amount: 1 });
    setCart(updatedCart);
    localStorage.setItem(CART_STORAGED, JSON.stringify(updatedCart))

    //eslint-disable-next-line
  }, [cart]);

  const removeProduct = useCallback((comicId: number) => {
    try {
      const updatedCart: ProductProps[] = JSON.parse(JSON.stringify(cart));
      const productIndex = updatedCart.findIndex(product => product.comic.id === comicId);

      if (productIndex < 0) {
        throw new Error()
      };

      updatedCart.splice(productIndex, 1);
      setCart(updatedCart);
      localStorage.setItem(CART_STORAGED, JSON.stringify(updatedCart))
    } catch (err) {
      console.error(err);
    }
  }, [cart]);

  const updateProductAmount = useCallback(({ comicId, amount }: UpdateProductAmount) => {
    try {
      if (amount < 1 || amount > 5) {
        return
      };

      const newCart = [...cart].map(product => {

        if (product.comic.id !== comicId) {
          return product;
        }

        const updatedProduct = {
          ...product,
          amount,
        }

        return updatedProduct;
      });

      setCart(newCart);
      localStorage.setItem(CART_STORAGED, JSON.stringify(newCart));
    } catch (err) {
      console.error(err);
    };
  }, [cart]);

  useEffect(() => {
    const storagedCart = localStorage.getItem(CART_STORAGED);

    if (!!storagedCart) {
      setCart(JSON.parse(storagedCart));
    }
  }, []);

  return (
    <CartContext.Provider value={{
      cart,
      addProduct,
      removeProduct,
      updateProductAmount,
    }}>
      {children}
    </CartContext.Provider>
  )
};