import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CategoryDetails from "./components/CategoryDetails";
import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import { CssBaseline } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#f5f5f5",
      },
    },
    typography: {
      fontFamily: "Quicksand",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
