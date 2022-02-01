import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
//import Contact from ".//Contact";
//import About from "./pages/About";
import Form from "./components/Form";
import PromiseDemo from "./components/PromiseDemo";
import StudentTable from "./components/StudentTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/promise" element={<PromiseDemo />} />
        <Route exact path="/studentstable" element={<StudentTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
