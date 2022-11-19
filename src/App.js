import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Comps/Main";
import Nav from "./Comps/Nav";
import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

export const Context = createContext();

function App() {
  const [photos, setPhotos] = useState([]);
  console.log(photos);

  const apiCall = async (call) => {
    let url = `https://api.unsplash.com/search/photos?query=${call}&per_page=20&client_id=Az5mxRKorPPhF83198cBkP2XxlF49fMzYD-Bc98YNfc`;
    const response = await axios.get(url);
    setPhotos(response.data.results);
  };

  // Search

  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);

    setPhotos(
      photos.filter((photo) => {
        return photo.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <Nav />
      <Context.Provider className="App" value={photos}>
        {
          <div className="search-container flex jcc">
            <input
              onChange={(e) => searchHandler(e)}
              className="input-search"
              value={search}
              placeholder="  Enter your search..."
            />
            <button onClick={() => apiCall(search)} className="btn-search">
              &#x1F50D;
            </button>
          </div>
        }
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
