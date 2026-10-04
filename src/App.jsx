import { Routes, Route } from "react-router-dom";

import Cursor from "./Components/Cursor";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Cursor />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;