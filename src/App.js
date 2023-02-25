import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllCards from "./Components/AllCards";
import MyNavBar from "./Components/MyNavBar";
import MyPlayer from "./Components/MyPlayer";
import Album from "./Components/Album";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<AllCards />} />
          <Route path="/Album" element={<Album />} />
        </Routes>
        <MyPlayer />
      </BrowserRouter>
    </div>
  );
}
export default App;
