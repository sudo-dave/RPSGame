import { BrowserRouter, Routes, Route } from "react-router-dom";
import Room from "./routes/Room";
import Home from "./routes/Home";
import Error from "./routes/Error";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error errorCode={404} />} />
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
