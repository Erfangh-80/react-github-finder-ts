import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
// css
import "./index.css";
// App components
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
