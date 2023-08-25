import {StrictMode} from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Routes from "./routes";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <StrictMode>
    <Routes tab='home' />
  </StrictMode>,
);

