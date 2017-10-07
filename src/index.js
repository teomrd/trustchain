import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store/configureStore";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
