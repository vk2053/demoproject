import './App.css';
import Form from "./components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Form />}  />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
