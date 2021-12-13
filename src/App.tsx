
import { About } from "./components/about";
import { Deposition } from "./components/deposition";
import { Form } from "./components/form";
import { Initiatives } from "./components/initiatives";
import { Trainer } from "./components/trainer";
import { Prices } from "./components/prices";
import { Welcome } from "./components/welcome";
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <Welcome />
      <About />
      <Initiatives />
      <Deposition/>
      <Trainer />
      <Prices/>
      <Form />
    </>
  );
}
