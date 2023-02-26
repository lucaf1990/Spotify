import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllCards from "./Components/AllCards";
import MyNavBar from "./Components/MyNavBar";
import MyPlayer from "./Components/MyPlayer";
import Album from "./Components/Album";
import Artist from "./Components/Artist";
import SearchResaults from "./Components/SearchResaults";
import MyFav from "./Components/MyFav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<AllCards />} />
          <Route path="/Album" element={<Album />} />
          <Route path="/Artist" element={<Artist />} />
          <Route path="/SearchResults" element={<SearchResaults />} />
          <Route path="/MyFavourite" element={<MyFav />} />
        </Routes>
        <MyPlayer />
      </BrowserRouter>
    </div>
  );
}
export default App;
