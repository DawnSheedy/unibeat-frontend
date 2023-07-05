import * as ReactDOM from "react-dom";
import { Main } from "./Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.body
  );
}

render();
