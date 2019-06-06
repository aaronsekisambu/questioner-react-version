import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import '../src/styles/landingPage.scss';
import App from "./components/App";
import store from "./redux/store/store";
import * as serviceWorker from "./serviceWorker";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
