import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import axios from "axios";
// css
import "./index.css";
// App components
import App from "./App";

axios.defaults.headers.common["Authorization"] = `token ${process.env.REACT_APP_GITHUB_TOKEN}`

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
