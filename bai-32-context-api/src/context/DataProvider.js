import React, { createContext, useState, useEffect } from "react";
import { getUsers } from "../services/user";
import { getBooks } from "../services/book";
import { createTransacton } from "../services/transaction";

const DataContext = createContext(null);

const DataProvider = (props) => {
  const userDefault = {
    id: "",
    name: "",
    email: "",
    isAdmin: false,
    avatarUrl: "",
    wrongLoginCount: "",
    password: "",
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(userDefault);

  const [cart, setCart] = useState(null);
  const [cartSize, setCartSize] = useState(0);
  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  useEffect(() => {
    getBooks().then((res) => setBooks(res));
  }, []);

  const addToCart = (book, cb = () => {}) => {
    const newCart = cart ? { ...cart } : {};
    // check idBook exists
    if (newCart[book.id]) {
      cb();
      return;
    }
    newCart[book.id] = { ...book, count: 1 };
    setCart(newCart);
    setCartSize(cartSize + 1);
  };

  const removeBookInCart = (bookId) => {
    let newCart = { ...cart };
    delete newCart[bookId];
    setCart(newCart);
    setCartSize(cartSize - 1);
  };

  const resetUser = () => {
    setUser(userDefault);
    setIsAuthenticated(false);
  };

  const rentBook = async () => {
    if (!cart) return;
    const newA = Object.values(cart);
    const bookId = newA.map((item) => item.id);
    await createTransacton(user.id, bookId).then((res) => {
      setCart();
      setCartSize(0);
      return res;
    });
  };
  return (
    <DataContext.Provider
      value={{
        cart: { cart, cartSize },
        account: { user, setUser },
        auth: { isAuthenticated, setIsAuthenticated, resetUser },
        listUser: { users },
        listBook: { books },
        actions: {
          addToCart,
          removeBookInCart,
          rentBook,
        },
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export { DataContext, DataProvider };
