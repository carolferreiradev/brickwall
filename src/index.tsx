import ReactDOM from "react-dom";
import { App } from "./App";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <>
    <Header />
    <App />
    <Footer />
    <GlobalStyle />
  </>,
  document.getElementById("root")
);
