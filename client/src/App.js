import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CategoryDetails from "./components/CategoryDetails";
import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  const theme = createTheme({
    palette: {
      type: "dark",
      background: {
        default: "#1E1F21",
      },
    },
    typography: {
      fontFamily: "Quicksand",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/category/:id" exact element={<CategoryDetails />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
