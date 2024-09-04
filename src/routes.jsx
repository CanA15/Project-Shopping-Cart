import App from "./App";
import Homepage from "./components/Homepage/Homepage";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Homepage />,
  },
];

export default routes;
