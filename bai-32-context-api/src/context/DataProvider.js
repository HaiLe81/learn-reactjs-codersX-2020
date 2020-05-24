import React, { createContext, useState, useEffect } from "react";
import { getUsers } from "../services/user";
import { getBooks } from "../services/book";
import { createTransacton, getTransaction } from "../services/transaction";

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
  const [user, setUser] = useState(userDefault);
  const [books, setBooks] = useState([]);
  const [transactions, setTransactions] = useState();
  const [cart, setCart] = useState(null);
  const [cartSize, setCartSize] = useState(0);

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  useEffect(() => {
    getBooks().then((res) => setBooks(res));
  }, []);

  useEffect(() => {
    getTransaction().then((res) => setTransactions(res));
  });

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
    let userId = user.id;
    if (!cart) return;
    const newA = Object.values(cart);
    const bookId = newA.map((item) => item.id);
    await createTransacton(userId, bookId).then((res) => {
      setCart();
      setCartSize(0);
      setTransactions(res.transactions)
      return res;
    });
  };


  const getBookById = (bookId) => {
    const result = books.find((item) => item.id === bookId);
    return result.title;
  };
  return (
    <DataContext.Provider
      value={{
        cart: { cart, cartSize },
        account: { user, setUser },
        auth: { isAuthenticated, setIsAuthenticated, resetUser },
        listUser: { users },
        listBook: { books },
        listTrans: { transactions },
        actions: {
          addToCart,
          removeBookInCart,
          rentBook,
          getBookById,
        },
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export { DataContext, DataProvider };
