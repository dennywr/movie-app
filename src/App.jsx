import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Movie />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
