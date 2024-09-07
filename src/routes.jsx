import App from "./App";
import Store from "./components/Store/Store";
import Homepage from "./components/Homepage/Homepage";
import Cart from "./components/Cart/Cart";
import Error from "./components/ErrorPage/Error";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "store/", element: <Store /> },
      { path: "cart/", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
];

export default routes;
