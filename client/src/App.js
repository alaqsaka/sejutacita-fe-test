import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CategoryDetails from "./components/CategoryDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/category/:id" exact element={<CategoryDetails />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
