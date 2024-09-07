import App from "./App";
import Store from "./components/Store/Store";
import Homepage from "./components/Homepage/Homepage";
import Cart from "./components/Cart/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "store/", element: <Store /> },
      { path: "cart/", element: <Cart /> },
    ],
  },
];

export default routes;
